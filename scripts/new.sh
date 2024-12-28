#!/bin/bash
# テンプレートから新しいスライドセットを生成するスクリプト
# OGP の URL もファイルに沿って書き換える

mkdir -p src/$1
cp -r template/* src/$1

sed -i '' "s|{{PATH}}|$1|" src/$1/index.md
