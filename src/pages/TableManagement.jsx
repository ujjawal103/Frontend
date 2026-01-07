import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Search } from "lucide-react";
import TableList from "../components/TableList";
import AddTableButton from "../components/AddTableButton";
import FooterNavStore from "../components/FooterNavStore";
import Loading from "../components/Loading";
import { Helmet } from 'react-helmet-async'

const TableManagement = () => {
  const [tables, setTables] = useState([]);
  const [filteredTables, setFilteredTables] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [searchTable, setSearchTable] = useState("");
  const token = localStorage.getItem("token");

  

const fetchTables = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}tables`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTables(res.data.tables || []);
      setFilteredTables(res.data.tables || []);
      setCount(res.data.count || 0);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load tables");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add new table
  const handleAddTable = async () => {
    setLoading(true);
    setMessage("Adding table...");
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}tables/add`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Table created!");
      fetchTables();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add table");
    } finally {
      setLoading(false);
      setMessage("");
    }
  };

  // ✅ Live search for tables
  useEffect(() => {
    if (!searchTable.trim()) {
      setFilteredTables(tables);
      return;
    }

    const filtered = tables.filter(
      (table) => table.tableNumber === parseInt(searchTable)
    );
    setFilteredTables(filtered);
  }, [searchTable, tables]);

  useEffect(() => {
    fetchTables();
  }, []);

  return (
    <>
      {loading && <Loading message={message} />}

      <Helmet>
        <title>Table Management – Tap Resto</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>


      <div className="w-full min-h-screen bg-gray-100 md:pl-64 md:pt-8 p-4 mb-20 md:mb-0">
        {/* ✅ Fixed Header */}
        <div className="fixed flex justify-between items-center bg-pink-600 w-full top-0 left-0 md:pl-64 p-4 z-10 shadow-md">
          <h1 className="text-xl md:text-2xl font-bold text-white text-center">
            Your Tables
          </h1>
          <AddTableButton onAdd={handleAddTable} />
        </div>

        {/* ✅ Space below fixed header */}
        <div className="mt-20"></div>

        {/* ✅ Analytics + Search Section */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-pink-600">
              Table Analytics
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Total Tables:{" "}
              <span className="font-bold text-pink-600 text-lg">{count}</span>
            </p>
          </div>

          {/* 🔍 Search Box with Icon */}
          <div className="relative w-full sm:w-48 md:w-56">
            <Search className="absolute left-3 top-2.5 text-pink-400 w-5 h-5" />
            <input
              type="number"
              placeholder="Search Table No."
              value={searchTable}
              onChange={(e) => setSearchTable(e.target.value)}
              className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        {/* ✅ Table List Section */}
        <TableList
          tables={filteredTables}
          loading={loading}
          onRefresh={fetchTables}
        />
      </div>

      <FooterNavStore />
    </>
  );
};

export default TableManagement;
