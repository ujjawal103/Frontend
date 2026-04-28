import React, { useEffect, useState, useRef } from "react";
import { Loader2, X, Printer } from "lucide-react";
import axios from "axios";
import ShareInvoiceButton from "./ShareInvoiceButton";
import { motion, AnimatePresence } from "framer-motion";
import CollectWhatsappInline from "./CollectWhatsappInline";


const OrderBillModal = ({ orderId, setOrders, onClose }) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showWhatsappInput, setShowWhatsappInput] = useState(false);
  const printRef = useRef(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}orders/${orderId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setOrder(res.data.order);
      } catch (err) {
        console.error("Failed to fetch order:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId]);


  const markShared=(orderId) =>{
    setOrder(prev => ({ ...prev, isShared: true }));
    setOrders(prev =>
      prev.map(o =>
        o._id === orderId ? { ...o, isShared: true } : o
      )
    );
  }

const handlePrint = () => {
  const printContents = printRef.current.innerHTML;
  const win = window.open("", "", "width=300,height=600");

  win.document.write(`
  <html>
    <head>
      <style>
        @page {
          size: 58mm auto;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Courier New', monospace;
          margin: 0;
          padding: 6px;
          width: 58mm;
        }

        .bill-container {
          width: 100%;
          text-align: left;
          font-size: 14px;
        }

        img {
          display: block;
          margin: 0 auto 6px auto;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        h2 {
          text-align: center;
          font-size: 16px;
          margin: 4px 0;
        }

        p {
          margin: 2px 0;
          line-height: 1.4;
          font-size: 13px;
        }

        .line {
          border-bottom: 1px dashed #000;
          margin: 6px 0;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        td {
          padding: 2px 0;
          vertical-align: top;
        }

        .right {
          text-align: right;
        }

        strong {
          font-weight: bold;
        }
      </style>
    </head>

    <body>
      <div class="bill-container">
        ${printContents}
      </div>
    </body>
  </html>
  `);

  win.document.close();

  win.onload = () => {
    win.focus();
    win.print();
  };
};

const handleKOTPrint = () => {
  const win = window.open("", "", "width=300,height=600");

  let itemsHTML = "";

  order.items.forEach(item => {
    itemsHTML += `
      <tr>
        <td colspan="2"><strong>${item.itemName}</strong></td>
      </tr>
    `;

    item.variants.forEach(v => {
      itemsHTML += `
        <tr>
          <td>${v.type} × ${v.quantity}</td>
          <td></td>
        </tr>
      `;
    });
  });

  win.document.write(`
  <html>
    <head>
      <style>
        @page {
          size: 58mm auto;
          margin: 0;
        }
        body {
          font-family: 'Courier New', monospace;
          margin: 0;
          padding: 6px;
          width: 58mm;
          font-size: 14px;
        }

        .bill-container {
          width: 100%;
          text-align: left;
        }

        h3 {
          text-align: center;
          margin: 4px 0;
          font-size: 15px;
        }

        p {
          margin: 2px 0;
          line-height: 1.4;
          font-size: 13px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        td {
          padding: 2px 0;
        }

        .line {
          border-bottom: 1px dashed #000;
          margin: 6px 0;
        }
      </style>
    </head>

    <body>
      <div class="bill-container">

        <h3>KITCHEN ORDER TICKET</h3>

        <div class="line"></div>

        <p>
          Order: ${order._id}<br/>
          ${
            (order.tableId || order.orderType === "dine-in")
              ? `<strong>Table:</strong> ${order.tableId?.tableNumber || "N/A"}`
              : `<strong>Order Type:</strong> ${order.orderType === "delivery" ? "QR Delivery" : "Takeaway"}`
          }
          <br/>
          Date: ${new Date(order.createdAt).toLocaleString()}
        </p>

        <div class="line"></div>

        <table>
          ${itemsHTML}
        </table>

        <div class="line"></div>

        <p style="text-align:center;">Send to Kitchen</p>

      </div>
    </body>
  </html>
  `);

  win.document.close();

  win.onload = () => {
    win.focus();
    win.print();
  };
};


  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-200">
        <div className="bg-white p-6 rounded-lg flex items-center gap-2">
          <Loader2 className="animate-spin w-5 h-5 text-green-600" />
          <p>Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) return null;

  return (
  <div className="w-full md:pl-65 mb-20 md:mb-0 fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ">
    <div className="bg-white rounded-lg shadow-lg w-[320px] max-h-[84vh] md:max-h-[90vh] overflow-y-auto p-4 relative overflow-y-auto overflow-x-hidden thin-scrollbar">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        <X size={20} />
      </button>

      {/* Printable Section */}
      <div ref={printRef} className="bill-container">
        {/* Store Info */}
        <div className="w-full flex items-center justify-center">
          <img
            src={order.storeId.storeDetails.photo || "/store.png"}
            alt="Store Logo"
            className="rounded-full w-40 h-40  text-center object-cover"
          />
        </div>

        <div className="text-center">
          <h2 className="font-semibold text-lg break-words">
            {order.storeId.storeName}
          </h2>
          <p className="text-xs break-words">{order.storeId.storeDetails.address}</p>
          <p className="text-xs break-words">
            📞 {order.storeId.storeDetails.phoneNumber}
          </p>
        </div>

        <div className="line my-2 border-b border-dashed border-gray-300"></div>
        <p className="text-xs break-words">
          <strong>Order ID:</strong> {order._id} <br />
          {
            (order.tableId || order.orderType === "dine-in") ? (
              <>
                <strong>Table:</strong> {order.tableId?.tableNumber || "N/A"}
              </>
            ) : (
              <>
                <strong>Order Type:</strong> {order.orderType === "delivery" ? "QR Delivery" : "Takeaway"}
              </>
            )
          }
          
          <br />
          <strong>Customer:</strong> {order.username || "Guest"} <br />
          <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}
        </p>
        <strong className="text-xs">Payment Method:</strong> <span className="text-xs">{order.paymentMethod || "N/A"}</span>
        <div className="line my-2 border-b border-dashed border-gray-300"></div>

        {/* Items List */}
        <table className="w-full text-xs table-fixed break-words">
          <tbody>
            {order.items.map((item) => (
              <React.Fragment key={item._id}>
                <tr>
                  <td colSpan="2" className="font-semibold break-words">
                    {item.itemName}
                  </td>
                </tr>
                {item.variants.map((v) => (
                  <tr key={v._id}>
                    <td className="break-words">
                      {v.type} × {v.quantity}
                    </td>
                    <td className="text-right break-words right">
                      ₹{v.total.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <div className="line my-2 border-b border-dashed border-gray-300"></div>

        <table className="w-full text-xs table-fixed break-words">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td className="text-right right">₹{order.subTotal.toFixed(2)}</td>
            </tr>
            {order.gstApplicable && (
              <tr>
                <td>GST ({(order.gstRate * 100).toFixed(0)}%)</td>
                <td className="text-right right">₹{order.gstAmount.toFixed(2)}</td>
              </tr>
            )}
            {order.restaurantChargeApplicable && (
              <tr>
                <td>Restaurant Charge</td>
                <td className="text-right right">
                  ₹{order.restaurantChargeAmount.toFixed(2)}
                </td>
              </tr>
            )}
            {order.orderType === "delivery" && (
              <tr>
                <td>Delivery Charge</td>
                <td className="text-right right">
                  ₹{order.deliveryDetails?.deliveryCharge?.toFixed(2) || "0.00"}
                </td>
              </tr>
            )}
            <tr>
              <td className="font-semibold"><strong>Total</strong></td>
              <td className="text-right font-semibold right">
                <strong>₹{order.totalAmount.toFixed(2)}</strong>
              </td>
            </tr>
          </tbody>
        </table>

        {order.orderType === "delivery" && order.deliveryDetails?.address && (
          <>
            <div className="line my-2 border-b border-dashed border-gray-300"></div>

            <p className="text-xs text-center break-words">
              <strong>Delivery Address</strong><br />
              {order.deliveryDetails.address}
            </p>
          </>
        )}

        <div className="line my-2 border-b border-dashed border-gray-300"></div>
        <p className="text-[10px] text-center text-gray-500 break-words">
          ⚠ No cash refunds. Please check your order before payment.
          <br /> Thank you for visiting us! 😊
        </p>
      </div>

    <AnimatePresence>
      {showWhatsappInput && (
        <motion.div
          initial={{ height: 0, opacity: 0, y: -5 }}
          animate={{ height: "auto", opacity: 1, y: 0 }}
          exit={{ height: 0, opacity: 0, y: -5 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <CollectWhatsappInline
            orderId={order._id}
            onSaved={(number) => {
              setOrder(prev => ({ ...prev, whatsapp: number }));
              setOrders(prev =>
                              prev.map(o =>
                                o._id === order._id ? { ...o, whatsapp: number } : o
                              )
                            );
              setShowWhatsappInput(false);
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>


      {/* Buttons */}
      <div className="mt-4 flex justify-center gap-2">

        <button
          onClick={handleKOTPrint}
          className="flex items-center gap-1 px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
        >
          <Printer size={14} />
          Print KOT
        </button>

        <button
          onClick={handlePrint}
          className="flex items-center gap-1 px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
        >
          <Printer size={14} />
          Print Bill
        </button>

        <ShareInvoiceButton
          orderId={order._id}
          text={order.isShared ? "Re-share" : "Share"}
          currOrder={order}
          onWhatsappMissing={() => setShowWhatsappInput(true)}
          markShared={markShared}
        />

      </div>
    </div>
  </div>
);

};

export default OrderBillModal;
