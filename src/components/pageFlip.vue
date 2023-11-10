<template>
    <div>
        <div class="overflow-hidden pb-3 pt-3">
            <div class="flip-book html-book stf__wrapper --landscape" ref="htmlBook">
                <div class="page stf__item"  v-for="(item) in data" :key="item.title" ref="page">
                    <div class="page-content">
                        <h2 class="page-header">{{ item.title }}</h2>
                        <div class="page-text">{{ item.content }}</div>
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
            pageFlip: undefined,
            data: [{
                title: 'Page header - 1',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.`,
            }, {
                title: 'Page header - 2',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.`,
            }, {
                title: 'Page header - 3',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.`,
            }, {
                title: 'Page header - 4',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.`,
            }, {
                title: 'Page header - 5',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.`,
            }, {
                title: 'Page header - 6',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.`,
            }, {
                title: 'Page header - 7',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.`,
            }, {
                title: 'Page header - 8',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
                            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                            Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo
                            vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu.
                            Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam.
                            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a
                            venenatis tellus tellus id magna.`,
            }]
        }
    },
    mounted() {
        this.pageFlip = new PageFlip(
            this.$refs['htmlBook'],
            {
                width: 350, // base page width
                height: 380, // base page height
                // set threshold values:
            
                maxShadowOpacity: 0.5, // Half shadow intensity
                mobileScrollSupport: true // disable content scrolling on mobile devices
            }
        );

        // load pages
        this.pageFlip.loadFromHTML(this.$refs['page']);
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

.pt-3 {
    padding-top: 40px;
}

.pb-3 {
    padding-bottom: 40px;
}

.text-center {
    text-align: center !important;
}

.demo-block {
    border-top: solid 1px #dcdcdc;
    border-bottom: solid 1px #dcdcdc;
}

.flip-book {
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    display: none;
}

.page {
    padding: 5px;
    background-color: #fdfaf7;
    color: #785e3a;
    border: solid 1px #c2b5a3;
    overflow: hidden;
}

.page .page-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
}

.page .page-content .page-header {
    height: 10px;
    text-transform: uppercase;
    text-align: center;
}


.page .page-content .page-footer {
    height: 30px;
    border-top: solid 1px #f4e8d7;
    color: #998466;
}

.page.--left {
    border-right: 0;
    box-shadow: inset -1px 0 15px -1px rgba(0, 0, 0, 0.4);
}

.page.--right {
    border-left: 0;
    box-shadow: inset 1px 0 15px -1px rgba(0, 0, 0, 0.4);
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