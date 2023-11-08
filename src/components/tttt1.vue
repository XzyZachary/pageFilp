<template>
    <div>
        <button @click="gotoPage">goto</button>
        <div class="overflow-hidden pb-3 pt-3">
            <div class="flip-book html-book stf__wrapper --landscape" id="htmlBookExample" ref="test">
                <div class="page stf__item">
                    <div class="page-content">
                        <h2 class="page-header">Page header - 1</h2>
                        <div class="page-image"
                            style="background-image: url(https://cdn.pixabay.com/photo/2013/04/03/21/25/cereals-100263__340.jpg)">
                        </div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.</div>
                        <div class="page-footer">1</div>
                    </div>
                </div>
                <div class="page stf__item">
                    <div class="page-content">
                        <h2 class="page-header">Page header - 2</h2>
                        <div class="page-image"
                            style="background-image: url(https://cdn.pixabay.com/photo/2016/01/08/17/06/poppy-1128683__340.jpg)">
                        </div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.</div>
                        <div class="page-footer">2</div>
                    </div>
                </div>
                <div class="page stf__item">
                    <div class="page-content">
                        <h2 class="page-header">Page header - 3</h2>
                        <div class="page-image"
                            style="background-image: url(https://cdn.pixabay.com/photo/2013/01/27/18/41/meadow-76358__340.jpg)">
                        </div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.</div>
                        <div class="page-footer">3</div>
                    </div>
                </div>
                <div class="page stf__item">
                    <div class="page-content">
                        <h2 class="page-header">Page header - 4</h2>
                        <div class="page-image"
                            style="background-image: url(https://cdn.pixabay.com/photo/2018/05/04/15/23/poppies-3374193__340.jpg)">
                        </div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.</div>
                        <div class="page-footer">4</div>
                    </div>
                </div>
                <div class="page stf__item">
                    <div class="page-content">
                        <h2 class="page-header">Page header - 5</h2>
                        <div class="page-image"
                            style="background-image: url(https://cdn.pixabay.com/photo/2018/06/01/16/45/red-3446714__340.jpg)">
                        </div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.</div>
                        <div class="page-footer">5</div>
                    </div>
                </div>
                <div class="page stf__item">
                    <div class="page-content">
                        <h2 class="page-header">Page header - 6</h2>
                        <div class="page-image"
                            style="background-image: url(https://cdn.pixabay.com/photo/2018/08/03/11/40/poppy-3581709__340.jpg)">
                        </div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.</div>
                        <div class="page-footer">6</div>
                    </div>
                </div>
                <div class="page stf__item">
                    <div class="page-content">
                        <h2 class="page-header">Page header - 7</h2>
                        <div class="page-image"
                            style="background-image: url(https://cdn.pixabay.com/photo/2019/06/02/11/22/poppy-flower-4246241__340.jpg)">
                        </div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.</div>
                        <div class="page-footer">7</div>
                    </div>
                </div>
                <div class="page stf__item">
                    <div class="page-content">
                        <h2 class="page-header">Page header - 8</h2>
                        <div class="page-image"
                            style="background-image: url(https://cdn.pixabay.com/photo/2019/06/02/21/18/red-poppy-4247574__340.jpg)">
                        </div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.</div>
                        <div class="page-footer">8</div>
                    </div>
                </div>
                <div class="page stf__item">
                    <div class="page-content">
                        <h2 class="page-header">Page header - 9</h2>
                        <div class="page-image"
                            style="background-image: url(https://cdn.pixabay.com/photo/2017/03/15/18/41/poppies-2147082__340.jpg)">
                        </div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.</div>
                        <div class="page-footer">9</div>
                    </div>
                </div>
                <div class="page stf__item"
                    style="position: absolute; display: block; height: 739.664px; left: 555px; top: 0.168182px; width: 555px; z-index: 1;">
                    <div class="page-content">
                        <h2 class="page-header">Page header - 10</h2>
                        <div class="page-image"
                            style="background-image: url(https://cdn.pixabay.com/photo/2017/08/03/22/16/poppy-2578514__340.jpg)">
                        </div>
                        <div class="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.</div>
                        <div class="page-footer">10</div>
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
            pageFlip: undefined
        }
    }, 
    mounted() {
        this.pageFlip = new PageFlip(
            document.getElementById("htmlBookExample"),
            {
                width: 500, // base page width
                height: 533, // base page height
                // set threshold values:
                minWidth: 315,
                maxWidth: 1000,
                maxShadowOpacity: 0.5, // Half shadow intensity
                mobileScrollSupport: true // disable content scrolling on mobile devices
            }
        );

        // load pages
        this.pageFlip.loadFromHTML(document.querySelectorAll(".page"));
    },
    methods: {
        gotoPage() {
            console.log(13132, this.pageFlip.flip)
            this.pageFlip.flip(3, 'top')
        }
    }
};
</script>

<style>
/*! CSS Used from: https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css */
*,
::after,
::before {
    box-sizing: border-box;
}

.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}


.bg-light {
    background-color: #f8f9fa !important;
}

.overflow-hidden {
    overflow: hidden !important;
}

.mb-2 {
    margin-bottom: 0.5rem !important;
}

.mt-3 {
    margin-top: 1rem !important;
}

.mb-3 {
    margin-bottom: 1rem !important;
}

.pt-3 {
    padding-top: 1rem !important;
}

.pb-3 {
    padding-bottom: 1rem !important;
}

.text-center {
    text-align: center !important;
}

.demo-block {
    border-top: solid 1px #dcdcdc;
    border-bottom: solid 1px #dcdcdc;
}

.flip-book {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    display: none;
}

.page {
    padding: 20px;
    background-color: #fdfaf7;
    color: #785e3a;
    border: solid 1px #c2b5a3;
    overflow: hidden;
}

.page .page-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
}

.page .page-content .page-header {
    height: 30px;
    font-size: 100%;
    text-transform: uppercase;
    text-align: center;
}

.page .page-content .page-image {
    height: 100%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
}

.page .page-content .page-text {
    height: 100%;
    flex-grow: 1;
    font-size: 80%;
    text-align: justify;
    margin-top: 10px;
    padding-top: 10px;
    box-sizing: border-box;
    border-top: solid 1px #f4e8d7;
}

.page .page-content .page-footer {
    height: 30px;
    border-top: solid 1px #f4e8d7;
    font-size: 80%;
    color: #998466;
}

.page.--left {
    border-right: 0;
    box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, 0.4);
}

.page.--right {
    border-left: 0;
    box-shadow: inset 7px 0 30px -7px rgba(0, 0, 0, 0.4);
}

.page.--right .page-footer {
    text-align: right;
}

/*! CSS Used from: Embedded */
.stf__wrapper {
    position: relative;
    display: block;
    box-sizing: border-box;
    transform: translateZ(0);
}

.stf__wrapper canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}


.stf__item {
    display: none;
    position: absolute;
}
</style>