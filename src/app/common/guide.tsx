import React from 'react'
import { FaEye } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { TbCircleLetterS } from "react-icons/tb";

const UsageGuide: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Hướng dẫn sử dụng
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Tài liệu hướng dẫn sử dụng cho User và Admin trong hệ thống quản lý sản phẩm.
        </p>
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Mã Hàng</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
          <img src="../../../public/images/guide/Bảng%20Mã%20Hàng%20Page.png" alt="Tạo Mã Hàng" className="w-full h-auto rounded-lg" />
          <br />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cách Truy Vấn: </h3>
          <li>Truy vấn vào Menu Sản Phẩm -{'>'} <b>Mã Hàng</b> .</li>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Thông Tin Cơ Bản: </h3>
          <li><b>Tạo Mã Hàng:</b> Dẫn đến trang tạo mã hàng và nhập thông tin cần thiết.</li>
          <li><b>Nhập File:</b> Cho phép nhập dữ liệu mã hàng từ file Excel <b>(Chưa hoàn thiện)</b>.</li>
          <li><b>Xuất File:</b> Cho phép xuất dữ liệu mã hàng ra file Excel.</li>
          <li><b>Nâng Cao:</b> Bộ lọc giúp hiển thị dữ liệu theo 2 tiêu chí: Nhà Cung Cấp và Kích Thước </li>
          <li className="flex items-center gap-1">
            <CgWebsite className="w-6 h-6 hover:opacity-50" />
            <span>: Hiển thị thông tin liên quan đến mã hàng để upload website.</span>
          </li>
          <li className="flex items-center gap-1">
            <TbCircleLetterS className="w-6 h-6 hover:opacity-50" />
            <span>: Hiển thị thông tin liên quan đến mã hàng để upload Sapo <b>(Chưa hoàn thiện).</b></span>
          </li>
          <li className="flex items-center gap-1">
            <FaEye className="w-6 h-6 hover:opacity-50" />
            <span>: Xem chi tiết thông tin mã hàng.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <li className="flex items-center gap-2">
          <CgWebsite className="w-6 h-6 hover:opacity-50" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Thông tin chi tiết mã hàng</h2>
        </li>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
          <img src="../../../public/images/guide/Thông%20Tin%20Website%20Form.png" alt="Tạo Mã Hàng" className="w-full h-auto rounded-lg" />
          <br />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Đối Với Google Keeps: </h3>
          <li>Copy nội dung trong phần <b>Thông tin kỹ thuật</b>. copy tới dải phân cách <b>"----"</b></li>
          <li>Tạo mới một trang <a href="https://keep.google.com/u/0/#label/TCT%20GROUP" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">Google Keep</a> và dán nội dung đã copy.</li>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Đối Với Đăng Website TCT Homemart: </h3>
          <li>Copy mã sản phẩm</li>
          <li>Copy các thông số liên quan trong và sau phần <b>Thông tin kỹ thuật</b></li>
          <li>Chọn <b>Sản Phẩm</b> -{'>'} <b>Thêm mới</b></li>
          <li>Dán mã ngắn vào phần nội dung và lưu lại.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Hướng dẫn Hệ Vân</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
          <img src="../../../public/images/guide/Hệ%20Vân%20Page.png" alt="Page Hệ Vân" className="w-full h-auto rounded-lg" />
          <br />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cách Truy Vấn: </h3>
          <li>Truy vấn vào Menu Danh Mục Sản Phẩm -{'>'} <b>Hệ Vân</b> .</li>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tạo Hệ Vân: </h3>
          <img src="../../../public/images/guide/Hệ%20Vân%20Form.png" alt="Form Hệ Vân" className="w-full h-auto rounded-lg" />
          <br />
          <li>Chọn <b>Tạo Hệ Vân</b> để tạo hệ vân mới.</li>
          <li>Nhập thông tin cần thiết và nhấn <b>Lưu</b>.</li>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Thông Tin Cơ Bản: </h3>
          <li><b>Tên Hệ Vân:</b> Tên của hệ vân cần tạo.</li>
          <li><b>Mã Hệ Vân:</b> Mã của hệ vân cần tạo.</li>
          <li><b>Ký Hiệu:</b> Ký hiệu của hệ vân cần tạo. (trường hợp đặc biệt)</li>
          <li><b>Ghi Chú:</b> Thông tin ghi chú thêm cho hệ vân.</li>
        </ul>
      </section>
    </div>
  )
}

export default UsageGuide