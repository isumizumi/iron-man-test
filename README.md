# iron-man-test

Link web app: https://practical-swirles-21e130.netlify.app/

Fitur dan halaman yang ada di aplikasi ini sudah responsive.

1. Welcome Screen

Di halaman Welcome Screen ini terdapat fitur untuk berpindah halaman menggunakan library react-router-dom. 

User disediakan 2 pilihan menu:  

- Halaman Iron Man Giphy: untuk menampilkan maksimal 9 Gif yang bertemakan Iron Man

- Halaman Search Your Giphy: untuk mencari Giphy yang diinginkan 


2. Iron Man Giphy

Di halaman ini menggunakan function component. Selain fitur untuk menampilkan 9 Gif yang bertemakan Iron Man, juga terdapat fitur/komponen tambahan untuk loader (animasi loading yang tampil saat menunggu fetching data selesai) dan informasi jika ada error (antisipasi jika url giphy atau apikey yang digunakan ada kesalahan).

3. Search Your Giphy

Di halaman ini menggunakan function component. Selain fitur untuk melakukan pencarian, dan di bawahnya akan menampilkan 9 Gif dari hasil pencarian, juga terdapat fitur/komponen tambahan untuk loader dan informasi jika ada error.