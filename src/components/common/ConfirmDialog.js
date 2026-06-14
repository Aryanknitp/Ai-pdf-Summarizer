"use client";

import Modal from "./Modal";
import Button from "./Button";

export default function ConfirmDialog({
  open,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  onConfirm,
  onCancel,
}) {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onCancel}
    >
      <p className="text-slate-300">
        {message}
      </p>

      <div className="flex justify-end gap-3 mt-6">
        <Button
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          variant="danger"
          onClick={onConfirm}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
}