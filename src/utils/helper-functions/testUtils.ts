export const FindByTestAttr = (wrapper:any, val:any) => {
    return wrapper.find(`[data-test="${val}"]`);
}
