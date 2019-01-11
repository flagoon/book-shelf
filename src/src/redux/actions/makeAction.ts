export default function makeAction(type: string, shouldOverwriteOnlyChanges = false) {
    return (payload: any) => ({
        type,
        payload,
        shouldOverwriteOnlyChanges
    });
}