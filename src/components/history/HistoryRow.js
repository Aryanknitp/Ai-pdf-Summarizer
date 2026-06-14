export default function HistoryRow({
  item,
}) {
  return (
    <tr className="border-t border-slate-800 hover:bg-slate-800/40 transition-colors">
      <td className="p-4">
        {item?.documentName}
      </td>

      <td className="p-4">
        {item?.action}
      </td>

      <td className="p-4 text-slate-400">
        {item?.createdAt
          ? new Date(
              item.createdAt
            ).toLocaleString()
          : ""}
      </td>
    </tr>
  );
}