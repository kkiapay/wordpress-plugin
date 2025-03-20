const fs = require('fs-extra');
const path = require('path');
const { zip } = require("zip-a-folder")
const { promisify } = require('util');

const foldersAndFilesToCopy = [
    "admin",
    "build",
    "includes",
    "languages",
    "wp-assets",
    "kkiapay-woocommerce-plugin.php",
    'LICENSE',
    'README.md',
    'readme.txt'
]
const folderPath = path.join(__dirname, '../kkiapay-woocommerce')

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);




async function copyFilesAndDirectories(sourceDir, destDir) {
    try {
        // Créer le dossier de destination s'il n'existe pas déjà
        await mkdir(destDir, { recursive: true });
        const parentStats = await stat(sourceDir);
        const isDirectory = parentStats.isDirectory()
        if (isDirectory) {
            await mkdir(path.join(destDir, sourceDir.split("/").at(-1)));

            // Lire le contenu du dossier source
            const files = await readdir(sourceDir);

            // Parcourir les fichiers et dossiers dans le dossier source
            for (const file of files) {
                const sourcePath = path.join(sourceDir, file);
                const destPath = path.join(destDir, isDirectory ? sourceDir.split("/").at(-1) : "", file);

                // Obtenir les informations sur le fichier ou le dossier actuel
                const stats = await stat(sourcePath);

                if (stats.isDirectory()) {
                    // Si c'est un dossier, copier récursivement
                    await copyFilesAndDirectories(sourcePath, destPath);
                } else {
                    // Si c'est un fichier, copier dans le dossier de destination
                    await copyFile(sourcePath, destPath);
                }
            }
        }
        else {
            await copyFile(sourceDir, path.join(destDir, sourceDir.split("/").at(-1)));
        }

        // console.log(`Contenu de ${sourceDir} copié avec succès dans ${destDir}`);
    } catch (err) {
        // console.error(err);
        console.error(`Erreur lors de la copie : ${err.message}`);
    }
}
async function copyDirectory(source, destination) {
    if (fs.existsSync(source)) {
        // Créer le dossier cible s'il n'existe pas déjà
        await fs.ensureDir(destination);

        // Copier le contenu du dossier source vers le dossier cible
        await fs.copy(source, destination);
    } else {
        console.error('Le dossier source n\'existe pas.');
    }
}
function deleteFolderRecursive(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file, index) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) { // récursivement supprimer le sous-dossier
                deleteFolderRecursive(curPath);
            } else { // supprimer le fichier
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(folderPath); // supprimer le dossier lui-même
        // console.log(`Dossier "${folderPath}" supprimé avec succès.`);
    } else {
        console.error(`Le dossier "${folderPath}" n'existe pas.`);
    }
}

async function copyAssets() {
    const assetsPath = path.join(__dirname, "../assets")
    copyDirectory(assetsPath, path.join(folderPath, "assets"))
}
async function a() {
    for (let index = 0; index < foldersAndFilesToCopy.length; index++) {
        const source = foldersAndFilesToCopy[index];
        await copyFilesAndDirectories(path.join(__dirname, "../", source), folderPath);
        await copyAssets()
    }
}

a()
    .then(() => {
        const zipName = `kkiapay-woocommerce.zip`
        zip(folderPath, path.join(__dirname, '..', zipName)).then(() => {
            deleteFolderRecursive(folderPath)
            console.log("Your zip is here", path.join(__dirname, '..', zipName));
        })

    })


