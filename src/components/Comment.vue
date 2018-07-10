<template>
	<div>
		<div>头部</div>
	<keep-alive>
      <router-view name="User"></router-view>
    </keep-alive>
	<div>尾部</div>
	</div>
</template>

<script>
	export default{
		name:''
	}
</script>
<style type="text/css">
	
</style>