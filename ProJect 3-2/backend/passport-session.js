const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const login = require('./login.model.js');
//const bcrypt = require('bcrypt')    //비밀번호를 암호화하는 경우 사용

module.exports = (app) => {
    app.use(cookieParser('passportExample'));
    app.use(session({
        resave: false,              // 
        saveUninitialized: false,   // 
        secret: 'passportExample',
        cookie: {
            httpOnly: true,
            secure: false,           //true이면 https에서만 올바르게 동작 ㅎㅎ
        }
    }));

    /* passport middleware */
    app.use(passport.initialize()); // passport 초기화
    app.use(passport.session()); // passport session 연동

    // 세션 처리 - 로그인에 성공했을 경우 딱 한번 호출되어 사용자의 식별자를 session에 저장
    passport.serializeUser(function (user, done) {
        console.log('serializeUser', user);
        done(null, user.username);
    });

    // 세션 처리 - 로그인 후 페이지 방문 마다 사용자의 실제 데이터 주입
    passport.deserializeUser((id, done)=> {
        login.findOne({username: id},(error,result)=>{
            done(error,result);     //db 사용자정보 컬렉션에서 해당 사용자 정보를 조회하고 req.user에 저장
        })
        console.log('deserializeUser', id);
    });

    passport.use(new LocalStrategy(
        function (username, password, done) {
            login.findOne({username: username}, (error, user)=>{
                if(error) return done(error);
                if(!user) {
                    console.log('로그인실패: 아디없음');
                    return done(null, false, {message: '존재하지 않는 아이디'});
                }
                if (password === user.password) { // password OK
                    return done(null, user);
                } else {
                    return done(null, false, { message: "비번 틀림" });
                }
                /*
                bcrypt.compare(password, user.password, (error, result)=>{  // 기존 로그인 확인 코드
                    try {
                        if(result) {
                            console.log('로그인성공');
                            return done(null, user);
                        } else {
                            console.log('로그인실패: 비번틀림');
                            return done(null, false, {message: '비번틀림'});
                        }
                    } catch(error) {
                        return done(error);
                    }
                })
                */
            })
        }
    ));

    /* 라우터 설정 */
    /* Passport Login : Strategy-Local */
    /* Authenticate Requests */
    app.post('/login', (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
          // err는 서버의 에러
            if (err) {
                console.error(err);
                return next(err);
            }
          // info는 로직 상의 에러
            if (info) {
                console.log(req.isAuthenticated());
                return res.send({code:0});
            }
          // 위의 모든 에러가 없다면 로그인 성공
          // req.login을 하면 서버쪽에 세션과 쿠키로 저장이 된다.
            return req.login(user, (loginErr) => {
            // loginErr가 터지면 next로 보내버리고
                if (loginErr) return next(loginErr);
            // 정상적이라면 비밀번호를 제외한 유저 정보를 클라이언트에게 보낸다.
                console.log(req.isAuthenticated());
                req.session.save((err) => {
                    if (err) {
                        console.error(err)
                        next(err)
                    } else {
                        res.send({code: 1});
                    }
                });   
            });       
        })(req,res,next); //미들웨어 내의 미들웨어에는 (req,res,next)를 붙인다.
    });

    app.get('/logout', function(req, res) {
        req.session.destroy(function(err) {
            if(err) {
                console.log(err);
            } else {
                res.clearCookie('connect.sid');  // 쿠키를 삭제합니다.
                res.redirect('/');
                console.log('로그아웃');
            }
        });
    });
}