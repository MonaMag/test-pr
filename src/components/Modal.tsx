type ModalProps = {
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
};

export function Modal({ title, children, actions }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <div className="mb-4">{children}</div>
        {actions && <div className="flex justify-end gap-2">{actions}</div>}
      </div>
    </div>
  );
}
