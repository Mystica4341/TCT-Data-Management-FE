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
          <img src="../../../public/images/guide/Bảng Mã Hàng Page.png" alt="Tạo Mã Hàng" className="w-full h-auto rounded-lg" />
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
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Thêm Sản Phẩm</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
          <li>Xem danh sách mã hàng và thông tin liên quan.</li>
          <li>Tạo / gửi phiếu đề xuất mẫu trình khi cần.</li>
          <li>Sử dụng các dữ liệu đã được Admin cấu hình sẵn.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Strategy</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
          <li>Truy cập <b>Bảng tính giá</b> để tính toán theo dữ liệu sản phẩm.</li>
          <li>Đối chiếu danh mục và thông số trước khi áp dụng giá.</li>
          <li>Cập nhật chiến lược giá theo từng nhóm hàng / thị trường.</li>
        </ul>
      </section>
    </div>
  )
}

export default UsageGuide