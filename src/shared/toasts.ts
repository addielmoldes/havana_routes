import {toast} from "sonner";

export function errorToast(message: string) {
    toast.error('Error', {
        description: message,
        position: 'top-right',
        duration: 1000
    });
}