<%*
const filename = tp.date.now("YYYY-MM-DD") + "-article";
await tp.file.rename(filename);
await app.vault.delete(tp.file.path());
%>
