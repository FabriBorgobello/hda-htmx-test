import type { FC } from 'hono/jsx';
import { FilterItem } from './FilterItem';
import { Filter } from '@/types';

export const FilterList: FC<{ filters: Filter[] }> = ({ filters }) => {
    return (
        <div class="flex flex-col gap-4 md:flex-row">
            {filters.map((filter) => (
                <div class="flex w-full flex-col space-y-2">
                    <h3 class="text-lg font-semibold">{filter.label}</h3>
                    <div class="grid gap-2">
                        {filter.options.map((option) => (
                            <FilterItem value={option} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
