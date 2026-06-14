export function formatHistory(
  item
) {
  return {
    ...item,
    label:
      item.action.toUpperCase(),
  };
}