# *🌍 SLEMAN GUARD*

Sleman Guard adalah aplikasi peta interaktif berbasis web yang dirancang untuk membantu pengelolaan dan pemantauan titik Early Warning System (EWS) di kawasan rawan bencana. Aplikasi ini memungkinkan pengguna untuk menambahkan, melihat, dan mengelola data titik EWS beserta deskripsinya secara real-time dengan antarmuka yang menarik dan mudah digunakan.

# *✨ Fitur Utama:*

🗺️ Pemetaan zona risiko bencana berdasarkan radius dari pusat erupsi Gunung Merapi.

➕ Penambahan titik data EWS melalui antarmuka pengguna yang interaktif.

📊 Pengelolaan data EWS menggunakan API untuk penyimpanan dan pemanggilan data.

# *🛠️ Komponen Pembangun Produk*

### **1. Antarmuka Pengguna (Frontend)**

- HTML: Struktur dokumen dan elemen UI seperti form dan tombol.
- CSS: Gaya dan tata letak, termasuk animasi dan efek visual.
- JavaScript: Logika interaktif untuk peta, formulir, dan integrasi API.

### **2. Library dan Framework**

- Leaflet.js: Library JavaScript untuk peta interaktif.
- Fetch API: Untuk komunikasi antara frontend dan backend.

### **3. Backend**

- Endpoint API: Berbasis REST untuk mengelola data EWS.
  - **POST /mahasiswa**: Menambahkan data EWS baru.
  - **GET /mahasiswa**: Mengambil data EWS yang ada.

### **4. Sumber Data**

- Data Awal Zona Bahaya: Didefinisikan secara manual berdasarkan radius zona bahaya dari Gunung Merapi.
- Data Titik EWS: Website mitigasi BPBD Sleman.

# *🖼️ Tangkapan Layar Komponen Penting Produk* #

### **1. Home**

🏠 Halaman utama untuk menyambut pengguna dan memberikan informasi umum mengenai sistem EWS (Early Warning System).

<img src="Image/home1.jpeg" alt="Halaman Home" width="250px">
<img src="Image/home2.jpeg" alt="Halaman Home" width="250px">
<img src="Image/home3.jpeg" alt="Halaman Home" width="250px">

### **2. List Data**

📋 Menampilkan daftar data EWS yang telah tersimpan, termasuk lokasi, status, dan tindakan yang dapat diambil, seperti menghapus data.

<img src="Image/list.jpeg" alt="List Data EWS" width="250px">

### **3. Edit Data**

✏️ Menyediakan formulir untuk mengedit data EWS yang sudah ada, termasuk perubahan lokasi, status, dan parameter lainnya.

<img src="Image/edit.jpeg" alt="Formulir Edit Data EWS" width="250px">

### **4. Map**

🗺️ Menampilkan peta interaktif dengan zona bahaya yang memiliki radius berbeda, serta marker yang menunjukkan informasi terkait EWS.

<img src="Image/map2.jpeg" alt="Antarmuka Peta" width="250px">
<img src="Image/map1.jpeg" alt="Antarmuka Peta" width="250px">
<img src="Image/map3.jpeg" alt="Antarmuka Peta" width="250px">

### **5. Update**

🔄 Formulir menampilkan aktifitas Merapi secara live.

<img src="Image/update.jpeg" alt="Formulir Update Data EWS" width="250px">

### **6. Profile**

👤 Halaman untuk melihat informasi profil, termasuk nama, NIM, dan pengaturan lainnya.

<img src="Image/profile.jpeg" alt="Halaman Profil" width="250px">
