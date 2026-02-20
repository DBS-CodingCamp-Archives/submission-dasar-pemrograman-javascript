# 🚀 Final Assessment — Dasar Pemrograman JavaScript

Dokumentasi ini adalah **submission Final Assessment** untuk kelas **Dasar Pemrograman JavaScript** pada program **Beasiswa Coding Camp 2026 Powered By DBS Foundation**.

---

## 📁 Struktur Folder

```text
final-assessment/
├── 01-writing-comments/
├── 02-code-style/
├── 03-writing-test/
├── optional-04-oop/
├── optional-05-recursive/
├── optional-06-full-coverage-testing/
└── optional-07-real-world-scenario/
```

## 🧩 Ringkasan Modul

|  No | Modul                                | Fokus Materi                      | Status |
| --: | ------------------------------------ | --------------------------------- | :----: |
|  01 | `writing-comments`                   | Komentar satu baris & multi baris |   ✅   |
|  02 | `code-style`                         | Konsistensi gaya penulisan kode   |   ✅   |
|  03 | `writing-test`                       | Unit test fungsi `sum(a, b)`      |   ✅   |
|  04 | `oop` _(opsional)_                   | Class `Item` & `Inventory`        |   ✅   |
|  05 | `recursive` _(opsional)_             | Faktorial & Fibonacci rekursif    |   ✅   |
|  06 | `full-coverage-testing` _(opsional)_ | Pengujian skenario lengkap        |   ✅   |
|  07 | `real-world-scenario` _(opsional)_   | Sistem pesanan restoran           |   ✅   |

## 🛠️ Prasyarat

- Node.js (LTS terbaru disarankan)
- Bun (opsional, diperlukan untuk test yang menggunakan `bun:test`)

## ▶️ Cara Menjalankan

Jalankan per modul dari direktori `final-assessment`.

### Menjalankan file demo

```bash
node optional-04-oop/main.js
node optional-05-recursive/main.js
node optional-07-real-world-scenario/main.js
```

### Menjalankan unit test (Bun)

```bash
bun test 03-writing-test/index.test.js
bun test optional-06-full-coverage-testing/index.test.js
```

## 📌 Highlight Implementasi

- **OOP Inventory**: tambah item, hapus item, update item, dan tampilkan daftar item.
- **Recursive**: `factorial(n)` dan `fibonacci(n)` diimplementasikan dengan rekursi.
- **Testing**: skenario normal dan edge case (`non-number`, `null`, `undefined`, nilai negatif).
- **Real-world case**: tambah order, update status, hitung revenue order `Selesai`, dan hapus order.

## 📝 Catatan

- Pada modul testing, berkas `index.js` dan `package.json` mengikuti batasan instruksi asesmen.
- Setiap folder dirancang bisa dijalankan secara mandiri.

## 📚 Referensi

- Fibonacci: https://id.wikipedia.org/wiki/Bilangan_Fibonacci
- Faktorial: https://id.wikipedia.org/wiki/Faktorial
