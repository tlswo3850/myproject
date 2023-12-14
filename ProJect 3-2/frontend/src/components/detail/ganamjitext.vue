<template>
  <div>
    <div class="review-list">
      <h1 style="display: inline; font-size: 30px;">리뷰 목록</h1>
      <div style="display: inline;">&nbsp;&nbsp;
        <a href="#" class="review-view-link" @click="showReviews">리뷰 보기</a>
      </div>

      <ul v-if="showReviewList" class="reviews">
        <li v-for="(review, index) in reviews" :key="index" class="review-item">
          <h3 class="review-name">{{ review.name }}</h3>
          <p class="review-text">{{ review.review_text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      reviews: [],
      showReviewList: false
    };
  },
  methods: {
    async getOckReviews() {
      try {
        const response = await axios.get("https://www.siksinhot.com/P/270091");
        const html = response.data;
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const ulList = Array.from(doc.querySelectorAll("div.store_review div.place_review_list ul.place_review_list_ul li"));
        const reviews = ulList.map(li => {
          const name = li.querySelector("div.name").textContent.trim();
          const action = li.querySelector("div.action").textContent.trim();
          const review_text = li.querySelector("div.review_text").textContent.trim();
          return { name, action, review_text };
        });

        this.reviews = reviews.filter(n => n.name && n.action && n.review_text);
      } catch (error) {
        console.error("오류 발생:", error);
        // 오류 처리
      }
    },
    showReviews() {
      this.showReviewList = !this.showReviewList;
      if (this.showReviewList && this.reviews.length === 0) {
        this.getOckReviews();
      }
    }
  }
};
</script>

<style>
.review-list {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  border-radius: 10px;
}

h1 {
  font-size: 24px;
  margin-bottom: 15px;
}

.reviews {
  list-style-type: none;
  padding: 0;
}

.review-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 20px;
}

.review-name {
  font-size: 18px;
  margin-bottom: 5px;
}

.review-text {
  color: #333;
}

.review-view-link {
  color: #666;
  text-decoration: none;
  margin-bottom: 15px;
  display: inline-block;
}

.review-view-link:hover {
  text-decoration: underline;
}
</style>
