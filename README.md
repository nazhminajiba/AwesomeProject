# *🌍 SLEMAN GUARD*

Sleman Guard adalah aplikasi peta interaktif berbasis web yang dirancang untuk membantu pengelolaan dan pemantauan titik Early Warning System (EWS) di kawasan rawan bencana. Aplikasi ini memungkinkan pengguna untuk menambahkan, melihat, dan mengelola data titik EWS beserta deskripsinya secara real-time dengan antarmuka yang menarik dan mudah digunakan.

# *✨ Fitur Utama:*

🗺️ Pemetaan zona risiko bencana berdasarkan radius dari pusat erupsi Gunung Merapi.

➕ Penambahan titik data EWS melalui antarmuka pengguna yang interaktif.

📊 Pengelolaan data EWS menggunakan API untuk penyimpanan dan pemanggilan data.

 # *🛠️ Komponen Pembangun Produk*

### **1. Antarmuka Pengguna (Frontend)**

HTML: Struktur dokumen dan elemen UI seperti form dan tombol.

CSS: Gaya dan tata letak, termasuk animasi dan efek visual.

JavaScript: Logika interaktif untuk peta, formulir, dan integrasi API.

### **2. Library dan Framework**

Leaflet.js: Library JavaScript untuk peta interaktif.

Fetch API: Untuk komunikasi antara frontend dan backend.

### **3. Backend**

Endpoint API: Berbasis REST untuk mengelola data EWS.

POST /mahasiswa: Menambahkan data EWS baru.

GET /mahasiswa: Mengambil data EWS yang ada.

### **4. Sumber Data**

Data Awal Zona Bahaya: Didefinisikan secara manual berdasarkan radius zona bahaya dari Gunung Merapi.

Data Titik EWS: Website mitigasi BPBD Sleman

# *🖼️ Tangkapan Layar Komponen Penting Produk* #

### **1. Home**

🏠 Halaman utama untuk menyambut pengguna dan memberikan informasi umum mengenai sistem EWS (Early Warning System).

![Halaman Home](Image/home1.jpeg)
![Halaman Home](Image/home2.jpeg)
![Halaman Home](Image/home3.jpeg)

### **2. List Data**

📋 Menampilkan daftar data EWS yang telah tersimpan, termasuk lokasi, status, dan tindakan yang dapat diambil, seperti menghapus data.

![List Data EWS](Image/list.jpeg)

### **3. Edit Data**

✏️ Menyediakan formulir untuk mengedit data EWS yang sudah ada, termasuk perubahan lokasi, status, dan parameter lainnya.

![Formulir Edit Data EWS](Image/edit.jpeg)

### **4. Map**

🗺️ Menampilkan peta interaktif dengan zona bahaya yang memiliki radius berbeda, serta marker yang menunjukkan informasi terkait EWS.

![Antarmuka Peta](Image/map2.jpeg)
![Antarmuka Peta](Image/map1.jpeg)
![Antarmuka Peta](Image/map3.jpeg)

### **5. Update**

🔄 Formulir menampilkan aktifitas merapi secara live.

![Formulir Update Data EWS](Image/update.jpeg)

### **6. Profile**

👤 Halaman untuk melihat informasi profil, termasuk nama, email, dan pengaturan lainnya.

![Halaman Profil](Image/profile.jpeg)
