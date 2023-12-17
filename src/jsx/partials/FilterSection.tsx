import type { FC } from 'hono/jsx';
import { FilterList } from './FilterList';
import { getStatuses } from '@/controllers/statuses';
import { Category, Filter, Status } from '@/types';
import { getCategories } from '@/controllers/categories';

export const FilterSection: FC = async () => {
    // TODO: Add more filters
    const statuses = await getStatuses();
    const statusFilter: Filter<Status> = {
        label: 'Status',
        value: 'status',
        options: statuses,
    };

    const categories = await getCategories();
    const categoryFilter: Filter<Category> = {
        label: 'Category',
        value: 'category',
        options: categories,
    };

    return (
        <section class="space-y-4">
            <h2 class="text-xl font-semibold">Filters</h2>
            <FilterList filters={[statusFilter, categoryFilter]} />
        </section>
    );
};
