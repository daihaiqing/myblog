<template>
    <div>
            他诞生于2018/11/16 0:29；这是一个值得庆祝的日子!
			<div id="selectTemplate">
				<ul>
					<li v-for="(item, index) in templates" :key="index" @click="changeTemplate(index)">
						<img :src="item.thumbnail"/>
						<span>{{item.name}}</span>
					</li>
				</ul>
			</div>
            <div id="bee-plugin-container"></div>
    </div>
</template>

<script>
var no_thumbnail = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
export default {
	name: 'indexP',
	data () {
			return {
				templates:[
					{"name": "Basic E-commerce", "json": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-basic-e-commerce.json", "thumbnail": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-basic-e-commerce.png"},
					{"name": "Basic Newsletter", "json": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-basic-newsletter.json", "thumbnail": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-basic-newsletter.png"},
					{"name": "Basic One-Column", "json": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-basic-onecolumn.json", "thumbnail": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-basic-onecolumn.png"},
					{"name": "Basic Standard", "json": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-basic-standard.json", "thumbnail": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-basic-standard.png"},
					{"name": "Blank Template", "json": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-blank-template.json", "thumbnail": no_thumbnail},
					{"name": "Ecommerce Template", "json": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-ecommerce-template.json", "thumbnail": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-ecommerce-template.png"},
					{"name": "Newsletter", "json": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-newsletter-template.json", "thumbnail": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-newsletter-template.png"},
					{"name": "Promo Template", "json": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-promo-template.json", "thumbnail": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-promo-template.png"},
					{"name": "Simple Template", "json": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-simple-template.json", "thumbnail": "https://raw.githubusercontent.com/BEE-Plugin/BEE-FREE-templates/master/v.2/BF-simple-template.png"},
				],
				bee:null
			}
	},
	methods:{
		changeTemplate(index){
			if(this.bee){
				$.get(this.templates[index].json)
				.done(res=>{
					console.error(typeof JSON.parse(res))
					console.error(JSON.parse(res))
					this.bee.start(JSON.parse(res));
				})
			}
		},
	},
	mounted(){
		let _this = this;
		var beeConfig = {
			uid: 'test1-clientside',
			container: 'bee-plugin-container',
			autosave: 15,
			language: 'en-US',
			trackChanges: true,
			onChange: function (jsonFile, response) {
				console.log('json', jsonFile);
				console.log('response', response);
			},
			onSave: function (jsonFile, htmlFile) {
				console.error('保存');
				save('newsletter.html', htmlFile);
			},
			onSaveAsTemplate: function (jsonFile) { // + thumbnail? 
				console.error('JSON')
				save('newsletter-template.json', jsonFile);
			},
			onAutoSave: function (jsonFile) { // + thumbnail? 
				console.log(new Date().toISOString() + ' autosaving...');
				window.localStorage.setItem('newsletter.autosave', jsonFile);
			},
			onSend: function (htmlFile) {
				console.error('onsend',htmlFile)
				//write your send test function here
			},
			onError: function (errorMessage) {
				console.error('onError ', errorMessage);
			}
		};
		var endpoint = "https://auth.getbee.io/apiauth";

		var payload = {
			client_id: "435ea53c-5759-479f-a999-76def6d31ed6", // Enter your client id
			client_secret: "lrrENpvhjcl21ed8T5thLvkuqeEdiTyOwZr0SrkIahIang85eI2p", // Enter your secret key
			grant_type: "password" // Do not change
		};
 
		// Define a simple BEE Plugin configuration...
		// var config = {
		// 	uid: 'haiqing',
		// 	container: 'bee-plugin-container'
		// }

		// Call the "create" method:
		// Tip:  window.BeePlugin is created automatically by the library...

		$.post(endpoint, payload)
		.done(function(data) {
			console.error(data)
            BeePlugin.create(data, beeConfig, function (beePluginInstance) {
				console.error(beePluginInstance)
				_this.bee = beePluginInstance;
				_this.changeTemplate(0);
			// continue initialization here...
			});
		})
	}
}
</script>
<style lang="scss">
	#selectTemplate{
		li{
			display: inline-block;
			margin:10px;
			span{
				display: block;
			}
		}
	}
</style>