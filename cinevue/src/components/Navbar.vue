<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-warning">
      <a class="navbar-brand" href="#">
        <img
          class="img"
          src="https://pbs.twimg.com/profile_images/1288534032020647936/FR_a2W9i_400x400.jpg"
          style="width: 70px;"
        />
        <label class="label">CineVue</label>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <i class="fas fa-thumbs-up">
                <span>Popular</span>
              </i>
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-play-circle">
                <span>Now Playing</span>
              </i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-list-alt">
                <span>Top Rated</span>
              </i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-file-video">
                <span>Upcoming</span>
              </i>
            </a>
          </li>
        </ul>
        <div class="icon">
          <button class="btn btn-danger">SIGN IN</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.img {
  border-radius: 50%;
}

.label {
  margin-left: 10px;
  font-family: "Racing Sans One", cursive;
  font-size: 30px;
}

.icon {
  margin-right: 80px;
}

span {
  margin-left: 3px;
}

li {
  font-size: 20px;
}
</style>