import HistoryRow from "./HistoryRow";
import EmptyState from "@/components/common/EmptyState";

export default function HistoryTable({
  history = [],
}) {
  if (
    !history ||
    history.length === 0
  ) {
    return (
      <EmptyState
        title="No History"
        description="Your AI interactions will appear here."
      />
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-slate-800">
            <tr>
              <th className="text-left p-4">
                Document
              </th>

              <th className="text-left p-4">
                Action
              </th>

              <th className="text-left p-4">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {history.map(
              (item) => (
                <HistoryRow
                  key={
                    item._id
                  }
                  item={item}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}