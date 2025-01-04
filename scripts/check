#!/bin/bash
# スライドの OGP 画像の URL が正しいかチェックするスクリプト

# 環境変数
BASE_URL="https://ykicchan.github.io/slides"
SRC_DIR="src"
SLIDE_FILENAME="index.md"
OGP_FILENAME="index.png"
OGP_SET_PREFIX="image:"

# カラーコード
RED="\x1b[31m"
GREEN="\x1b[32m"
YELLOW="\x1b[33m"
RESET="\x1b[0m"

# 指定されたファイルのパスを取得
slide_file_paths=$(find "$SRC_DIR" -type f -name "$SLIDE_FILENAME")
if [[ -z "$slide_file_paths" ]]; then
  echo -e "${YELLOW}No slide files found in $SRC_DIR.$RESET"
  exit 0
fi

# ファイル内で BASE_URL を含む(=OGP設定している)行を抽出
actual_image_urls=$(grep -rh "$BASE_URL" "$SRC_DIR" | sed "s/^$OGP_SET_PREFIX//")
# 期待される URL を生成
expected_image_urls=$(echo "$slide_file_paths" | sed "s|$SRC_DIR|$BASE_URL|;s|$SLIDE_FILENAME|$OGP_FILENAME|")

# 配列化
# shellcheck disable=SC2206
slide_file_paths_arr=($slide_file_paths)
# shellcheck disable=SC2206
actual_image_urls_arr=($actual_image_urls)
# shellcheck disable=SC2206
expected_image_urls_arr=($expected_image_urls)

# 一致しない URL を記録する配列
mismatched_messages=()

# スライドのファイルごとに期待される URL と実際の URL を比較
for ((i = 0; i < ${#slide_file_paths_arr[@]}; i++)); do
  path=${slide_file_paths_arr[$i]}
  expected=${expected_image_urls_arr[$i]}
  actual=${actual_image_urls_arr[$i]}
  if [[ "$expected" != "$actual" ]]; then
    # 一致しない URL を記録
    mismatched_messages+=("File: $path\n${GREEN}- Expected: $expected\n${RED}- Actual: $actual${RESET}")
  fi
done

# すべての URL が一致している場合は正常終了
if [[ ${#mismatched_messages[@]} -eq 0 ]]; then
  echo -e "${GREEN}All image URLs match the expected values.$RESET"
  exit 0
fi

# 一致しない URL がある場合はエラーを出力
echo -e "${RED}The following mismatched image URLs were found:$RESET\n"
for message in "${mismatched_messages[@]}"; do
  echo -e "$message\n"
done
exit 1
