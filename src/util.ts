import { Uri } from "vscode";

export function nameWithoutExtension(uri: Uri) {
    const fileName = uri.path.split('/').pop();
    return fileName?.split('.').shift();
}
