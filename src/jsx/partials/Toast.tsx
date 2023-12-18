import { FC } from 'hono/jsx';

interface ToastProps {
    title: string;
    message: string;
    type: 'success' | 'error';
}

export const Toast: FC<ToastProps> = ({ title, message, type }) => {
    return (
        <div
            hx-ext="remove-me"
            class="fixed bottom-4 right-1/2 z-10 w-full max-w-full translate-x-1/2 transform sm:right-4 sm:w-auto sm:translate-x-0 sm:transform-none"
            id="toast"
            hx-swap-oob="true" // Out of band. See https://htmx.org/attributes/hx-swap-oob/
        >
            <div
                remove-me="3s"
                class="flex items-start gap-x-4 rounded-md bg-white p-4 shadow-lg sm:min-w-[300px]"
            >
                {type === 'success' ? (
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.5 23.5L1 15.5L3 13L9.5 19.5L25 4L27 6L9.5 23.5Z"
                            fill="#43A047"
                        />
                    </svg>
                ) : (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M26.9264 6.89185L6.92642 26.8918L4.57144 24.6754L24.6407 4.60613L26.9264 6.89185Z"
                            fill="#9E0000"
                        />
                        <path
                            d="M24.6061 26.9265L4.60607 6.92651L6.82252 4.57153L26.8918 24.6408L24.6061 26.9265Z"
                            fill="#9E0000"
                        />
                    </svg>
                )}

                <div class="flex w-full flex-col gap-y-1">
                    <span class="font-bold">{title}</span>
                    <span class="text-sm text-gray-500">{message}</span>
                </div>
                <button onclick="this.parentElement.remove()">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.4632 3.44584L3.46319 13.4458L2.28571 12.3376L12.3203 2.30298L13.4632 3.44584Z"
                            fill="#4B4B4B"
                        />
                        <path
                            d="M12.303 13.4631L2.30303 3.46313L3.41126 2.28564L13.4459 12.3203L12.303 13.4631Z"
                            fill="#4B4B4B"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
