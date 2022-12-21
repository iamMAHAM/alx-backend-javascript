export default async function loadBalancer(chinaDownload, USDownload) {
  const faster = await Promise.race([chinaDownload, USDownload]);
  return faster;
}
