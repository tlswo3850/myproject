module.exports = (app) => {
    const devices = require('./device.controller.js');  //contact.controller.js를 로딩
    const datas = require('./data.controller.js');  //contact.controller.js를 로딩
    const datatimes = require('./datatime.controller.js');
    const datapacks = require('./datapack.controller.js');

    const authenticateUser = (req, res, next) => {
        console.log(req.isAuthenticated());
        if (req.isAuthenticated()) {
            console.log('인증 성공');
            next();
        } else {
            console.log('인증 실패');
            res.send({ code: 2 });
        }
    };
    app.get('/devices', authenticateUser, devices.findAll);             //모든 장치 검색
    app.get('/devices/:deviceId', devices.findOne);  //특정 장치 검색
    app.post('/devices', authenticateUser, devices.create);             //새로운 장치 추가
    app.put('/devices/:deviceId', devices.update);   //특정 장치 업데이트
    app.delete('/devices/:deviceId', devices.delete); //특정 장치 삭제

    app.post('/datas', datas.create);  //장치 데이터 업로드
    app.get('/datas/:deviceId', datas.findOne); //특정 장치의 데이터 검색

    const logins = require('./login.controller.js');
    app.get('/logins', logins.findAll);      //모든 Id 검색
    app.get('/logins/:Id', logins.findOne);  //특정 Id 검색
    app.post('/logins', logins.create);      //새로운 Id 추가, 회원 가입
    app.put('/logins/:Id', logins.update);   //특정 Id 업데이트
    app.delete('/logins/:Id', logins.delete); //특정 Id 삭제

    // datatimes 라우팅 - deviceId를 기준으로 업데이트 및 삭제
    app.post('/datatimes', datatimes.create);
    app.get('/datatimes/:deviceId', datatimes.findOne);
    app.put('/datatimes/:deviceId/:timeId', datatimes.updateByTimeId);   // timeId를 기준으로 업데이트
    app.delete('/datatimes/:deviceId/:timeId', datatimes.deleteByTimeId); // timeId를 기준으로 삭제

    // datapack 라우팅 - deviceId를 기준으로 업데이트 및 삭제
    app.post('/datapacks', datapacks.create);
    app.get('/datapacks/:deviceId', datapacks.findOne);
    app.put('/datapacks/:deviceId/:packId', datapacks.updateByPackId);   // timeId를 기준으로 업데이트
    app.delete('/datapacks/:deviceId/:packId', datapacks.deleteByPackId); // timeId를 기준으로 삭제
}
