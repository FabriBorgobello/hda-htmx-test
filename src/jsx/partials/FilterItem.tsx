import type { FC } from 'hono/jsx';

export const FilterItem: FC<{ type: string; value: string }> = ({
    type,
    value,
}) => {
    return (
        <div class="group w-full">
            <input
                type="radio"
                id={value}
                name={type}
                class="peer hidden"
                value={value}
            />
            <label
                for={value}
                class="peer-checked:border-accent inline-flex w-full cursor-pointer items-center justify-center rounded-md border px-4 py-2 text-sm 
                transition-all
                disabled:pointer-events-none disabled:opacity-50 peer-checked:bg-slate-950 peer-checked:text-white"
            >
                {value}
            </label>
        </div>
    );
};
