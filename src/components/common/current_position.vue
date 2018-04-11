<template>
    <div class="location-wrapper">
        <el-row>
            <el-col :span="22">
                <span class="title">当前位置：</span>
                <el-breadcrumb separator="/" class="breadcrumb-inner">
                    <el-breadcrumb-item v-if="yiji" class="test1">{{yiji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="erji" class="test1">{{erji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="sanji" class="test1">{{sanji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="siji"  class="test1">{{siji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="wuji" class="test1">{{wuji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="liuji"  class="test1">{{liuji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if='false'>{{activeTab}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if='false'>{{pactNo}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if='false'>{{userNo}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if='false'>{{pactSubFlag}}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <!-- <el-col :span="2" v-show="breadItemLength>2">
                <img src="../../../static/img/common/back.png" alt="pic" width="19" height="12" class="pic" @click="jump">
            </el-col> -->
        </el-row>
    </div>
</template>

<script type='text/ecmascript-6'>
export default {
    data() {
        return {
            link: [],
            breadItemLength: 0,
        }
    },
    props: {
        yiji: {
            type: String,
            default: ''
        },
        erji: {
            type: String,
            default: ''
        },
        sanji: {
            type: String,
            default: ''
        },
        siji: {
            type: String,
            default: ''
        },
        wuji: {
            type: String,
            default: ''
        },
        liuji: {
            type: String,
            default: ''
        },
        activeTab: {
            type: String,
            default: ''
        },
        pactNo: {
            type: String,
            default: ''
        },
        userNo: {
            type: String,
            default: ''
        },
        pactSubFlag: {
            type: String,
            default: ''
        },
    }
}
</script>

<style scoped>
.location-wrapper {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    margin-left: 15px;
}

.location-wrapper .el-row {
    width: 100%;
}

.location-wrapper .title {
    color: #475669;
    vertical-align: middle;
}

.location-wrapper .breadcrumb-inner {
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
}

.pic {
    cursor: pointer;
}
</style>
