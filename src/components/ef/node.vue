<template>
    <div    ref="node"
            :style="nodeContainerStyle"
            @click="clickNode"
            @mouseup="changeNodeSite"
            :class="nodeContainerClass" 
    >
        <div class="ef-node-left"></div>
        <template v-if="node.ename && node.name">
            <div v-if="node.ename" style="font-size:12px; display: block; position: absolute; top: 12px; left: 10px; text-align: center;" >
                {{node.ename}}
            </div>
            <div v-if="node.name" style="font-size: 12px; display: block; position: absolute; top: 32px; left: 10px; text-align: center;" >
                {{node.name}}
            </div>
            <div style="font-size:12px; display: block; position: absolute; top: 45px; left: 10px; text-align: center; transform:scale(0.8); " >
                {{ node.descript }}
            </div> 
        </template>   
         <template v-if="!(node.ename && node.name)">
            <div style="font-size:12px; display: block; position: absolute; top: 22px; left: 10px; text-align: center;" >
                {{node.ename || node.name}}
            </div>
            <div style="font-size:12px; display: block; position: absolute; top: 38px; left: 10px; text-align: center; transform:scale(0.8); " >
                {{ node.descript }}
            </div> 
        </template>  
        <!-- 节点状态图标 -->
        <div class="ef-node-right-ico">
            <i class="el-icon-circle-check el-node-state-success" v-show="node.state === 'success'"></i>
            <i class="el-icon-circle-close el-node-state-error" v-show="node.state === 'error'"></i>
            <i class="el-icon-warning-outline el-node-state-warning" v-show="node.state === 'warning'"></i>
            <i class="el-icon-loading el-node-state-running" v-show="node.state === 'running'"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            node: Object,
            activeElement: Object
        },
        data() {
            return {}
        },
        computed: {
            nodeContainerClass() {
                return {
                    'ef-node-container': true,
                    'ef-node-active': this.activeElement.type == 'node' ? this.activeElement.nodeId === this.node.id : false
                }
            },
            // 节点容器样式
            nodeContainerStyle() {
                return {
                    top: this.node.top,
                    left: this.node.left,
                    width: '280px',
                    height:'65px',
                }
            },
            nodeIcoClass() {
                var nodeIcoClass = {}
                nodeIcoClass[this.node.ico] = true
                // 添加该class可以推拽连线出来，viewOnly 可以控制节点是否运行编辑
                nodeIcoClass['flow-node-drag'] = this.node.viewOnly ? false : true
                return nodeIcoClass
            }
        },
        methods: {
            // 点击节点
            clickNode() {
                this.$emit('clickNode', this.node.id)
            },
            // 鼠标移动后抬起
            changeNodeSite() {
                // 避免抖动
                if (this.node.left == this.$refs.node.style.left && this.node.top == this.$refs.node.style.top) {
                    return;
                }
                this.$emit('changeNodeSite', {
                    nodeId: this.node.id,
                    left: this.$refs.node.style.left,
                    top: this.$refs.node.style.top,
                })
            }
        }
    }
</script>
