!(function(){
	// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('skillgraph'));

        // 指定图表的配置项和数据
        option = {
		    tooltip: {},
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [3, 5]
		           }
		        },
		        indicator: [
		           { name: 'Vue', max: 100},
		           { name: 'jQuery', max: 100},
		           { name: 'nodejs', max: 100},
		           { name: 'JavaScript', max: 100},
		           { name: 'CSS', max: 100},
		           { name: 'HTML5', max: 100}
		        ]
		    },
		    series: [{
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [73, 86, 60, 80, 80, 85],
		                name : '技能经验值'
		            }
		        ]
		    }]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
})()