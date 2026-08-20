import { useState } from "react";
import type { FormEvent } from "react";
import {
  BUSINESS_UNIT_OPTIONS,
  CATEGORY_OPTIONS,
  emptyClientFormValues,
  FARES_PERMISSION_OPTIONS,
  SALES_TYPE_OPTIONS,
  type ClientFormValues,
} from "../../../interface";
import { FormField } from "./OtherComponents";
import { SelectField } from "./OtherComponents";

type FormErrors = Partial<Record<keyof ClientFormValues, string>>;

interface ClientFormProps {
  mode: "create" | "edit";
  initialValues?: ClientFormValues;
  onSubmit: (values: ClientFormValues) => void | Promise<void>;
  onCancel: () => void;
}

const REQUIRED_FIELDS: (keyof ClientFormValues)[] = [
  "clientName",
  "internalAcc",
  "email",
  "type",
  "businessUnit",
  "category",
  "faresPermissionType",
];

export default function ClientForm({ mode, initialValues, onSubmit, onCancel }: ClientFormProps) {
  const [values, setValues] = useState<ClientFormValues>(initialValues ?? emptyClientFormValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof ClientFormValues>(key: K, value: ClientFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const nextErrors: FormErrors = {};
  
    for (const field of REQUIRED_FIELDS) {
      if (!String(values[field]).trim()) {
        nextErrors[field] = "This field is required.";
      }
    }
  
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
  
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await onSubmit(values);
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
        <FormField
          label="Client Name"
          placeholder="Enter official agency / client name"
          value={values.clientName}
          onChange={(e) => update("clientName", e.target.value)}
          error={errors.clientName}
        />
        <FormField
          label="Internal Account"
          placeholder="e.g., WKN12345"
          value={values.internalAcc}
          onChange={(e) => update("internalAcc", e.target.value)}
          error={errors.internalAcc}
        />

        <FormField
          label="Primary Email Address"
          type="email"
          placeholder="michelle@example.com"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
        <SelectField
          label="Type"
          placeholder="Select Sales Type (e.g. Indirect Sales)"
          options={SALES_TYPE_OPTIONS}
          value={values.type}
          onChange={(e) => update("type", e.target.value)}
          error={errors.type}
        />

        <SelectField
          label="Business Unit"
          placeholder="Select Unit (e.g. Commercial)"
          options={BUSINESS_UNIT_OPTIONS}
          value={values.businessUnit}
          onChange={(e) => update("businessUnit", e.target.value)}
          error={errors.businessUnit}
        />
        <SelectField
          label="Category"
          placeholder="Select Category (e.g. Corporate)"
          options={CATEGORY_OPTIONS}
          value={values.category}
          onChange={(e) => update("category", e.target.value)}
          error={errors.category}
        />

        <div className="sm:col-span-1">
          <SelectField
            label="Fares Permission Type"
            placeholder="Regular / Promotional Fares"
            options={FARES_PERMISSION_OPTIONS}
            value={values.faresPermissionType}
            onChange={(e) => update("faresPermissionType", e.target.value)}
            error={errors.faresPermissionType}
          />
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-blue-800 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting
            ? mode === "create"
              ? "Creating..."
              : "Saving..."
            : mode === "create"
            ? "Create Client"
            : "Save Changes"}
        </button>
      </div>
    </form>
  );
}