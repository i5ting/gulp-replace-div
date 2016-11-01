<style>
	.zh {
		display:block;
		border: 1px solid lightblue;
		padding:25px;
		margin-top:30px;
	}
	
	.en {
		display:block;
		border: 1px solid lightgreen;
		padding:5px;
		margin-top:30px;
	}
</style>

<div class="en">
We know what the requirement is. We want to have a file with “bar” in it and prefix “bar” with “foo”, giving us “foobar” as the result, but how do we go about doing it? Well, we can import our own plugin directly.
</div>

<div class="zh">
我们要了解需求是什么。我们想要一个文件有“bar” 在里边，并且“bar”前缀是“foo”，给我们的结果应该是“foobar”，那么我们要怎么去做呢？我们可以直接导入自己的插件。
</div>

```
var prefixer = require('../');
```

<div class="en">
Now, we can call our own plugin by calling prefixer(). The following code goes inside the it-block.
</div>

<div class="zh">
现在，我们可以通过prefixer()来调用我们自己的插件。下面在it代码块里的代码。
</div>

```
var stream = prefixer('foo'); 
stream.on('data', function(prefixedFile) {
    expect(String(prefixedFile.contents)).to.eq('foobar');
});
```