import re


def process_generative_text(text):
    match = re.search(r"\*\*(.*?)\*\*", text)
    if match:
        title = match.group(1)
    else:
        raise ValueError("No title found in the text")

    content = re.sub(r"\*\*.*?\*\*\n\n", "", text, 1)
    content = re.sub(r"\*\*(.*?)\*\*", "", content)

    sections = re.split(r"-----", content)
    sections = [section.replace("\n", "").strip() for section in sections]
    sections = [section for section in sections if len(section) > 0]

    return [title, sections]
