import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex items-center gap-1.5 flex-wrap">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-slate-300">/</span>}
            {i === items.length - 1 ? (
              <span className="text-slate-700 font-medium">{item.name}</span>
            ) : (
              <Link
                href={item.path}
                className="hover:text-pitch-500 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
