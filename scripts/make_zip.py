import os
import zipfile
import shutil

dist_dir = os.path.abspath('dist')
public_dir = os.path.abspath('public')
root_dir = os.path.abspath('.')

# 1. Read master .htaccess from public and ensure it is in dist
public_htaccess = os.path.join(public_dir, '.htaccess')
dist_htaccess = os.path.join(dist_dir, '.htaccess')

if os.path.exists(public_htaccess):
    shutil.copyfile(public_htaccess, dist_htaccess)
    print("✓ Copied optimized .htaccess to dist/")

# Also ensure latest site-content.json from public/ is in dist/
public_content = os.path.join(public_dir, 'site-content.json')
dist_content = os.path.join(dist_dir, 'site-content.json')
if os.path.exists(public_content):
    shutil.copyfile(public_content, dist_content)
    print("✓ Copied latest site-content.json to dist/")

# 2. Clean up any existing zip files in dist/ before compressing
for item in os.listdir(dist_dir):
    if item.endswith('.zip'):
        try:
            os.remove(os.path.join(dist_dir, item))
            print(f"Removed stale zip: {item}")
        except Exception:
            pass

# 3. Define output zip path
zip_filename = 'akla-foodstuff-hostinger-deploy.zip'
root_zip_path = os.path.join(root_dir, zip_filename)
public_zip_path = os.path.join(public_dir, zip_filename)

print("Packaging dist/ directory for Hostinger deployment...")

packed_count = 0
with zipfile.ZipFile(root_zip_path, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as zipf:
    for root, dirs, files in os.walk(dist_dir):
        for file in files:
            # Skip zip archives
            if file.endswith('.zip'):
                continue
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, dist_dir)
            zipf.write(file_path, arcname)
            packed_count += 1

# Copy zip to public/ so users can download directly from the live web UI
shutil.copyfile(root_zip_path, public_zip_path)

file_size_kb = os.path.getsize(root_zip_path) / 1024
print(f"\n=======================================================")
print(f" HOSTINGER DEPLOYMENT PACKAGE CREATED SUCCESSFULLY")
print(f" Files included: {packed_count}")
print(f" Package size:   {file_size_kb:.1f} KB")
print(f" Output paths:   {root_zip_path}")
print(f"                 {public_zip_path}")
print(f"=======================================================\n")
