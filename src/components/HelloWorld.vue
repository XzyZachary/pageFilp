<template>
  <div>
    <div class="container">
      <div class="flip-book" id="demoBookExample">
        <div class="page">
          <div class="page-content">
            <h2 class="page-header">Page header 1</h2>
            <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non
              convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
              Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id
              magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh
              sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
              mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non
              tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis
              tellus tellus id magna.</div>
            <div class="page-footer">2</div>
          </div>
        </div>
        <!-- PAGES .... -->
        <div class="page">
          <div class="page-content">
            <h2 class="page-header">Page header - 15</h2>
            <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non
              convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
              Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id
              magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh
              sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
              mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non
              tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis
              tellus tellus id magna.</div>
            <div class="page-footer">16</div>
          </div>
        </div>
        <div class="page">
          <div class="page-content">
            <h2 class="page-header">Page header - 16</h2>
            <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non
              convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
              Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id
              magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh
              sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
              mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non
              tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis
              tellus tellus id magna.</div>
            <div class="page-footer">17</div>
          </div>
        </div>
        <div class="page">
          <div class="page-content">
            <h2 class="page-header">Page header - 16</h2>
            <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non
              convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
              Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id
              magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh
              sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
              mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non
              tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis
              tellus tellus id magna.</div>
            <div class="page-footer">17</div>
          </div>
        </div>
        <div class="page">
          <div class="page-content">
            <h2 class="page-header">Page header - 16</h2>
            <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non
              convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
              Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id
              magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh
              sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
              mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non
              tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis
              tellus tellus id magna.</div>
            <div class="page-footer">17</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PageFlip } from 'page-flip';
export default {
  components: {},
  data() {
    return {
      pages: [],
      bookblockOptions: {
        speed: 800,
        shadowSides: 0.8,
        shadowFlip: 0.7,
        autoplay: true,
        orientation: "vertical"
      }
    };
  },
  mounted() {
    const pageFlip = new PageFlip(
      document.getElementById("demoBookExample"),
      {
        width: 500, // base page width
        height: 533, // base page height
        // set threshold values:
        minWidth: 315,
        maxWidth: 1000,
        maxShadowOpacity: 0.5, // Half shadow intensity
      }
    );

    // load pages
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  },
  watch: {
    pages(val) {
      this.bookblockOptions.autoplay = val.length > 0;
    }
  },
  computed: {
    bookblockRef: function () {
      return this.$refs.bookBlock;
    }
  }
};
</script>

<style lang="scss">
.flip-book {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  display: none;
  background-size: cover;
}

.container {
  position: relative;
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.page {
  padding: 20px;

  background-color: hsl(35, 55, 98);
  color: hsl(35, 35, 35);
  border: solid 1px hsl(35, 20, 70);

  overflow: hidden;

  .page-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;

    .page-header {
      height: 30px;
      font-size: 100%;
      text-transform: uppercase;
      text-align: center;
    }

    .page-image {
      height: 100%;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .page-text {
      height: 100%;
      flex-grow: 1;
      font-size: 80%;
      text-align: justify;
      margin-top: 10px;
      padding-top: 10px;
      box-sizing: border-box;
      border-top: solid 1px hsl(35, 55, 90);
    }

    .page-footer {
      height: 30px;
      border-top: solid 1px hsl(35, 55, 90);
      font-size: 80%;
      color: hsl(35, 20, 50);
    }
  }

  &.--left {
    // for left page (property will be added automatically)
    border-right: 0;
    box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, 0.4);
  }

  &.--right {
    // for right page (property will be added automatically)
    border-left: 0;
    box-shadow: inset 7px 0 30px -7px rgba(0, 0, 0, 0.4);

    .page-footer {
      text-align: right;
    }
  }

  &.hard {
    // for hard page
    background-color: hsl(35, 50, 90);
    border: solid 1px hsl(35, 20, 50);
  }

  &.page-cover {
    background-color: hsl(35, 45, 80);
    color: hsl(35, 35, 35);
    border: solid 1px hsl(35, 20, 50);

    h2 {
      text-align: center;
      padding-top: 50%;
      font-size: 210%;
    }

    &.page-cover-top {
      box-shadow: inset 0px 0 30px 0px rgba(36, 10, 3, 0.5), -2px 0 5px 2px rgba(0, 0, 0, 0.4);
    }

    &.page-cover-bottom {
      box-shadow: inset 0px 0 30px 0px rgba(36, 10, 3, 0.5), 10px 0 8px 0px rgba(0, 0, 0, 0.4);
    }
  }
}
</style>