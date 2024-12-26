import { FileCache } from "Hive-agent-framework/cache/fileCache";
import { UnconstrainedCache } from "Hive-agent-framework/cache/unconstrainedCache";
import os from "node:os";

const memoryCache = new UnconstrainedCache<number>();
await memoryCache.set("a", 1);

const fileCache = await FileCache.fromProvider(memoryCache, {
  fullPath: `${os.tmpdir()}/Hive_file_cache.json`,
});
console.log(`Saving cache to "${fileCache.source}"`);
console.log(await fileCache.get("a")); // 1
