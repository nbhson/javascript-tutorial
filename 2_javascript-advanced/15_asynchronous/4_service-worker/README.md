# Worker service (Offline-experience | Push Notification | Background sync)

`Offline Web App` là một ứng dụng web có thể chạy ngay cả khi không có kết nối internet

Có 2 thứ cần thiết để web app có thể chạy được là: 
  + Resources (html, js, css, ảnh,...)
  + Router
Thì thằng mà chúng ta sẽ tìm hiểu sau đây là JavaScript Service Worker có thể đáp ứng được cả hai việc đó.

## JavaScript Service Worker là gì?

- `Service Worker` là một script mà trình duyệt chạy ở dưới background, tách khỏi trang web và giúp thực hiện các tính năng không cần đến trang web, hay tương tác người dùng. `Service Worker` có một số đặc điểm quan trọng là:

  + Không liên kết với một trang cụ thể
  + Không truy cập đến DOM
  + Có thể dừng khi không sử dụng và chạy khi cần thiết.
  + Chỉ hỗ trợ HTTPS

- Với Service Worker chúng ta có thể:

  + Làm cho trang web chạy nhanh hơn và có thể chạy offline
  + Thực hiện một số tính năng ở background như: push message và background synchronization.
  + Giam tải công việc của luồng chính

## Đăng ký JavaScript Service Worker

- Có một số lưu ý quan trọng khi đăng ký Service Worker là:

  + Vị trí của file service_worker.js quyết định đến URL của các trang mà nó điều khiển. Ở đây, tôi đặt file service_worker.js cùng thư mục với index.html. Có nghĩa là Service Worker sẽ quản lý URL của toàn bộ trang web. Ngược lại, nếu tôi đặt nó ở một thư mục khác, giả sử là: /apps/service_worker.js thì Service Worker sẽ chỉ quản lý các URL bắt đầu từ /apps/.
  + Hàm đăng ký .register trả về một Promise.
  + Trang đăng ký Service Worker phải là HTTPS.
  + Service Worker phải nằm trên cùng trang web đăng ký nó (same origin). Vì vậy, bạn không thể đặt file service_worker.js ở một nơi khác, rồi sử dụng importScripts() được.

- Sau khi đăng ký thành công, Service Worker sẽ được download về phía client và thực hiện những việc sau đây.

  + JavaScript Service Worker - Install
  + JavaScript Service Worker - activate
  + JavaScript Service Worker - fetch

> Đến đây có thể đã giải đáp được cho vấn đề đưa ra ở đầu bài viết: có 2 thứ cần thiết để web app có thể chạy được là: resources (html, js, css, ảnh,...) và định tuyến.
> Dùng listener install và activate để lưu resources vào bộ nhớ đệm cache.
>Dùng listener fetch để định tuyến.

Link: <https://completejavascript.com/javascript-service-worker-co-ban/>, <https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers>, <https://www.youtube.com/watch?v=Gcp7triXFjg>