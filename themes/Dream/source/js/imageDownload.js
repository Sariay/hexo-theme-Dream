$('#imgeZip-download-link').click(
	function() {
		var downloadStatusID = $('#imgeZip-download-status'),
			downloadLinkID = $('#imgeZip-download-link');

		var imgs = $('#main-albums img'),
			imgUrls = [];
		var currentPostID = $('#top .middle-title'),
			currentPostTitle = currentPostID.text().replace(/\s*/g, "");

		for(var i = 0; i < imgs.length; i++) {
			var src = imgs[i].getAttribute("src");
			imgUrls.push(src);
		}

		var zip = new JSZip();
		
		if (imgUrls.length) {
			downloadStatusID.text('开始下载');
			
			downloadLinkID.attr('disabled', "true");
			
			downloadImageZip(zip, imgUrls, 0);
		}else{
			//alert('There is no any images!');
			
			downloadStatusID.text('There is no any images!');
			
			return;
		}
		
		function currentTime() {
			var date = new Date(),
				nowMonth = date.getMonth() + 1,
				strDate = date.getDate(),
				seperator = "-";

			// 对月进行处理，1-9月在前面添加一个“0”
			if(nowMonth >= 1 && nowMonth <= 9) {
				nowMonth = "0" + nowMonth;
			}

			// 对日进行处理，1-9号在前面添加一个“0”
			if(strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}

			// 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
			var standardValue = date.getFullYear() + seperator + nowMonth + seperator + strDate;
			return standardValue;
		}

		function saveFilebyBlob1(content, fileName) {
			var div = document.getElementById('imgeZip-download-link')
			var aLink = document.createElement('a');
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent("click", false, false);
			aLink.download = fileName;
			aLink.innerText = '下载图片';
			aLink.href = URL.createObjectURL(content);
			aLink.dispatchEvent(evt);
			div.appendChild(aLink);
		}

		function downloadImageZip(zip, imgUrls, index) {
			index = index || 0;

			downloadStatusID.text('进度：' + index + '/' + imgUrls.length);

			if(index >= imgUrls.length) {
				zip.generateAsync({
					type: "blob"
				}).then(
					function(content) {
						// see FileSaver.js				
						var downloadTime = currentTime();
						saveAs(content, 'IMAGE_' + currentPostTitle + '_' + downloadTime + '.zip');
						//saveFilebyBlob(content, 'IMAGE_' + currentPostTitle + '_' + downloadTime + '.zip');

						downloadStatusID.text('下载完成');
						downloadLinkID.removeAttr('disabled').text('重新下载');
					});
			}

			var img = new Image();
			img.crossOrigin = 'anonymous';

			img.onload = function() {
				var canvas = document.createElement("canvas");
				canvas.width = img.width;
				canvas.height = img.height;
				var ctx = canvas.getContext("2d");
				ctx.drawImage(img, 0, 0);

				var dataURL = canvas.toDataURL("image/png");
				var imgBase64Data = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

				var imgFile = zip.folder("images");
				imgFile.file(imgUrls[index].split("\/").pop(), imgBase64Data, {
					base64: true
				});
				downloadImageZip(zip, imgUrls, index + 1)
			};

			img.src = imgUrls[index];
		}

	}
);