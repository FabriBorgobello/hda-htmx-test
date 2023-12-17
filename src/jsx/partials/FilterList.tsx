import type { FC } from 'hono/jsx';
import { FilterItem } from './FilterItem';
import { Filter } from '@/types';

export const FilterList: FC<{ filters: Filter[] }> = ({ filters }) => {
    return (
        <div class="flex flex-col gap-4 rounded-lg bg-slate-50 p-4">
            <div class="flex flex-col gap-4  md:flex-row">
                {filters.map((filter) => (
                    <div class="flex w-full flex-col gap-2">
                        <h3 class="text-lg font-semibold">{filter.label}</h3>
                        <hr class="border-gray-300 opacity-50" />
                        <div class="grid gap-2">
                            {filter.options.map((option) => (
                                <FilterItem value={option} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button class="flex w-full justify-center gap-2 rounded-md bg-slate-50 px-3 py-2 text-sm text-black transition-all hover:bg-slate-900 hover:text-white active:scale-95 active:bg-slate-800 active:text-white disabled:cursor-not-allowed disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:hover:text-black disabled:active:scale-100 disabled:active:bg-gray-500 disabled:active:text-black">
                Apply Filters
            </button>
        </div>
    );
};
