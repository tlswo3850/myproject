<template>
    <div id="app">
        <v-col>
            <div class="slider-container">
                <div class="slider">
                    <div class="images" ref="images">
                        <img v-for="(image, index) in imageSources" :key="index" :src="image" class="image" />
                    </div>
                    <div class="button-container">
                        <v-icon class="slider-icon" @click="prevSlide">mdi-chevron-left</v-icon>
                        <v-icon class="slider-icon" @click="nextSlide">mdi-chevron-right</v-icon>
                    </div>
                </div>
            </div>
        </v-col>
        <div style="display: flex; align-items: center;">
            <img src="https://www.siksinhot.com/static2/images/common/ico_best_3.png" alt="HOT"
                style="width: 50px; height: 50px; margin-right: 5px;">&nbsp;
            <h1 class="custom-heading" style="font-size: 3rem;">이태리국시</h1>&nbsp;
            <h2 style="color: orange; margin-right: 5px; font-size: 1.5rem;">4.4</h2>&nbsp;
            <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>
        </div>
        <h3 style="color: #888888;">독특한 메뉴의 한식 퓨전 파스타</h3>
        <div style="display: flex; align-items: center;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ASXjGIo986PggHToAPpmwuyk9bO2eIsgpQ&usqp=CAU"
                style="width: 20px; height: 20px; margin-right: 5px;">
            <p class="custom-heading" style="font-size: 12px; margin-bottom: 0;">29701</p>&nbsp;&nbsp;
            <img src="data:image/png;base64,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"
                style="width: 20px; height: 20px; margin-right: 5px;">
            <p class="custom-heading" style="font-size: 12px; margin-bottom: 0;">59</p>&nbsp;&nbsp;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYojtp98XI0qyv4sKILEgHfAg1E1D4g8ZP1Q&usqp=CAU"
                style="width: 20px; height: 20px; margin-right: 5px;">
            <p class="custom-heading" style="font-size: 12px; margin-bottom: 0;">39</p>&nbsp;&nbsp;
        </div>
        <h3>
            <span class="underline">대전</span> > <span class="underline">서구-둔산/탄방</span>
        </h3><br>
        <v-row>
            <v-col>
                <div class="content-box">
                    <h2>매장 소개</h2><br>
                    <p style="text-align: justify; text-justify: inter-word; font-size: 16px;">
                        우송대 외식조리학부 졸업생들이 만든 곳으로 새롭고 창의적인 음식을 만들어 내는 공간입니다. 이태리 국시는 이태리 파스타와 국수의 사투리 '국시'가 만나서 한식의 식재료를 활용하여
                        새로운 파스타를 만든다는 의미입니다. 메뉴는 샐러드, 피자, 국물국시, 비빔국시, 크림국시, 밥&리조또 등이 있습니다. 유자 고르곤졸라 말이 피자, 해물육수와 야채육수로 만든
                        칼칼한 국물 파스타인 이태리 국시, 제육불고기 고추장 크림국시 등이 인기 메뉴입니다. 오픈주방에 모던한 인테리어로 사람들이 많이 찾는 곳입니다.
                    </p>
                </div>
            </v-col>
            <v-col>
                <div class="content-box"><br>
                    <h3>영업시간　　<span class="light-text">일11:30 ~ 21:00주중11:30 ~ 21:30</span></h3>
                    <h3 class="light-text">　　　　　　　　　&nbsp;토 11:30 ~ 22:00</h3><br>
                    <h3>주소　　
                        <span class="light-text">대전광역시 서구 둔산로31번길 31 방림빌딩 2층</span>
                    </h3><br>
                    <div style="display: flex; align-items: center;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div
                            style="border: 1px solid black; background-color: white; color: grey; padding: 4px; border-radius: 5px; display: inline-block;">
                            <h5 style="margin: 0;">지번</h5>
                        </div>
                        <h5 style="display: inline-block; margin-left: 5px; color: grey;">대전광역시 서구 둔산동 990 방림빌딩 2층</h5>
                    </div><br>
                    <h3>　전화번호　　<span class="light-text">
                            042-485-0950</span></h3><br>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            width: 460,
            height: 300,
            current: 0,
            imageSources: [
                "https://img.siksinhot.com/place/1453345834825612.jpg?w=307&h=300&c=Y",
                "https://img.siksinhot.com/place/1453345976225623.jpg?w=307&h=300&c=Y",
                "https://img.siksinhot.com/place/1453345954372619.JPEG?w=307&h=300&c=Y",
                "https://img.siksinhot.com/place/1453345954373620.jpg?w=307&h=300&c=Y"
            ]
        };
    },
    mounted() {
        this.startSlideshow();
    },
    methods: {
        setCurrent(index) {
            this.current = index;
            this.moveTo();
        },
        startSlideshow() {
            setInterval(this.nextSlide, 3000);
        },
        moveTo() {
            this.$nextTick(() => {
                const images = this.$refs.images;
                if (images) {
                    images.style.left = `-${this.current * this.width}px`;
                }
            });
        },
        prevSlide() {
            this.current =
                (this.current - 1 + this.imageSources.length) % this.imageSources.length;
            this.moveTo();
        },
        nextSlide() {
            this.current = (this.current + 1) % this.imageSources.length;
            this.moveTo();
        }
    }
};
</script>
  
<style scoped>
.slider-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
}

.slider {
    position: relative;
    width: 460px;
    height: 300px;
    overflow: hidden;
}

.images {
    position: absolute;
    display: flex;
    width: calc(460px * 4);
    transition: left 0.5s ease-in-out;
}

.image {
    width: 500px;
    height: 320px;
    object-fit: cover;
}

.button-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.slider-icon {
    font-size: 24px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
}

.slider-icon:hover {
    background-color: rgba(0, 0, 0, 0.7);
}

.fa-chevron-left:before {
    content: "\f060";
}

.fa-chevron-right:before {
    content: "\f061";
}

.light-text {
    opacity: 0.6;
    color: grey;
    font-size: 14px;
}

.square-button {
    display: inline-block;
    padding: 10px 20px;
    margin-top: 10px;
    background-color: #ccc;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
}

.text-container {
    text-align: center;
    /* 텍스트를 가운데 정렬합니다. */
}

.content-box {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 10px;
    /* 둥근 사각형 테두리를 위한 속성 */
}

.custom-heading {
    font-size: 48px;
    /* 글씨 크기를 조절합니다. */
    font-family: 'Playfair Display', sans-serif;
    /* 원하는 폰트로 변경합니다. */
    color: #333;
    /* 글자 색상을 지정합니다. */
}

.box {
    background-color: transparent;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
}

.underline {
    text-decoration: underline;
}
</style>