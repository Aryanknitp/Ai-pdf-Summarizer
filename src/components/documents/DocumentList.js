import DocumentCard from "./DocumentCard";

export default function DocumentList({
  documents,
}) {
  if (
    !documents ||
    documents.length === 0
  ) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center text-slate-400">
        No documents found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {documents.map(
        (doc) => (
          <DocumentCard
            key={
              doc._id
            }
            document={
              doc
            }
          />
        )
      )}
    </div>
  );
}