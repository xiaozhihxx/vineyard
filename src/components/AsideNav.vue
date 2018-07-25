<template>
    <div class="aside-nav">
        <ul class="menus">
            <li class="header">
                <div>header部分</div>    
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-th-large"></i>
                    <i class="label">统计</i>
                    <i class="fa fa-arrow"></i>
                </a>
                <ul class="menus-sub">
                    <li>
                        <a href="#">实时标注量</a>
                    </li>
                    <li>
                        <a href="#">在标数据量</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
};
</script>

<style>
.aside-nav {
    width: 220px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #2f4050;
}
</style>

