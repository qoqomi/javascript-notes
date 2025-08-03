// 이미지 지연 로딩 구현
class ImageLoader {
    async loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(Failed to load ${url}));
            img.src = url;
        });
    }

    async loadMultipleImages(urls) {
        const promises = urls.map(url => 
            this.loadImage(url).catch(err => ({error: err.message, url}))
        );

        const results = await Promise.allSettled(promises);

        return {
            successful: results.filter(r => r.status === 'fulfilled').length,
            failed: results.filter(r => r.status === 'rejected').length,
            images: results
        };
    }
}

// 사용 예시
const loader = new ImageLoader();
const results = await loader.loadMultipleImages([
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg'
]);
