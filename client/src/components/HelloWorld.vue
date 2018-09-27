<template>
  <div class="hello">
    <div class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="twPc-div">
              <a class="twPc-bg twPc-block bg-info"></a>
              <div>
                <a title="Mert S. Kaplan" href="https://twitter.com/mertskaplan" class="twPc-avatarLink">
                  <img alt="Mert S. Kaplan" src="https://mertskaplan.com/wp-content/plugins/msk-twprofilecard/img/mertskaplan.jpg" class="twPc-avatarImg">
                </a>

                <div class="twPc-divUser">
                  <div class="twPc-divName">
                    <a href="https://twitter.com/mertskaplan">Mert S. Kaplan</a>
                  </div>
                  <span>
                    <a href="https://twitter.com/mertskaplan">@<span>mertskaplan</span></a>
                  </span>
                </div>

                <div class="twPc-divStats">
                  <ul class="twPc-Arrange">
                    <li class="twPc-ArrangeSizeFit">
                      <a href="https://twitter.com/mertskaplan" title="9.840 Tweet">
                        <span class="twPc-StatLabel twPc-block">Tweets</span>
                        <span class="twPc-StatValue">9.840</span>
                      </a>
                    </li>
                    <li class="twPc-ArrangeSizeFit">
                      <a href="https://twitter.com/mertskaplan/following" title="885 Following">
                        <span class="twPc-StatLabel twPc-block">Following</span>
                        <span class="twPc-StatValue">885</span>
                      </a>
                    </li>
                    <li class="twPc-ArrangeSizeFit">
                      <a href="https://twitter.com/mertskaplan/followers" title="1.810 Followers">
                        <span class="twPc-StatLabel twPc-block">Followers</span>
                        <span class="twPc-StatValue">1.810</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="card  mb-3" style="max-width: 18rem;">
              <div class="card-body">
                <input type="text" placeholder="Search...">
                <button class="btn-info">Search</button>
              </div>
            </div>

            <div class="card  mb-3" style="max-width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Recently Followed</h5>
                <ul id="recently-followed">
                  <li>
                    <a href="#">infobandung</a>
                  </li>
                  <li>
                    <a href="#">pramborsfm</a>
                  </li>
                  <li>
                    <a href="#">thebalibible</a>
                  </li>
                  <li>
                    <a href="#">threewisemonkeys</a>
                  </li>
                  <li>
                    <a href="#">sushitei</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
