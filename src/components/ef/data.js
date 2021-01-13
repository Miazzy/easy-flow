let data = {
    name: '公司管控架构图',
    nodeList: [
        {
            id: 'nodeA',
            ename:'LEADING HOLDINGS GROUP LIMITED',
            name: '领地控股集团有限公司',
            descript:'',
            type: 'task',
            left: '0px',
            top: '300px',
            state: 'success',
            viewOnly: true
        },
        {
            id: 'nodeB',
            type: 'task',
            ename: 'LEADING GROUP INVESTMENT LIMITED',
            name:'',
            left: '400px',
            top: '100px',
            state: 'success',
            viewOnly: true
        },
        {
            id: 'nodeC',
            ename: 'DU NENG INVESTMENT LIMITED',
            name:'',
            type: 'task',
            left: '400px',
            top: '300px',
            state: 'success',
            viewOnly: true
        }, {
            id: 'nodeD',
            ename: 'LEADING HONG KONG HOLDINGS LIMITED',
            name:'领地香港有限公司',
            type: 'task',
            left: '800px',
            top: '100px',
            state: 'success',
            viewOnly: true
        }, {
            id: 'nodeE',
            ename: '',
            name:'成都玺达企业管理有限公司',
            descript:'(注册资本5000万美元)',
            type: 'task',
            left: '1200px',
            top: '100px',
            state: 'success',
            viewOnly: true
        } , {
            id: 'nodeF',
            ename: '',
            name:'DU NENG CAPITAL LIMITED',
            descript:'',
            type: 'task',
            left: '800px',
            top: '300px',
            state: 'success',
            viewOnly: true
        }, {
            id: 'nodeG',
            ename: '',
            name:'成都恒禧企业管理咨询有限公司',
            descript:'(注册资本10101.1万)',
            type: 'task',
            left: '1600px',
            top: '300px',
            state: 'success',
            viewOnly: true
        }, {
            id: 'nodeH',
            ename: '',
            name:'领地集团有限公司',
            descript:'(注册资本339000万)',
            type: 'task',
            left: '2000px',
            top: '300px',
            state: 'success',
            viewOnly: true
        }
    ],
    lineList: [{
        from: 'nodeA',
        to: 'nodeB',
        label: '100%'
    }, {
        from: 'nodeA',
        to: 'nodeC',
        label:'100%',
    }, {
        from: 'nodeB',
        to: 'nodeD',
        label:'100%',
    },{
        from: 'nodeD',
        to: 'nodeE',
        label:'100%',
    },{
        from: 'nodeC',
        to: 'nodeF',
        label:'100%',
    },{
        from: 'nodeF',
        to: 'nodeG',
        label:'99%',
    },{
        from: 'nodeE',
        to: 'nodeG',
        label:'1%',
    },{
        from: 'nodeG',
        to: 'nodeH',
        label:'100%',
    }
    ]
}

export function getData () {
    return data
}
