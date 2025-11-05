---
title: 增量学习
description: 译自 Incremental learning (https://help.supermemo.org/wiki/Incremental_learning)
date: 2025-11-05
authors:
  - name: Lamber
    link: https://github.com/Lamber-maybe
    image: https://github.com/Lamber-maybe.png
tags:
  - learn
---


## 目录

- [1什么是增量学习？](https://help.supermemo.org/wiki/Incremental_learning#What_is_incremental_learning?)
    - [1.1增量学习的一般概述](https://help.supermemo.org/wiki/Incremental_learning#General_outline_of_incremental_learning)
    - [1.2增量学习的组成部分](https://help.supermemo.org/wiki/Incremental_learning#Components_of_incremental_learning)
    - [1.3学习中中断的价值](https://help.supermemo.org/wiki/Incremental_learning#The_value_of_interruption_in_learning)
    - [1.4中断不是问题](https://help.supermemo.org/wiki/Incremental_learning#Interruption_is_not_a_problem)
    - [1.5增量学习的复杂性](https://help.supermemo.org/wiki/Incremental_learning#Complexity_of_incremental_learning)
- [2增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading)
    - [2.1增量阅读简介](https://help.supermemo.org/wiki/Incremental_learning#Introduction_to_incremental_reading)
    - [2.2什么是增量阅读？](https://help.supermemo.org/wiki/Incremental_learning#What_is_incremental_reading?)
    - [2.3增量阅读的五项基本技能](https://help.supermemo.org/wiki/Incremental_learning#Five_basic_skills_of_incremental_reading)
        - [2.3.1技能 1：导入文章](https://help.supermemo.org/wiki/Incremental_learning#Skill_1:_Importing_articles)
            - [2.3.1.1五种文章导入方法](https://help.supermemo.org/wiki/Incremental_learning#Five_article_import_methods)
                - [2.3.1.1.1通过复制和粘贴导入](https://help.supermemo.org/wiki/Incremental_learning#Import_by_Copy&Paste)
                - [2.3.1.1.2多个文章的导入](https://help.supermemo.org/wiki/Incremental_learning#Import_of_multiple_articles)
                - [2.3.1.1.3专用导入 （维基百科、YouTube 和图片）](https://help.supermemo.org/wiki/Incremental_learning#Dedicated_imports_\(Wikipedia,_YouTube,_and_pictures\))
                - [2.3.1.1.4从本地文件导入文章](https://help.supermemo.org/wiki/Incremental_learning#Importing_articles_from_local_files)
        - [2.3.2技能 2：阅读文章](https://help.supermemo.org/wiki/Incremental_learning#Skill_2:_Reading_articles)
        - [2.3.3技能 3：提取片段、问题和答案](https://help.supermemo.org/wiki/Incremental_learning#Skill_3:_Extracting_fragments,_questions_and_answers)
            - [2.3.3.1提取文本](https://help.supermemo.org/wiki/Incremental_learning#Extracting_texts)
            - [2.3.3.2添加引用](https://help.supermemo.org/wiki/Incremental_learning#Adding_references)
            - [2.3.3.3填空：生成问题](https://help.supermemo.org/wiki/Incremental_learning#Cloze:_Generating_questions)
            - [2.3.3.4简化问题](https://help.supermemo.org/wiki/Incremental_learning#Simplifying_questions)
        - [2.3.4技能 4：重复和复习](https://help.supermemo.org/wiki/Incremental_learning#Skill_4:_Repetition_and_review)
            - [2.3.4.1摘要](https://help.supermemo.org/wiki/Incremental_learning#Summary)
        - [2.3.5技能 5：处理大量知识](https://help.supermemo.org/wiki/Incremental_learning#Skill_5:_Handling_large_volumes_of_knowledge)
    - [2.4其他基本技能](https://help.supermemo.org/wiki/Incremental_learning#Other_basic_skills)
        - [2.4.1增量阅读中知识的演变](https://help.supermemo.org/wiki/Incremental_learning#Evolution_of_knowledge_in_incremental_reading)
        - [2.4.2使用图片](https://help.supermemo.org/wiki/Incremental_learning#Using_pictures)
        - [2.4.3主题与项目](https://help.supermemo.org/wiki/Incremental_learning#Topics_vs._Items)
            - [2.4.3.1主题](https://help.supermemo.org/wiki/Incremental_learning#Topics)
                - [2.4.3.1.1使用主题](https://help.supermemo.org/wiki/Incremental_learning#Using_topics)
            - [2.4.3.2项目](https://help.supermemo.org/wiki/Incremental_learning#Items)
            - [2.4.3.3概念](https://help.supermemo.org/wiki/Incremental_learning#Concepts)
            - [2.4.3.4任务](https://help.supermemo.org/wiki/Incremental_learning#Tasks)
        - [2.4.4阅读过载](https://help.supermemo.org/wiki/Incremental_learning#Reading_overload)
        - [2.4.5自动排序和自动推迟](https://help.supermemo.org/wiki/Incremental_learning#Auto-sort_and_auto-postpone)
            - [2.4.5.1重载提示](https://help.supermemo.org/wiki/Incremental_learning#Overload_hints)
        - [2.4.6子集复习](https://help.supermemo.org/wiki/Incremental_learning#Subset_review)
    - [2.5提示和技巧](https://help.supermemo.org/wiki/Incremental_learning#Hints_and_tips)
        - [2.5.1导入文章](https://help.supermemo.org/wiki/Incremental_learning#Importing_articles)
        - [2.5.2新文章的涌入](https://help.supermemo.org/wiki/Incremental_learning#Inflow_of_new_articles)
        - [2.5.3阅读](https://help.supermemo.org/wiki/Incremental_learning#Reading)
        - [2.5.4生成填空题](https://help.supermemo.org/wiki/Incremental_learning#Generating_clozes)
            - [2.5.4.1更改填空关键词的外观](https://help.supermemo.org/wiki/Incremental_learning#Changing_the_appearance_of_cloze_keywords)
                - [2.5.4.1.1移除填空关键词格式化](https://help.supermemo.org/wiki/Incremental_learning#Removing_cloze_keyword_formatting)
            - [2.5.4.2模拟现实生活场景以对抗记忆干扰](https://help.supermemo.org/wiki/Incremental_learning#Mimic_real_life_situations_to_combat_memory_interference)
                - [2.5.4.2.1示例：处理枚举](https://help.supermemo.org/wiki/Incremental_learning#Example:_dealing_with_enumerations)
        - [2.5.5学习](https://help.supermemo.org/wiki/Incremental_learning#Learning)
            - [2.5.5.1项目的重新评估](https://help.supermemo.org/wiki/Incremental_learning#Re-evaluation_of_items)
        - [2.5.6表述](https://help.supermemo.org/wiki/Incremental_learning#Formulation)
        - [2.5.7图片](https://help.supermemo.org/wiki/Incremental_learning#Pictures)
        - [2.5.8参考文献](https://help.supermemo.org/wiki/Incremental_learning#References)
        - [2.5.9你自己的发现](https://help.supermemo.org/wiki/Incremental_learning#Your_own_discoveries)
    - [2.6增量阅读的优势](https://help.supermemo.org/wiki/Incremental_learning#Advantages_of_incremental_reading)
        - [2.6.1大规模学习](https://help.supermemo.org/wiki/Incremental_learning#Massive_learning)
        - [2.6.2终生记忆](https://help.supermemo.org/wiki/Incremental_learning#Lifetime_memories)
        - [2.6.3高保留率](https://help.supermemo.org/wiki/Incremental_learning#High_retention)
        - [2.6.4理解](https://help.supermemo.org/wiki/Incremental_learning#Comprehension)
        - [2.6.5均匀进展](https://help.supermemo.org/wiki/Incremental_learning#Uniform_progress)
        - [2.6.6创造力提升](https://help.supermemo.org/wiki/Incremental_learning#Creativity_boost)
        - [2.6.7一致性（解决混乱和矛盾）](https://help.supermemo.org/wiki/Incremental_learning#Consistency_\(resolving_chaos_and_contradiction\))
        - [2.6.8无压力](https://help.supermemo.org/wiki/Incremental_learning#Stresslessness)
        - [2.6.9注意](https://help.supermemo.org/wiki/Incremental_learning#Attention)
        - [2.6.10巩固](https://help.supermemo.org/wiki/Incremental_learning#Consolidation)
        - [2.6.11优先级排序](https://help.supermemo.org/wiki/Incremental_learning#Prioritization)
        - [2.6.12阅读速度](https://help.supermemo.org/wiki/Incremental_learning#Speed_\(of_reading\))
        - [2.6.13项目制定的速度](https://help.supermemo.org/wiki/Incremental_learning#Speed_\(of_formulating_items\))
        - [2.6.14细致入微](https://help.supermemo.org/wiki/Incremental_learning#Meticulousness)
        - [2.6.15训练](https://help.supermemo.org/wiki/Incremental_learning#Training)
        - [2.6.16知识数据库](https://help.supermemo.org/wiki/Incremental_learning#Knowledge_database)
        - [2.6.17一体化档案](https://help.supermemo.org/wiki/Incremental_learning#All-in-one_archive)
        - [2.6.18乐趣](https://help.supermemo.org/wiki/Incremental_learning#Fun)
    - [2.7缺点](https://help.supermemo.org/wiki/Incremental_learning#Disadvantages)
    - [2.8增量阅读：总结](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading:_Summary)
- [3参考文献](https://help.supermemo.org/wiki/Incremental_learning#References_2)
    - [3.1为什么需要参考文献？](https://help.supermemo.org/wiki/Incremental_learning#Why_need_references?)
    - [3.2示例](https://help.supermemo.org/wiki/Incremental_learning#Example)
    - [3.3参考系统亮点](https://help.supermemo.org/wiki/Incremental_learning#Reference_system_highlights)
    - [3.4编辑引用](https://help.supermemo.org/wiki/Incremental_learning#Editing_references)
    - [3.5图像参考](https://help.supermemo.org/wiki/Incremental_learning#Image_references)
- [4增量学习中的附加技能](https://help.supermemo.org/wiki/Incremental_learning#Additional_skills_in_incremental_learning)
    - [4.1识别不合适的文本](https://help.supermemo.org/wiki/Incremental_learning#Recognizing_unsuitable_texts)
    - [4.2处理难以理解的文章](https://help.supermemo.org/wiki/Incremental_learning#Handling_incomprehensible_articles)
    - [4.3随机化重复内容](https://help.supermemo.org/wiki/Incremental_learning#Randomizing_repetitions)
    - [4.4阅读工具栏](https://help.supermemo.org/wiki/Incremental_learning#Read_toolbar)
        - [4.4.1工具栏按钮](https://help.supermemo.org/wiki/Incremental_learning#Toolbar_buttons)
    - [4.5一个记忆，一个行动](https://help.supermemo.org/wiki/Incremental_learning#One_memory,_one_action)
        - [4.5.1无效复习](https://help.supermemo.org/wiki/Incremental_learning#Futile_review)
        - [4.5.2项目完美主义](https://help.supermemo.org/wiki/Incremental_learning#Item_perfectionism)
        - [4.5.3示例：增量项目结构化](https://help.supermemo.org/wiki/Incremental_learning#Example:_incremental_item_structuring)
            - [4.5.3.1取1：原始复杂项目](https://help.supermemo.org/wiki/Incremental_learning#Take_1:_original_complex_item)
            - [4.5.3.2第二次尝试：将线索移动到答案字段](https://help.supermemo.org/wiki/Incremental_learning#Take_2:_moving_a_clue_to_the_answer_field)
            - [4.5.3.3第三次尝试：去掉前言](https://help.supermemo.org/wiki/Incremental_learning#Take_3:_removing_the_prelude)
            - [4.5.3.4第四次尝试：基本项目](https://help.supermemo.org/wiki/Incremental_learning#Take_4:_bare_bones_item)
            - [4.5.3.5进一步阅读](https://help.supermemo.org/wiki/Incremental_learning#Further_reading)
    - [4.6学习列表](https://help.supermemo.org/wiki/Incremental_learning#Learning_lists)
        - [4.6.1记忆列表的实际问题](https://help.supermemo.org/wiki/Incremental_learning#Practical_problems_with_memorizing_lists)
        - [4.6.2列表常常会被忽视](https://help.supermemo.org/wiki/Incremental_learning#Lists_can_often_be_ignored)
        - [4.6.3使用分解](https://help.supermemo.org/wiki/Incremental_learning#Using_Decompose)
    - [4.7文章的全面预览](https://help.supermemo.org/wiki/Incremental_learning#Thorough_preview_of_articles)
    - [4.8统一知识库](https://help.supermemo.org/wiki/Incremental_learning#Unified_store_of_knowledge)
    - [4.9知识的流动](https://help.supermemo.org/wiki/Incremental_learning#Flow_of_knowledge)
    - [4.10PDF 文章的增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading_of_PDF_articles)
        - [4.10.1PDF 转 HTML 转换器](https://help.supermemo.org/wiki/Incremental_learning#PDF_to_HTML_converters)
            - [4.10.1.1转换](https://help.supermemo.org/wiki/Incremental_learning#Conversion)
            - [4.10.1.2处理中](https://help.supermemo.org/wiki/Incremental_learning#Processing)
            - [4.10.1.3使用 MS Word](https://help.supermemo.org/wiki/Incremental_learning#Using_MS_Word)
            - [4.10.1.4使用 OCR](https://help.supermemo.org/wiki/Incremental_learning#Using_OCR)
        - [4.10.2带有视觉学习的 PDF](https://help.supermemo.org/wiki/Incremental_learning#PDF_with_visual_learning)
        - [4.10.3PDF 复制和粘贴](https://help.supermemo.org/wiki/Incremental_learning#PDF_copy_and_paste)
        - [4.10.4增量 PDF](https://help.supermemo.org/wiki/Incremental_learning#Incremental_PDF)
    - [4.11论文文章的增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading_of_paper_articles)
- [5增量学习的哲学](https://help.supermemo.org/wiki/Incremental_learning#Philosophy_of_incremental_learning)
    - [5.1增量学习并不适合每个人](https://help.supermemo.org/wiki/Incremental_learning#Incremental_learning_is_not_for_everyone)
    - [5.2增量学习的全局视角](https://help.supermemo.org/wiki/Incremental_learning#Big_picture_in_incremental_learning)
    - [5.3增量学习可以让你变得更聪明](https://help.supermemo.org/wiki/Incremental_learning#Incremental_learning_can_make_you_smarter)
        - [5.3.1增量学习更快](https://help.supermemo.org/wiki/Incremental_learning#Incremental_learning_is_faster)
        - [5.3.2再多的学习也无法消除无知](https://help.supermemo.org/wiki/Incremental_learning#No_amount_of_learning_can_eliminate_ignorance)
        - [5.3.3增量阅读者是不同的](https://help.supermemo.org/wiki/Incremental_learning#Incremental_readers_are_different)
        - [5.3.4没有人喜欢聪明的傻瓜](https://help.supermemo.org/wiki/Incremental_learning#Nobody_likes_a_smart_aleck)
        - [5.3.5在更高意识中的奖励](https://help.supermemo.org/wiki/Incremental_learning#Reward_in_higher_awareness)
        - [5.3.6智能学习让你更聪明](https://help.supermemo.org/wiki/Incremental_learning#Smart_learning_makes_you_smarter)
        - [5.3.7增量学习可能会让你变得更笨](https://help.supermemo.org/wiki/Incremental_learning#Incremental_learning_can_make_you_dumber)
        - [5.3.8理解自己的无知](https://help.supermemo.org/wiki/Incremental_learning#Understanding_your_own_ignorance)
    - [5.4让你更聪明的知识](https://help.supermemo.org/wiki/Incremental_learning#Knowledge_that_makes_you_smarter)
        - [5.4.1聪明与愚蠢的学习](https://help.supermemo.org/wiki/Incremental_learning#Smart_and_dumb_learning)
        - [5.4.2有助于解决问题的知识](https://help.supermemo.org/wiki/Incremental_learning#Knowledge_that_assists_problem_solving)
        - [5.4.3有助于创造力的知识](https://help.supermemo.org/wiki/Incremental_learning#Knowledge_that_assists_creativity)
    - [5.5增量学习与人类进步](https://help.supermemo.org/wiki/Incremental_learning#Incremental_learning_vs._human_progress)
        - [5.5.1知识与历史](https://help.supermemo.org/wiki/Incremental_learning#Knowledge_and_history)
        - [5.5.2知识与死亡](https://help.supermemo.org/wiki/Incremental_learning#Knowledge_and_death)
        - [5.5.3知识与遗忘](https://help.supermemo.org/wiki/Incremental_learning#Knowledge_and_forgetting)
        - [5.5.4不朽的知识](https://help.supermemo.org/wiki/Incremental_learning#Immortal_knowledge)
    - [5.6增量阅读是对传统书籍阅读的扩展](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading_is_an_extension_of_traditional_book_reading)
    - [5.7知识获取：优化领域](https://help.supermemo.org/wiki/Incremental_learning#Knowledge_acquisition:_Areas_of_optimization)
    - [5.8成本效益分析](https://help.supermemo.org/wiki/Incremental_learning#Cost-Benefit_Analysis)
        - [5.8.1知识的成本](https://help.supermemo.org/wiki/Incremental_learning#Cost_of_knowledge)
        - [5.8.2物品成本](https://help.supermemo.org/wiki/Incremental_learning#Cost_of_items)
        - [5.8.3好处](https://help.supermemo.org/wiki/Incremental_learning#Benefit)
        - [5.8.4优先事项](https://help.supermemo.org/wiki/Incremental_learning#Priorities)
    - [5.9选择知识](https://help.supermemo.org/wiki/Incremental_learning#Selecting_knowledge)
    - [5.10读者是领导者](https://help.supermemo.org/wiki/Incremental_learning#Readers_are_leaders)
    - [5.11增量阅读会减缓掌握复杂主题的速度吗？](https://help.supermemo.org/wiki/Incremental_learning#Does_incremental_reading_slow_down_mastering_complex_subjects?)
        - [5.11.1示例意见 1：解决量子力学](https://help.supermemo.org/wiki/Incremental_learning#Example_Opinion_1:_tackling_quantum_mechanics)
        - [5.11.2示例意见 2：在基础物理方面挣扎](https://help.supermemo.org/wiki/Incremental_learning#Example_Opinion_2:_struggling_with_basic_physics)
    - [5.12渐进主义和中断并不是强制性的](https://help.supermemo.org/wiki/Incremental_learning#Incrementalism_and_interruption_are_not_obligatory)
    - [5.13完美主义者的增量学习](https://help.supermemo.org/wiki/Incremental_learning#Incremental_learning_for_perfectionists)
    - [5.14增量阅读并不是一种注意力破坏者](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading_is_not_an_attention_destroyer)
        - [5.14.1学习速度瓶颈](https://help.supermemo.org/wiki/Incremental_learning#Learning_speed_bottleneck)
        - [5.14.2超负荷记忆与睡眠的作用](https://help.supermemo.org/wiki/Incremental_learning#Overloading_memory_and_the_role_of_sleep)
        - [5.14.3学习与问题解决](https://help.supermemo.org/wiki/Incremental_learning#Learning_vs._problem_solving)
        - [5.14.4网络成瘾](https://help.supermemo.org/wiki/Incremental_learning#Internet_addiction)
        - [5.14.5增量阅读提升注意力](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading_boosts_attention)
        - [5.14.6文章质量在学习中很重要](https://help.supermemo.org/wiki/Incremental_learning#Article_quality_matters_in_learning)
    - [5.15你真的能同时阅读数千篇文章吗？](https://help.supermemo.org/wiki/Incremental_learning#Can_you_really_read_thousands_of_articles_at_the_same_time?)
    - [5.16增量阅读与记忆干扰](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading_vs._memory_interference)
    - [5.17为什么维基百科比大英百科全书更好？](https://help.supermemo.org/wiki/Incremental_learning#Why_Wikipedia_is_better_than_Encyclopedia_Britannica?)
        - [5.17.1维基百科更好](https://help.supermemo.org/wiki/Incremental_learning#Wikipedia_is_better)
        - [5.17.2大英百科全书很难](https://help.supermemo.org/wiki/Incremental_learning#Britannica_is_hard)
        - [5.17.3简单英语维基百科是危险的](https://help.supermemo.org/wiki/Incremental_learning#Simple_English_Wikipedia_is_dangerous)
    - [5.18增量阅读与书籍](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading_vs._the_books)
    - [5.19增量学习与新闻](https://help.supermemo.org/wiki/Incremental_learning#Incremental_learning_vs._the_news)
        - [5.19.1你可能不想使用 SuperMemo 来处理新闻！](https://help.supermemo.org/wiki/Incremental_learning#You_will_rather_not_want_to_use_SuperMemo_to_process_news!)
        - [5.19.2示例：突发新闻如何打破新闻](https://help.supermemo.org/wiki/Incremental_learning#Example:_how_breaking_news_breaks_the_news)
    - [5.20最小信息原则](https://help.supermemo.org/wiki/Incremental_learning#Minimum_information_principle)
- [6示例：增量阅读的实际应用](https://help.supermemo.org/wiki/Incremental_learning#Examples:_Incremental_reading_in_action)
    - [6.1示例：填空删除](https://help.supermemo.org/wiki/Incremental_learning#Example:_Cloze_deletion)
    - [6.2示例：提取和删除](https://help.supermemo.org/wiki/Incremental_learning#Example:_Extracts_and_deletions)
        - [6.2.1示例文本（由学生提交）](https://help.supermemo.org/wiki/Incremental_learning#Example_text_\(submitted_by_a_student\))
        - [6.2.2示例处理](https://help.supermemo.org/wiki/Incremental_learning#Example_processing)
            - [6.2.2.1提取1和4的填空：冥王星和轨道差异](https://help.supermemo.org/wiki/Incremental_learning#Extract_1_and_4_clozes:_Pluto_and_orbit_discrepancies)
            - [6.2.2.2提取 2 和 1 填空：行星 X](https://help.supermemo.org/wiki/Incremental_learning#Extract_2_and_1_cloze:_Planet_X)
            - [6.2.2.3提取3和5个填空：旅行者和海王星](https://help.supermemo.org/wiki/Incremental_learning#Extract_3_and_5_clozes:_Voyager_and_Neptune)
    - [6.3示例：处理一篇文章](https://help.supermemo.org/wiki/Incremental_learning#Example:_Processing_an_article)
        - [6.3.1阅读文章](https://help.supermemo.org/wiki/Incremental_learning#Reading_the_article)
        - [6.3.2提炼文章的精髓](https://help.supermemo.org/wiki/Incremental_learning#Extracting_the_essence_from_the_article)
        - [6.3.3改善摘录的措辞](https://help.supermemo.org/wiki/Incremental_learning#Improving_the_wording_of_extracts)
        - [6.3.4生成填空删除](https://help.supermemo.org/wiki/Incremental_learning#Generating_cloze_deletions)
        - [6.3.5将填空题转换为普通问题](https://help.supermemo.org/wiki/Incremental_learning#Converting_cloze_deletions_to_plain_questions)
    - [6.4示例：改写文本](https://help.supermemo.org/wiki/Incremental_learning#Example:_Rewording_texts)
    - [6.5示例：信息聚合](https://help.supermemo.org/wiki/Incremental_learning#Example:_Conglomerating_information)
        - [6.5.1怪物物品示例](https://help.supermemo.org/wiki/Incremental_learning#Example_of_a_monster_item)
        - [6.5.2建议](https://help.supermemo.org/wiki/Incremental_learning#Suggestions)
    - [6.6示例：知识的演变](https://help.supermemo.org/wiki/Incremental_learning#Example:_Evolution_of_knowledge)
    - [6.7示例：逐步建立理解](https://help.supermemo.org/wiki/Incremental_learning#Example:_Building_comprehension_incrementally)
    - [6.8示例：不适合的文本](https://help.supermemo.org/wiki/Incremental_learning#Example:_Unsuitable_texts)
        - [6.8.1示例 1：过于笼统的文本](https://help.supermemo.org/wiki/Incremental_learning#Example_1:_Texts_that_are_too_general)
        - [6.8.2示例 2：来自 super-memory.com 的不适合文本](https://help.supermemo.org/wiki/Incremental_learning#Example_2:_Unsuitable_text_from_super-memory.com)
- [7人们对增量阅读有什么看法？](https://help.supermemo.org/wiki/Incremental_learning#What_do_people_say_about_incremental_reading?)
    - [7.1用户眼中的增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading_in_the_eyes_of_its_users)
        - [7.1.1应对信息过载](https://help.supermemo.org/wiki/Incremental_learning#Dealing_with_information_overflow)
        - [7.1.2Len Budney 关于增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Len_Budney_on_incremental_reading)
        - [7.1.3如何提升你的语言学习效率](https://help.supermemo.org/wiki/Incremental_learning#How_to_supercharge_your_language_learning)
        - [7.1.4记笔记：增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Taking_note:_Incremental_Reading)
            - [7.1.4.1大局观](https://help.supermemo.org/wiki/Incremental_learning#Big_picture)
            - [7.1.4.2同时阅读数千篇文章](https://help.supermemo.org/wiki/Incremental_learning#Reading_thousands_of_articles_at_the_same_time)
        - [7.1.5浪人的道路：关于增量阅读](https://help.supermemo.org/wiki/Incremental_learning#The_way_of_the_ronin:_About_incremental_reading)
        - [7.1.6如何逐步阅读任何内容](https://help.supermemo.org/wiki/Incremental_learning#How_to_incrementally_read_anything)
        - [7.1.7路易斯·古斯塔沃·内维斯·达·席尔瓦谈记忆法](https://help.supermemo.org/wiki/Incremental_learning#Luis_Gustavo_Neves_da_Silva_on_memorization)
        - [7.1.8增量阅读图示](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading_diagram)
    - [7.2对增量阅读的批评](https://help.supermemo.org/wiki/Incremental_learning#Criticism_of_incremental_reading)
        - [7.2.1增量阅读是无用的](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading_is_useless)
        - [7.2.2观察者的观点：为什么我不使用增量学习？](https://help.supermemo.org/wiki/Incremental_learning#Observer's_Opinion:_Why_I_would_not_use_incremental_learning?)
        - [7.2.3SuperMemo 用户的看法：我为什么不使用增量阅读？](https://help.supermemo.org/wiki/Incremental_learning#SuperMemo_user's_opinion:_Why_I_do_not_use_incremental_reading?)
            - [7.2.3.1评论：你需要尝试增量方法，以便更好地理解](https://help.supermemo.org/wiki/Incremental_learning#Comment:_You_need_to_try_incremental_approach_to_get_a_good_feel)
- [8优先队列](https://help.supermemo.org/wiki/Incremental_learning#Priority_queue)
    - [8.1优先队列：介绍](https://help.supermemo.org/wiki/Incremental_learning#Priority_queue:_Introduction)
    - [8.2我们能学会整部《大英百科全书》吗？](https://help.supermemo.org/wiki/Incremental_learning#Can_we_learn_the_entire_Encyclopedia_Britannica?)
    - [8.3学习中的数量与保留之战](https://help.supermemo.org/wiki/Incremental_learning#Volume_vs._retention_battle_in_learning)
    - [8.4增量阅读中的优先偏差](https://help.supermemo.org/wiki/Incremental_learning#Priority_bias_in_incremental_reading)
    - [8.5SuperMemo 中的优先队列](https://help.supermemo.org/wiki/Incremental_learning#Priority_queue_in_SuperMemo)
    - [8.6优先排序在变得简单之前是困难的](https://help.supermemo.org/wiki/Incremental_learning#Prioritization_is_difficult_before_it_becomes_easy)
    - [8.7排序重复项](https://help.supermemo.org/wiki/Incremental_learning#Sorting_repetitions)
    - [8.8随机重复](https://help.supermemo.org/wiki/Incremental_learning#Random_repetitions)
    - [8.9优先级规则手册](https://help.supermemo.org/wiki/Incremental_learning#Prioritization_rulebook)
    - [8.10优先队列：总结](https://help.supermemo.org/wiki/Incremental_learning#Priority_queue:_Summary)
- [9视觉学习](https://help.supermemo.org/wiki/Incremental_learning#Visual_learning)
    - [9.1增量图像处理与学习](https://help.supermemo.org/wiki/Incremental_learning#Incremental_picture_processing_and_learning)
    - [9.2将图片添加到 SuperMemo](https://help.supermemo.org/wiki/Incremental_learning#Adding_pictures_to_SuperMemo)
        - [9.2.1从剪贴板粘贴图片](https://help.supermemo.org/wiki/Incremental_learning#Pasting_pictures_from_the_clipboard)
        - [9.2.2从本地驱动器导入图片](https://help.supermemo.org/wiki/Incremental_learning#Importing_pictures_from_a_local_drive)
            - [9.2.2.1一幅画](https://help.supermemo.org/wiki/Incremental_learning#A_single_picture)
            - [9.2.2.2一文件夹的图片](https://help.supermemo.org/wiki/Incremental_learning#A_folder_of_pictures)
        - [9.2.3从网络导入图片](https://help.supermemo.org/wiki/Incremental_learning#Importing_pictures_from_the_web)
            - [9.2.3.1从网络导入](https://help.supermemo.org/wiki/Incremental_learning#Import_from_the_web)
            - [9.2.3.2从包含在 SuperMemo 中的文章导入](https://help.supermemo.org/wiki/Incremental_learning#Import_from_articles_included_in_SuperMemo)
        - [9.2.4图片作为答案](https://help.supermemo.org/wiki/Incremental_learning#Pictures_as_answers)
    - [9.3拼贴图片](https://help.supermemo.org/wiki/Incremental_learning#Tiling_pictures)
    - [9.4大图景](https://help.supermemo.org/wiki/Incremental_learning#Big_pictures)
        - [9.4.1缩放、切片、修剪和裁剪图片](https://help.supermemo.org/wiki/Incremental_learning#Zooming,_slicing,_trimming,_and_cropping_pictures)
        - [9.4.2图片处理选项](https://help.supermemo.org/wiki/Incremental_learning#Picture_processing_options)
    - [9.5从大图中提取图片](https://help.supermemo.org/wiki/Incremental_learning#Extracting_pictures_from_larger_pictures)
        - [9.5.1图片提取示例](https://help.supermemo.org/wiki/Incremental_learning#Example_of_a_picture_extract)
    - [9.6图片填空](https://help.supermemo.org/wiki/Incremental_learning#Cloze_for_pictures)
        - [9.6.1多个项目](https://help.supermemo.org/wiki/Incremental_learning#Multiple_items)
        - [9.6.2增量方法](https://help.supermemo.org/wiki/Incremental_learning#Incremental_approach)
- [10增量视频](https://help.supermemo.org/wiki/Incremental_learning#Incremental_video)
    - [10.1什么是增量视频？](https://help.supermemo.org/wiki/Incremental_learning#What_is_incremental_video?)
        - [10.1.1增量视频与 YouTube](https://help.supermemo.org/wiki/Incremental_learning#Incremental_video_with_YouTube)
        - [10.1.2增量视频与视频文件](https://help.supermemo.org/wiki/Incremental_learning#Incremental_video_with_video_files)
    - [10.2SuperMemo 中的增量视频](https://help.supermemo.org/wiki/Incremental_learning#Incremental_video_in_SuperMemo)
        - [10.2.1增量视频与 YouTube：大纲](https://help.supermemo.org/wiki/Incremental_learning#Incremental_video_with_YouTube:_Outline)
            - [10.2.1.1从 YouTube 导入视频](https://help.supermemo.org/wiki/Incremental_learning#Importing_videos_from_YouTube)
            - [10.2.1.2观看 YouTube 视频](https://help.supermemo.org/wiki/Incremental_learning#Viewing_YouTube_videos)
                - [10.2.1.2.1提取复习片段](https://help.supermemo.org/wiki/Incremental_learning#Extracting_fragments_for_review)
                - [10.2.1.2.2书签](https://help.supermemo.org/wiki/Incremental_learning#Bookmark)
                - [10.2.1.2.3排序视频](https://help.supermemo.org/wiki/Incremental_learning#Sorting_videos)
                - [10.2.1.2.4跳过](https://help.supermemo.org/wiki/Incremental_learning#Skipping)
                - [10.2.1.2.5交叉启发](https://help.supermemo.org/wiki/Incremental_learning#Cross-inspiration)
            - [10.2.1.3将视频片段转发给朋友](https://help.supermemo.org/wiki/Incremental_learning#Forwarding_video_fragments_to_friends)
            - [10.2.1.4示范性的 YouTube 视频](https://help.supermemo.org/wiki/Incremental_learning#Exemplary_YouTube_videos)
        - [10.2.2增量视频与视频文件：大纲](https://help.supermemo.org/wiki/Incremental_learning#Incremental_video_with_video_files:_Outline)
            - [10.2.2.1视频删除](https://help.supermemo.org/wiki/Incremental_learning#Video_deletion)
            - [10.2.2.2观看视频文件和学习](https://help.supermemo.org/wiki/Incremental_learning#Viewing_video_files_and_learning)
            - [10.2.2.3示范视频文件](https://help.supermemo.org/wiki/Incremental_learning#Exemplary_video_files)
    - [10.3提示：增量视频](https://help.supermemo.org/wiki/Incremental_learning#Hints:_Incremental_video)
        - [10.3.1提示：与 YouTube 的增量视频](https://help.supermemo.org/wiki/Incremental_learning#Hints:_Incremental_video_with_YouTube)
        - [10.3.2提示：使用本地文件的增量视频](https://help.supermemo.org/wiki/Incremental_learning#Hints:_Incremental_video_with_local_files)
        - [10.3.3基于 YouTube 的增量视频问题](https://help.supermemo.org/wiki/Incremental_learning#Problems_with_YouTube-based_incremental_video)
        - [10.3.4您自己的增量视频脚本](https://help.supermemo.org/wiki/Incremental_learning#Your_own_incremental_video_script)
    - [10.4示例](https://help.supermemo.org/wiki/Incremental_learning#Example_2)
- [11增量音频](https://help.supermemo.org/wiki/Incremental_learning#Incremental_audio)
    - [11.1增量音频：介绍](https://help.supermemo.org/wiki/Incremental_learning#Incremental_audio:_Introduction)
    - [11.2增量音频与音频文件](https://help.supermemo.org/wiki/Incremental_learning#Incremental_audio_with_sound_files)
    - [11.3增量音频与 YouTube](https://help.supermemo.org/wiki/Incremental_learning#Incremental_audio_with_YouTube)
- [12增量邮件处理](https://help.supermemo.org/wiki/Incremental_learning#Incremental_mail_processing)
    - [12.1SuperMemo 中的电子邮件：介绍](https://help.supermemo.org/wiki/Incremental_learning#E-mail_in_SuperMemo:_Introduction)
    - [12.2将学习数据发送给他人](https://help.supermemo.org/wiki/Incremental_learning#Sending_learning_data_to_others)
    - [12.3将邮件导入 SuperMemo](https://help.supermemo.org/wiki/Incremental_learning#Importing_mail_to_SuperMemo)
        - [12.3.1从 Windows (Live) Mail 导入邮件](https://help.supermemo.org/wiki/Incremental_learning#Importing_mail_from_Windows_\(Live\)_Mail)
        - [12.3.2从 MS Outlook 导入邮件](https://help.supermemo.org/wiki/Incremental_learning#Importing_mail_from_MS_Outlook)
        - [12.3.3从其他应用程序导入邮件](https://help.supermemo.org/wiki/Incremental_learning#Importing_mail_from_other_applications)
            - [12.3.3.1从文件夹导入邮件](https://help.supermemo.org/wiki/Incremental_learning#Importing_mail_from_a_folder)
            - [12.3.3.2通过复制和粘贴导入邮件](https://help.supermemo.org/wiki/Incremental_learning#Importing_mail_by_copy&paste)
            - [12.3.3.3从其他应用程序导入](https://help.supermemo.org/wiki/Incremental_learning#Importing_from_other_applications)
    - [12.4逐步阅读邮件](https://help.supermemo.org/wiki/Incremental_learning#Reading_mail_incrementally)
        - [12.4.1优势](https://help.supermemo.org/wiki/Incremental_learning#Advantages)
        - [12.4.2缺点](https://help.supermemo.org/wiki/Incremental_learning#Disadvantages_2)
    - [12.5邮件处理的增量策略](https://help.supermemo.org/wiki/Incremental_learning#Incremental_strategy_for_mail_processing)
    - [12.6邮件处理技巧](https://help.supermemo.org/wiki/Incremental_learning#Mail_processing_tips)
        - [12.6.1您可以按间隔、优先级或其他标准对邮件进行排序](https://help.supermemo.org/wiki/Incremental_learning#You_can_sort_mail_by_interval,_priority_or_other_criteria)
    - [12.7回复常见问题解答](https://help.supermemo.org/wiki/Incremental_learning#Responding_with_FAQs)
- [13创造力中的增量学习](https://help.supermemo.org/wiki/Incremental_learning#Incremental_learning_in_creativity)
    - [13.1增量问题解决](https://help.supermemo.org/wiki/Incremental_learning#Incremental_problem_solving)
        - [13.1.1示范性问题解决](https://help.supermemo.org/wiki/Incremental_learning#Exemplary_problems_to_solve)
        - [13.1.2增量问题解决是如何工作的？](https://help.supermemo.org/wiki/Incremental_learning#How_does_incremental_problem_solving_work?)
        - [13.1.3增量问题解决的优势](https://help.supermemo.org/wiki/Incremental_learning#Advantages_of_incremental_problem_solving)
    - [13.2增量写作](https://help.supermemo.org/wiki/Incremental_learning#Incremental_writing)
        - [13.2.1增量写作：介绍](https://help.supermemo.org/wiki/Incremental_learning#Incremental_writing:_Introduction)
        - [13.2.2增量写作算法](https://help.supermemo.org/wiki/Incremental_learning#Incremental_writing_algorithm)
            - [13.2.2.1增量写作示例 #1](https://help.supermemo.org/wiki/Incremental_learning#Incremental_writing_example_#1)
            - [13.2.2.2增量写作示例 #2](https://help.supermemo.org/wiki/Incremental_learning#Incremental_writing_example_#2)
        - [13.2.3增量写作的优势](https://help.supermemo.org/wiki/Incremental_learning#Advantages_of_incremental_writing)
            - [13.2.3.1写作的乐趣提升效率](https://help.supermemo.org/wiki/Incremental_learning#Fun_of_writing_boosts_efficiency)
            - [13.2.3.2创造性爆发与截止日期](https://help.supermemo.org/wiki/Incremental_learning#Creative_explosion_vs._deadlines)
        - [13.2.4增量写作的缺点](https://help.supermemo.org/wiki/Incremental_learning#Disadvantages_of_incremental_writing)
    - [13.3增量头脑风暴](https://help.supermemo.org/wiki/Incremental_learning#Incremental_brainstorming)
        - [13.3.1增量头脑风暴的优势](https://help.supermemo.org/wiki/Incremental_learning#Advantages_of_incremental_brainstorming)
        - [13.3.2增量头脑风暴的缺点](https://help.supermemo.org/wiki/Incremental_learning#Disadvantages_of_incremental_brainstorming)
        - [13.3.3头脑风暴的未来](https://help.supermemo.org/wiki/Incremental_learning#Future_of_brainstorming)
    - [13.4用户观点：创意阐述](https://help.supermemo.org/wiki/Incremental_learning#User's_take:_Creative_elaboration)
- [14神经创造力](https://help.supermemo.org/wiki/Incremental_learning#Neural_creativity)
    - [14.1使用 SuperMemo 的神经学习](https://help.supermemo.org/wiki/Incremental_learning#Neural_learning_with_SuperMemo)
    - [14.2概念](https://help.supermemo.org/wiki/Incremental_learning#Concepts_2)
    - [14.3概念：基本操作](https://help.supermemo.org/wiki/Incremental_learning#Concepts:_basic_operations)
    - [14.4概念：术语](https://help.supermemo.org/wiki/Incremental_learning#Concepts:_terminology)
    - [14.5概念组](https://help.supermemo.org/wiki/Incremental_learning#Concept_groups)
    - [14.6概念注册表](https://help.supermemo.org/wiki/Incremental_learning#Concept_registry)
    - [14.7链接注册表](https://help.supermemo.org/wiki/Incremental_learning#Link_registry)
    - [14.8神经回顾](https://help.supermemo.org/wiki/Incremental_learning#Neural_review)
    - [14.9神经网络评审启动器](https://help.supermemo.org/wiki/Incremental_learning#Neural_review_starter)
        - [14.9.1前提条件](https://help.supermemo.org/wiki/Incremental_learning#Pre-conditions)
        - [14.9.2开始](https://help.supermemo.org/wiki/Incremental_learning#Start)
        - [14.9.3审查](https://help.supermemo.org/wiki/Incremental_learning#Review)
        - [14.9.4添加到审阅](https://help.supermemo.org/wiki/Incremental_learning#Add_to_review)
        - [14.9.5停止](https://help.supermemo.org/wiki/Incremental_learning#Stop)
        - [14.9.6示例](https://help.supermemo.org/wiki/Incremental_learning#Example_3)
    - [14.10神经学习的成本](https://help.supermemo.org/wiki/Incremental_learning#Costs_of_neural_learning)
    - [14.11扩散激活](https://help.supermemo.org/wiki/Incremental_learning#Spreading_activation)
        - [14.11.1传播激活规则](https://help.supermemo.org/wiki/Incremental_learning#Spreading_activation_rules)
        - [14.11.2扩散激活算法](https://help.supermemo.org/wiki/Incremental_learning#Spreading_activation_algorithm)
    - [14.12神经创造力](https://help.supermemo.org/wiki/Incremental_learning#Neural_creativity_2)
    - [14.13增量方法](https://help.supermemo.org/wiki/Incremental_learning#Incremental_approach_2)
    - [14.14神经创造力的例子](https://help.supermemo.org/wiki/Incremental_learning#Examples_of_neural_creativity)
        - [14.14.1医学诊断](https://help.supermemo.org/wiki/Incremental_learning#Medical_diagnosis)
        - [14.14.2解决软件问题](https://help.supermemo.org/wiki/Incremental_learning#Solving_a_software_problem)
        - [14.14.3创意写作](https://help.supermemo.org/wiki/Incremental_learning#Creative_writing)
        - [14.14.4法医学](https://help.supermemo.org/wiki/Incremental_learning#Forensic_science)
    - [14.15另见](https://help.supermemo.org/wiki/Incremental_learning#See_also)
- [15增量学习的神话](https://help.supermemo.org/wiki/Incremental_learning#Incremental_learning_myths)
    - [15.1神话：许多人在没有使用 SuperMemo 的情况下取得成功，因此它的重要性是次要的](https://help.supermemo.org/wiki/Incremental_learning#Myth:_Many_people_are_successful_without_using_SuperMemo,_hence_its_importance_is_secondary)
    - [15.2神话：自然机制选择重要记忆的能力足够好。我们不需要拐杖。](https://help.supermemo.org/wiki/Incremental_learning#Myth:_Natural_mechanisms_for_selecting_important_memories_are_good_enough._We_do_not_need_a_crutch)
    - [15.3神话：我们无法通过训练来改善记忆](https://help.supermemo.org/wiki/Incremental_learning#Myth:_We_cannot_improve_memory_by_training)
    - [15.4神话：SuperMemo 的重复练习花费太多时间，得不偿失](https://help.supermemo.org/wiki/Incremental_learning#Myth:_SuperMemo_repetitions_take_too_much_time_to_make_it_worthwhile)
    - [15.5神话：随着你在 SuperMemo 中添加更多材料，你的重复负担会增加到难以管理的程度](https://help.supermemo.org/wiki/Incremental_learning#Myth:_As_you_add_more_material_to_SuperMemo,_your_repetition_loads_mount_beyond_being_manageable)
    - [15.6神话：人们在学习速度上存在差异，但他们遗忘的速度却是相同的](https://help.supermemo.org/wiki/Incremental_learning#Myth:_People_differ_in_the_speed_of_learning,_but_they_all_forget_at_the_same_speed)
    - [15.7神话：超文本可以替代记忆](https://help.supermemo.org/wiki/Incremental_learning#Myth:_Hypertext_can_substitute_for_memory)
    - [15.8神话：我们不需要 SuperMemo，我们所需要的只是建立一个知识来源的索引](https://help.supermemo.org/wiki/Incremental_learning#Myth:_We_do_not_need_SuperMemo,_all_we_need_is_to_build_an_index_to_knowledge_sources)
        - [15.8.1知识索引](https://help.supermemo.org/wiki/Incremental_learning#Index_to_knowledge)
    - [15.9神话：在增量阅读中，你只需花几秒钟阅读一个主题](https://help.supermemo.org/wiki/Incremental_learning#Myth:_In_incremental_reading,_you_spend_mere_seconds_reading_a_topic)
    - [15.10神话：记忆是不必要的](https://help.supermemo.org/wiki/Incremental_learning#Myth:_Memorization_is_not_needed)
    - [15.11神话：高保留率导致学习缓慢](https://help.supermemo.org/wiki/Incremental_learning#Myth:_High_retention_results_in_slow_learning)
    - [15.12神话：我们擅长记住重要的事情](https://help.supermemo.org/wiki/Incremental_learning#Myth:_We_are_good_at_remembering_important_things)
    - [15.13神话：我们记住有用的东西是因为我们使用它们](https://help.supermemo.org/wiki/Incremental_learning#Myth:_We_remember_useful_things_because_we_use_them)
- [16增量学习的历史](https://help.supermemo.org/wiki/Incremental_learning#History_of_incremental_learning)
- [17补充材料](https://help.supermemo.org/wiki/Incremental_learning#Supplementary_materials)

> _我们的文化并不鼓励我们多思考学习。相反，我们把它视为一种自然而然发生的事情。但学习本身必须由我们自己培养的一系列技能组成；我们一开始只有其中的一部分，慢慢地发展其余的。为什么更多的人不继续学习更多、更好的学习技能？因为它不会立即得到回报，其收益有很长的延迟_ 。
> 
> 马文·明斯基

# 什么是增量学习？

本文描述了通往坚实终身知识的最快途径： **增量学习** 。

增量学习是目前（2013年）学生可用的最快和最全面的学习方式。

增量学习是基于计算机的技术的整合，这些技术加速和优化了从所有可用的电子形式材料中学习的过程，而不仅限于此。

目前，[SuperMemo](http://www.super-memo.com/supermemo17.html) 是唯一实现增量学习的软件。在 SuperMemo 中，学生将所有形式的学习材料和/或数据（文本、图片、视频、声音等）输入程序。这些学习材料随后逐渐转化为可以持续一生的持久知识。

**增量学习帮助学生将所有形式的学习材料转化为持久而长久的记忆。**

在增量学习中，学生通常能记住95%的首要材料。这些知识相对稳定，并且在学习过程持续进行时，学生的记忆能够保持这些知识，甚至在学习结束后也能持续很久。

**增量学习轻松确保终身对最高优先级学习材料的 95%回忆** （只要学生按照程序提供的建议定期复习）。

与各种传统学习方法相比，高[知识保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")的成本非常小。例如，在学习一门语言时，受过教育的母语者的[词汇量](http://super-memory.com/english/ae.htm)可以在 SuperMemo 中以每天 20 分钟的成本在过程的头几年内保留，而在后来的几年中仅需几分钟（假设原始词汇量是在 4 年内分成 30-50 分钟的时间段获得的）。

**增量学习确保在时间成本上大幅降低的情况下实现高回忆率（与课本学习相比）。**

增量学习的名称源于学习过程的增量特性。在增量学习中，所有知识的各个方面都得到定期处理，并且有规律地涌入新知识，这些新知识建立在过去的知识基础上。在增量学习中，学生处于主导地位，决定应该掌握哪些知识。他或她决定何时进行学习，以何种细节程度，以何种[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，以及希望达到何种程度的[回忆/保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") 。例如，在一次学习中，学生可能会学习一些地理事实，发现一些健康生活方式的规则，弄清楚一些统计公式，阅读朋友博客中的几段文字，处理几分钟的家庭视频，给几张家庭照片做注释，观看他在 YouTube 视频收藏中的几段视频，以及阅读与即将到来的考试相关的几篇文章。换句话说，所有知识领域都在与兴趣和重要性成比例地并行增长。

典型的学校学习强调少数知识领域，而忽视了其他所有领域。一名医学生可能花几个月时间掌握解剖学，同时在此期间逐渐忘记生物化学的内容（或反之亦然）。与此同时，他或她将没有时间去研究那些始终依赖于特定人和特定背景的重要问题。在学校繁重的学习负担下，学生可能永远找不到时间去弄清楚什么是增量学习。狭隘的视野和狭窄的视角只会使进一步合理化学习材料的选择变得更加困难。

**增量学习与非理性的学校系统学习相反，后者在一个学期内过于关注少数几个知识领域（以牺牲其他同样重要的学习领域为代价）。**

## 增量学习的一般概述

在增量学习中，您通过以下步骤获取和维护知识：

- 从各种电子和非电子来源导入知识（例如，网络文章、YouTube 视频、音乐文件、相机照片、电子邮件、扫描的纸质笔记等）
- [优先处理知识](https://help.supermemo.org/wiki/Incremental_learning#Priority_queue)以便增量处理（例如，物理的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")高，电影琐事的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")低，等等）。增量方法意味着以小块和小步骤处理知识。
- 逐渐将学习材料转化为你记忆中持久的知识。这种转化还可能产生一个易于搜索且注释良好的计算机媒体档案，甚至不需要成为学习过程的一部分。
- 在获得知识的基础上进行创造性扩展（例如，在[增量写作](https://help.supermemo.org/wiki/Incremental_learning#Incremental_writing) 、 [问题解决](https://help.supermemo.org/wiki/Incremental_learning#Incremental_problem_solving)等过程中）

**通过增量学习，您可以整合所有知识来源，并将信息转化为终身记忆，所需的时间成本和严格定义的目标与优先级。**

## 增量学习的组成部分

增量学习工具在不同的学习材料、媒体和目标上有显著差异。以下是增量学习的主要组成部分：

- [增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading)
- [增量图像学习](https://help.supermemo.org/wiki/Incremental_learning#Visual_learning) （或视觉学习）
- [增量视频](https://help.supermemo.org/wiki/Incremental_learning#Incremental_video)
- [增量音频](https://help.supermemo.org/wiki/Incremental_learning#Incremental_audio)
- [增量邮件处理](https://help.supermemo.org/wiki/Incremental_learning#Incremental_mail_processing)
- 增量创意扩展（包括 [增量问题解决](https://help.supermemo.org/wiki/Incremental_learning#Incremental_problem_solving) 、 [增量写作](https://help.supermemo.org/wiki/Incremental_learning#Incremental_writing) 等）

通过增量学习提供的丰富工具集，所有的阅读、学习、查看、归档和注释功能都可以委托给 SuperMemo。这远远超出了标准学习的范畴，包括个人笔记、家庭视频、以音频和视频格式提供的讲座、YouTube 材料、家庭相册、日记、音频文件、扫描的纸质材料等。

增量学习中最古老、最受欢迎且最成熟的组成部分是 **增量阅读** 。我们将以增量阅读作为对其他形式增量学习的全面介绍。

## 学习中中断的价值

在增量学习中，我们经常迅速从一个主题转到另一个主题。这种中断可能在单个学习日内发生多次。当人们第一次了解这种增量方法时，他们会立即问 _“为什么要中断？难道这些不是人类努力追求彻底、坚持不懈并做到尽善尽美的基本原则吗？”_

学习中中断的三个主要优点是：

- **改善记忆** : 间隔学习已被证明比集中时间的学习更有效得多
- **改善学习选择/优先级** ：除非学习材料已由更高权威预先选择，否则学生自己的选择需要优先排序，这反过来又需要预览。预览是一种中断形式。定期中断可以让人随时进行优先排序。
- **提高注意力** : 每当注意力下降时，换个主题是除了明确休息之外最简单的补救方法

至于缺点……没有！简单来说： **中断是可选的！** 确实，增量学习可能导致“学习不耐烦”和“渴望中断”，然而，这些从未被证明是有害的，只是表明一旦你采用增量学习，你可能再也不想回到传统的“一次一本书”学习方式。然而，你不应忘记学校也是增量的。只是在一个稍微适中的规模上。学校在孩子们从地理课转到物理课时，或者在他们结束一天的学习时，会进行中断。

一旦掌握了增量学习的艺术，其优势远远超出了中断或[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition")的优势。以下是一个简短的列表（有关详细讨论，请参见： [增量学习的优势](https://help.supermemo.org/wiki/Incremental_learning#Advantages_of_incremental_reading) ）。

- **大规模学习** - 你学习的内容超出了你认为记忆所能容纳的范围
- **95% 知识保留** - 您几乎消除了遗忘的问题
- **终身记忆** - 你的记忆将持续一生（只要你坚持基于[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition")的定期复习计划）
- **全面学习**各个方面（而不是学校式的专注于 2-4 个专业）
- 对所研究主题的**更好理解**得益于适度消费细节，以及便于纳入解释性材料（例如来自字典和/或百科全书）。
- 通过增量方法、中断学习、间隔和新知识的插入，能够更好地巩固知识结构。与普遍看法相反，增量学习有助于你在脑海中保持整体观。
- 通过一次专注于一个问题而不遗漏任何细节，以及通过不断更换学习材料来弥补注意力缺陷，从而实现**更好的注意力**
- **创造力** - 通过以不可预测的顺序接触不同的主题，你的创造力得以飞跃。你可以在例如 [增量问题解决](https://help.supermemo.org/wiki/Incremental_learning#Incremental_problem_solving) 或 [增量写作](https://help.supermemo.org/wiki/Incremental_learning#Incremental_writing) 的过程中运用它（本文是使用 SuperMemo 中的增量写作工具撰写的）
- **战胜混乱** - 在 SuperMemo 中解决矛盾更为容易，例如在处理具有矛盾主张和发现的新研究时。与“现实生活”中的记忆不同，你会在矛盾之间反复摇摆，SuperMemo 不容忍信息的不一致。矛盾材料会在某个点上趋于一致，当你意识到需要决定真相的本质时。
- **所有知识都得到了很好的优先排序**
- **所有知识都可以轻松搜索**
- **所有知识都是可量化的** （大小、保留、工作量等）
- **无压力** - 没有什么能像这种感觉一样让你的思维在学习时高效自由，那就是你不会错过任何细节，并且可以专注于一个问题，同时将其他问题推迟到后面处理
- **乐趣** - 一旦你掌握了增量学习，它可以真正成为你一天中最美好的部分，几乎没有其他世俗的乐趣能像新获得的有用知识那样给你带来满足感

简而言之，通过增量学习，你可以快速学习，获取大量知识，终生保持记忆，几乎记住你所学的所有内容，更好地理解事物，在各个方向上和谐发展，增强你的创造力，同时享受无与伦比的乐趣！如果这听起来太美好而不真实，请继续阅读下面的内容，或者亲自尝试一下。有关详细说明，请参见： [增量学习的优势](https://help.supermemo.org/wiki/Incremental_learning#Advantages_of_incremental_learning) 。

## 中断不是问题

在学习中，选择正确的学习资源是成功的第一步。一篇写得好的文章会在其第一段甚至一句话中让你理解基本思想。增量阅读最适合以超文本或百科全书式写作的文章。理想情况下，你阅读的每一句话都对你的知识有所贡献，而不是在后面的句子没有的情况下毫无用处。

想象一下，你想了解一些关于[贾马尔·阿卜杜勒·纳赛尔](https://en.wikipedia.org/wiki/Gamal_Abdel_Nasser)的事情。例如，你会从[维基百科](https://en.wikipedia.org/)导入一篇关于纳赛尔的文章。在第一句话中，你会发现“ _贾马尔·阿卜杜勒·纳赛尔（1918 - 1970）是埃及的第二任总统_ ”。如果你对纳赛尔不太了解，你可能会很高兴地知道他是埃及总统，然后安全地跳到阅读其他文章。因此，你可能会推迟了解纳赛尔的历史角色，节省一些时间去了解，例如[西蒙·佩雷斯](https://en.wikipedia.org/wiki/Shimon_Peres)是谁。当你第二次看到纳赛尔的文章时，你可能会发现“ _他在穆罕默德·纳吉布总统之后担任总统，可以被视为历史上最重要的阿拉伯领导人之一_ ”。这一知识也是自成体系的，你可以耐心等待第三次与纳赛尔的接触。当你下次回来时，你可能会得出关于纳赛尔的另一条信息优先级较低的结论：“ _纳赛尔出生于亚历山大_ ”。你可以将这条信息的复习安排在 2-3 年后。 也许你对纳赛尔或[亚历山大](https://en.wikipedia.org/wiki/Alexandria)的兴趣会增长到这个知识变得相关的程度。如果没有，你可以随时[忽略](https://help.supermemo.org/wiki/Glossary:Dismiss "Glossary:Dismiss")或删除这样的[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 。或者，你可以跳过几段，提取一个更重要的句子：“ _在 1952 年，纳赛尔领导了对埃及法鲁克一世国王的军事政变_ ”。即使你在持续几个月的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")中阅读关于纳赛尔的单独句子，你的知识也会逐渐扩展并变得越来越巩固（尤其是如果你使用[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，这对于较长的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")是必需的）。

当然，并不是所有文本都适合增量阅读。例如，一篇研究论文可能会详细描述方法，并将结果和结论留到最后。在这种情况下，您可以[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")摘要，并将论文的主体推迟到您认为摘要已经被充分处理的时间段。然后，如果您仍然对文章感兴趣，可以将方法安排在未来的某个时间（您是否阅读方法取决于文章的结论）。您可以将结果和讨论安排在一个不那么遥远的时间点，并继续阅读结论。

最难的文本可能不适合分段阅读。例如，一段软件代码可能需要整体分析才能揭示任何有用的意义。在这种情况下，当文本（这里是代码）出现在增量阅读过程中时，分析它并口头表达你的结论。然后可以对结论进行增量处理。你将根据你认为重要的知识点和哪些知识点变得不稳定来生成个别问题。原始计算机代码仍可以保留在你的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中，仅作为参考。

在大学学习时，你会同时进行多门课程。这是增量阅读的宏观版本。许多人喜欢在电视上切换频道，玩一种混乱的增量视频版本。切换频道可能不是一种推荐的学习方式，但它不会让你的思维空白。另一个例子是那些习惯于同时阅读几本小说的人。他们对小说数量的限制来自于人类记忆的局限性。超过某个临界点后，如果小说在较长的间隔中被分段阅读，就无法跟上，因为记忆会逐渐消退。增量阅读基于 SuperMemo，按定义来说，它受到你健忘记忆的限制要小得多。这个过程中的文章数量可以达到数十万，具备基本技能后，你不会感到困惑。

## 增量学习的复杂性

与经典的 SuperMemo 不同，增量学习在变得有效之前需要相当多的经验和训练。然而，一旦你熟练掌握这种方法，你的投资将会得到多倍的回报。

增量学习是近 30 年来开发的一系列技术的整合。它仍在成熟过程中，并且相当复杂。它需要几个月才能培养的技能。它需要您自己的策略，这些策略可能需要数年才能成熟。此外，增量学习需要掌握 SuperMemo，该软件已针对专业使用进行了优化。因此，它并不适合初学者。

用户抱怨 SuperMemo 的学习曲线很陡。他们说得对。SuperMemo 已经过优化，以便让专业用户的生活变得轻松。它让初学者的生活变得困难，因为它从不为了外观或市场价值而妥协学习效率。以 [优先队列](https://help.supermemo.org/wiki/Incremental_learning#Priority_queue) 为例。几乎每个人都在问，为什么最高价值的文章优先级为 0% 而不是显而易见的 100%。他们问：_"为什么 SuperMemo 总是把事情搞得颠倒？"_ 他们说得有道理。然而，没有专业用户会为了他的最高优先级材料而愿意将输入 1、2、3 的便利性换成 99、98 或 97。这些困境减缓了 SuperMemo 的普及。然而，一旦你成为专业用户，你会欣赏这种方法，并更有可能成为终身的忠实用户。

# 增量阅读

## 增量阅读简介

传统的线性阅读效率极低。这是因为文本的各个部分重要性不同。有些部分应该跳过，而其他部分则应该优先阅读。过时的书籍正迅速被超文本所取代。超文本将帮助你快速跳转到在任何给定时刻最重要的信息。超文本需要一种不同的写作风格。所有线性文本都假设读者熟悉前面的部分。这使得它们缺乏上下文。在超文本中，单独的文本变得独立于上下文，所有困难的术语和概念主要通过额外的超链接进行解释。正如网络帮助划分全球信息源一样，SuperMemo 可以帮助你重新组织你决定导入到 SuperMemo 的任何线性材料的阅读。在使用 SuperMemo 阅读时，你会将线性文本视为一系列分为段落和单独句子的部分。SuperMemo 将帮助你为每个部分、段落或句子提供独立的处理。

## 什么是增量阅读？

增量阅读是一种学习技巧，使得可以同时[阅读数千篇文章](https://help.supermemo.org/wiki/Incremental_learning#Can_you_really_read_thousands_of_articles_at_the_same_time?)而不会迷失。增量阅读从从电子来源（例如互联网）导入文章开始。学生随后提取各个文章中最重要的片段以便进一步复习。提取的片段随后被转换为问题和答案。这些问题和答案又成为系统复习和重复的对象，以最大化长期记忆。复习过程由经过验证的_[间隔重复算法](http://super-memory.com/english/ol/background.htm)_处理，该算法被称为 [**SuperMemo 方法**](https://help.supermemo.org/wiki/SuperMemo "SuperMemo") 。

**增量阅读将电子文章转化为你记忆中持久的知识。** 这种转化只需最少的键盘和鼠标操作：

- **输入** : 电子文章（例如，从网络收集的）
- **输出** : 记忆良好的知识（以问答的形式定期测试）

在增量阅读中，您以小部分的方式阅读文章。在阅读完一篇文章的一部分后，您会继续阅读另一篇文章的一部分，依此类推。您将所有重要的文本部分引入 SuperMemo 的学习过程中。这样，即使您几个月后再回到阅读，也不必担心忘记文章的主线。您对单个文章的进展可能较慢，但通过减少对不太重要文章的关注，您可以在更有益于您知识的文章上花费更多时间，从而大大提高效率。困难的文章可以等到您阅读更简单的解释性文章后再进行等。最后但同样重要的是，增量阅读提高了您的效率，因为它很有趣！您永远不会感到无聊。如果您不喜欢一篇文章，您只需阅读一句话，然后跳到其他文章。这样，您的注意力和专注力保持在最大化状态。

**警告！** 增量阅读起初可能看起来很复杂。然而，一旦你掌握了它，你将开始一个超出你预期的学习过程。你会惊讶于你的记忆能够处理和保留的数据量！请查看这个 [YouTube 上的简单演示](https://www.youtube.com/watch?v=DoQoeK53bP8) 。

## 增量阅读的五项基本技能

增量阅读需要在数月和数年的使用中不断完善的技能。这个概述将帮助你掌握基本技能，并帮助你开始增量阅读。五项基本技能是：

- 将文章[导入](https://help.supermemo.org/wiki/Incremental_learning#Skill_1:_Importing_articles)到 [SuperMemo](https://help.supermemo.org/wiki/SuperMemo "SuperMemo")
- [阅读文章](https://help.supermemo.org/wiki/Incremental_learning#Skill_2:_Reading_articles)并将文章分解为可管理的部分
- [将最重要的知识转化为问答材料](https://help.supermemo.org/wiki/Incremental_learning#Skill_3:_Extracting_fragments,_questions_and_answers)
- [对材料的回顾](https://help.supermemo.org/wiki/Incremental_learning#Skill_4:_Repetition_and_review) 以确保良好的回忆
- [处理不可避免的信息溢出](https://help.supermemo.org/wiki/Incremental_learning#Skill_5:_Handling_large_volumes_of_knowledge)

### 技能 1：导入文章

#### 五种文章导入方法

最初，您可以将导入限制为简单地复制和粘贴单个文章。后来，您会希望掌握从网络自动导入的功能，这样可以带来许多优势。

以下是 SuperMemo 中的 5 种主要文章导入方法：

- **[复制和粘贴](https://help.supermemo.org/wiki/Incremental_learning#Import_by_Copy&Paste)** : 在浏览器中选择一篇文章的文本（或任何其他允许复制文本的应用程序），将其复制到剪贴板，然后通过一个按键将其复制到 SuperMemo 中：_Ctrl+N_
- **[批量导入](https://help.supermemo.org/wiki/Incremental_learning#Import_of_multiple_articles)** : 使用专用的 [网页导入选项](https://help.supermemo.org/wiki/Web_import "Web import") 从支持的浏览器导入多个文章。此方法可以避免重复导入，用 [引用](https://help.supermemo.org/wiki/References "References") 标记您的导入，仅导入选定的文本部分，并提供许多其他优势。
- **[专用导入](https://help.supermemo.org/wiki/Incremental_learning#dedicated_imports)** : SuperMemo 使从 [维基百科](https://en.wikipedia.org/) （推荐的基础增量阅读材料来源）和 [YouTube](https://youtube.com/)（增量视频材料来源）导入材料变得特别简单
- **[本地文件导入](https://help.supermemo.org/wiki/Incremental_learning#Importing_articles_from_local_files)** : 导入您已经在硬盘上收集的文件
- **[邮件导入](https://help.supermemo.org/wiki/Incremental_mail_processing#Importing_mail_to_SuperMemo "Incremental mail processing")** : 用于增量处理您的邮件

##### 通过复制和粘贴导入

要通过复制和粘贴导入文章，请按照以下步骤操作：

- 在您的网页浏览器中选择导入的文本，并将选定内容复制到剪贴板（例如，使用 _Ctrl+C_）
- 切换到 SuperMemo（例如使用 _Alt+Tab_）
- 在 SuperMemo 中，按 _Ctrl+N_（这相当于在 [主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu") 上选择 **[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [添加新文章](https://help.supermemo.org/wiki/Edit_menu#Add_a_new_article "Edit menu")** ）。SuperMemo 将创建一个新的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，并粘贴文章。您还可以使用 **粘贴文章** 按钮 (  [![SuperMemo: Paste article (from the clipboard) button on the learnbar](https://help.supermemo.org/images/a/a1/Paste_button.gif)](https://help.supermemo.org/wiki/File:Paste_button.gif "SuperMemo: Paste article (from the clipboard) button on the learnbar")) 在 [**阅读** 工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar") 上。
- 可选地，使用 _Alt+P_ 来定义导入文章的 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。使用 **百分比** 字段，并记住 `0%` 是最高的 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，而 `100%` 是最低的 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。
- 可选地，使用 _Ctrl+J_ 来指定第一次复习 [间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") 。例如：高优先级材料为一天，低优先级材料为三十天。

请记住，如果您在 Internet Explorer 中打开了许多文章，您可以通过下一节中描述的 [网页导入](https://help.supermemo.org/wiki/Web_import "Web import") 功能最轻松地导入它们。

##### 多个文章的导入

将学习材料导入 [SuperMemo](https://help.supermemo.org/wiki/SuperMemo "SuperMemo") 的最便捷方式是直接从网络导入多个页面。要同时导入多个页面，(1) 在[网络浏览器](https://help.supermemo.org/wiki/Web_browser "Web browser")中打开它们，然后 (2) 点击[学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar")上的**导入**按钮（或按 _Shift+F8_，或在[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")中选择**[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [网页导入](https://help.supermemo.org/wiki/Web_import "Web import")** ）。为了避免导入广告和其他无用信息，在网络浏览器中选择要导入的文本部分或选择**解析**选项。如果在导入之前选择文本，您就不太可能需要过滤器来去除麻烦的 HTML（可以通过按 _F6_ 在导入的文章中获得）。如果您的浏览器不受支持，您需要使用[复制和粘贴方法](https://help.supermemo.org/wiki/Incremental_learning#Import_by_Copy&Paste) ，或在[受支持的网络浏览器](https://help.supermemo.org/wiki/Web_browser "Web browser") （例如 Microsoft Edge）中重新打开所选文章。

有关从网络导入材料的更多详细信息，请参见： [网络导入](https://help.supermemo.org/wiki/Web_import "Web import")

##### 专用导入 （维基百科、YouTube 和图片）

最受欢迎的学习材料来源是[维基百科](https://en.wikipedia.org/) （用于增量阅读）和[优酷](https://youtube.com/) （用于[增量视频](https://help.supermemo.org/wiki/Glossary:Incremental_video "Glossary:Incremental video") ）。您可以通过[**网页导入**对话框](https://help.supermemo.org/wiki/Web_import "Web import")顶部的**来源**工具栏选项快速选择这些来源（以及其他来源）。此外，专用过滤器将最佳准备导入的页面，以便于学习。

[![SuperMemo: A topic with an article about the greenhouse effect imported from Wikipedia](https://help.supermemo.org/images/thumb/d/d4/Incremental_reading_Topic.jpg/800px-Incremental_reading_Topic.jpg)](https://help.supermemo.org/wiki/File:Incremental_reading_Topic.jpg "SuperMemo: A topic with an article about the greenhouse effect imported from Wikipedia")

> _**图：** 在从[维基百科](https://www.wikipedia.org/)导入一篇关于[温室效应](https://en.wikipedia.org/wiki/Greenhouse_effect)的文章后（例如，通过**[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [网页导入](https://help.supermemo.org/wiki/Web_import "Web import")** （Shift+F8）），其全部文本被存储在一个单一的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")中。_

如果您想导入图片，您还可以使用一个图片快速选择按钮，该按钮将忽略在支持的[网页浏览器](https://help.supermemo.org/wiki/Web_browser "Web browser")中打开的所有非图片页面。在导入页面时（使用 _Shift+F8_），请在[**网页导入**对话框](https://help.supermemo.org/wiki/Web_import "Web import")中点击**来源 : 图片** 。

有关更多详细信息，请参见： **[网页导入](https://help.supermemo.org/wiki/Web_import "Web import")**

##### 从本地文件导入文章

如果您想从存储在本地驱动器上的文件中导入文章，可以使用以下方法：

- **从 Internet Explorer 中的单个文章到一个新的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")**
    1. 在 Internet Explorer 中打开本地文章
    2. 以与从网络导入文章相同的方式导入（例如， [复制和粘贴导入](https://help.supermemo.org/wiki/Incremental_learning#Import_by_Copy&Paste)或[多个文章的导入](https://help.supermemo.org/wiki/Incremental_learning#Import_of_multiple_articles) ）
- **将单个文章插入现有的 [HTML 组件](https://help.supermemo.org/wiki/HTML_component "HTML component")**
    1. 选择 **[文件](https://help.supermemo.org/wiki/Component_menu#File "Component menu")  : 导入文件** 在 HTML [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") 上
- **多个文章（存储在一个文件夹中）**
    1. 使用 **[文件](https://help.supermemo.org/wiki/File_menu "File menu")  : [导入](https://help.supermemo.org/wiki/File_menu#Import "File menu")  : 文件和文件夹**
    2. 指向包含文章的文件夹（确保该文件夹或其子文件夹中没有其他文件，否则它们也会被导入到 SuperMemo 中）

### 技能 2：阅读文章

这是一个简化的阅读文章的算法：

1. **选择一篇文章** ：按照[之前的说明](https://help.supermemo.org/wiki/Incremental_learning#Skill_1:_Importing_articles)导入一篇文章，或通过**[学习](https://help.supermemo.org/wiki/Learn "Learn")** （_Ctrl+L_）调出之前导入的文章。 **[学习](https://help.supermemo.org/wiki/Learn "Learn")**将仅显示过去导入的文章。如果您导入了一篇文章，并希望在同一天的学习过程中稍后显示它，您必须将其放入[待处理队列](https://help.supermemo.org/wiki/Glossary:Outstanding_queue "Glossary:Outstanding queue") （例如，在[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")上选择**[学习](https://help.supermemo.org/wiki/Element_menu#Learning "Element menu")  ：今天稍后** ，_Ctrl+Shift+J_ 等）。如果您导入了多篇希望在同一天处理的文章，您必须将它们全部放入[待处理队列](https://help.supermemo.org/wiki/Glossary:Outstanding_queue "Glossary:Outstanding queue") 。例如，在[浏览器](https://help.supermemo.org/wiki/Browser "Browser")中打开文章，并选择**[学习](https://help.supermemo.org/wiki/Subset_operations#Learning "Subset operations")  ：全部添加到待处理** （或使用[浏览器工具栏](https://help.supermemo.org/wiki/Browser_toolbar "Browser toolbar")上的**添加到待处理**图标）。大多数时候，您可以完全依赖**[学习](https://help.supermemo.org/wiki/Learn "Learn")**来优化文章的复习安排。
2. **点击文章**以进入[编辑模式](https://help.supermemo.org/wiki/Glossary:Editing_mode "Glossary:Editing mode") ，在该模式下您可以修改文本、选择片段等。可选地，如果文本难以处理（例如，选择困难， [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")未正确标记等），请使用过滤器（_F6_）。
3. **从顶部**开始阅读文章或从最后一个[阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point")开始
4. **提取文本** ：如果您在文章中遇到有趣的文本，请选择它并在[学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar")上选择**[记住提取](https://help.supermemo.org/wiki/Learnbar#Extract "Learnbar")** （或按 _Alt+X_）。此操作将把提取的片段作为独立的小文章引入学习过程。如果您想指定新[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，请选择**[阅读](https://help.supermemo.org/wiki/Component_menu#Reading "Component menu")  ：安排提取** （  [![Reading : Schedule extract, available on the Read toolbar, enables you to specify the priority of a text fragment being extracted](https://help.supermemo.org/images/f/fe/Schedule_extract.png)](https://help.supermemo.org/wiki/File:Schedule_extract.png "Reading : Schedule extract, available on the Read toolbar, enables you to specify the priority of a text fragment being extracted")）而不是**记住提取** 。此外，如果您觉得文章难度较大，并希望稍后阅读某些片段，请使用**[阅读](https://help.supermemo.org/wiki/Component_menu#Reading "Component menu")  ：安排提取**提取这些片段，并提供一个回顾[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") ，以反映您认为自己将更好地理解提取片段的时间。
5. 可选地使用 **光标前删除** (_Alt+\_)。这将删除您已阅读的文本，清理文章，去除垃圾，并帮助处理难以处理的 HTML。
6. 可选地，如果您阅读到一个看似不重要的片段，可以选择它（例如，用鼠标）并删除它（例如，使用 _Del_ 键）或用 ignore 样式标记它。要将文本标记为 ignore，请在 [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") 上选择 **[阅读](https://help.supermemo.org/wiki/Component_menu#Reading "Component menu")  : 忽略** ，点击 [**阅读** 工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar") 上的 **忽略文本** 按钮 (  [![Reading : Ignore makes it possible for you to mark an unimportant fragment with the ignore style](https://help.supermemo.org/images/7/75/Ignore.png)](https://help.supermemo.org/wiki/File:Ignore.png "Reading : Ignore makes it possible for you to mark an unimportant fragment with the ignore style"))，或者直接按 _Ctrl+Shift+I_。
7. 可选地，如果所选片段未包含所有重要的阅读上下文，您可以手动添加这些上下文。例如，如果您正在学习历史，您可能会从一篇关于林肯的文章中提取以下片段：_1862 年 9 月 22 日，林肯总统发布了《解放宣言》，这是世界历史上最重要的信息之一。他于 1863 年 1 月 1 日签署了它。_ 如果您想提取与签署《解放宣言》相关的片段，您需要将_他_改为_林肯_ ，将_它_改为 _《解放宣言》_，以便您的独立片段易于理解： _林肯于 1863 年 1 月 1 日签署了《解放宣言》。_ 您可以使用**[参考](https://help.supermemo.org/wiki/Component_menu#Reference "Component menu")**选项在[组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu")上轻松地为您的[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")添加上下文（见： [参考文献](https://help.supermemo.org/wiki/Incremental_learning#Adding_references) ）。通过**[参考](https://help.supermemo.org/wiki/Component_menu#Reference "Component menu")**添加的上下文将自动添加到给定文章的所有[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")中。 例如，选择您希望作为所有[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")参考标题的文本，然后在 HTML [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu")中选择**[参考](https://help.supermemo.org/wiki/Component_menu#Reference "Component menu")  : 标题** （或按 _Alt+T_）。该文本将出现在所有[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")的底部（默认以参考粉色字体显示）。
8. 可选地，标记您的最后一个[阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point") ：一旦您决定在文章结束前停止阅读，请将最后处理的片段标记为[阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point") （例如，使用 _Ctrl+F7_ 或从 HTML [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu")中选择**[阅读](https://help.supermemo.org/wiki/Component_menu#Reading "Component menu")  : [阅读点](https://help.supermemo.org/wiki/Component_menu#Read-points "Component menu")  : 设置阅读点** ）。下次您返回到这篇文章时，SuperMemo 将突出显示您的[阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point") ，您将能够从上次停止阅读的地方继续阅读。要前往您当前的[阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point") ，请按 _Alt+F7_。如果您忘记设置[阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point") ，SuperMemo 将在您最后一个[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")或最后一个高亮的地方留下一个[阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point") 。
9. **前往下一篇文章** ：在您阅读完一篇文章的部分内容后，选择 **[学习](https://help.supermemo.org/wiki/Learn "Learn")** 或 **下一次重复** 以继续阅读其他文章。这些按钮位于 [元素窗口](https://help.supermemo.org/wiki/Element_window "Element window") 的底部。您也可以使用 _Enter_，只要文本中的选择不为空（例如，标记为 [阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point") ），或者您已经退出了 [编辑模式](https://help.supermemo.org/wiki/Glossary:Editing_mode "Glossary:Editing mode") （例如，按 _Esc_）。如果没有选择任何文本，_Enter_ 将在文本中添加新行（这与标准文本编辑器的情况相同）。
10. 可选地，确定下一个复习日期（例如，使用 _Ctrl+Shift+R_），或为文章设置新的 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") （例如，使用 _Alt+P_）。
11. **在增量阅读中，中断阅读是一条规则，而不是例外！** 经过一段时间的练习，你会很快习惯这种不太自然的状态，并学会欣赏增量方法的力量。 [中断的主要作用是防止阅读质量的下降](https://help.supermemo.org/wiki/Incremental_learning#The_value_of_interruption_in_learning) 。使用以下标准来决定何时停止阅读文章：
    - **时间不足** ：如果你在某一天还有很多文章需要复习，而时间又不够了，就要缩短你的学习增量。经过一段时间，匆忙将成为常态，你会倾向于只阅读每篇文章的 1-2 段，并仅深入研究那些对你的知识有重大影响的开创性文章。
    - **无聊** ：如果这篇文章让你感到无聊，停止阅读。你的注意力始终是有限的。如果你的专注力不佳，稍作休息后再回到文章中，你会获得更多的收益。继续阅读一些你还没有感到厌倦的内容。如果 SuperMemo 将下次复习安排在你认为太晚的日期，可以使用 _Ctrl+J_ 或 _Shift+Ctrl+R_ 来调整下次复习日期。
    - **缺乏理解** : 如果你觉得在理解文章之前需要更多知识，可以推迟阅读（例如，使用 _Ctrl+J_ 或 _Shift+Ctrl+R_ 并在大约 100 天后安排下次复习）。如果你相信自己已经导入了相关的解释性知识文章，可以搜索这些文章（例如，使用 _Ctrl+F_）。一旦找到它们，你可以 (1) 执行 [子集复习](https://help.supermemo.org/wiki/Subset_review "Subset review") ，或 (2) 将文章添加到 [待处理队列](https://help.supermemo.org/wiki/Glossary:Outstanding_queue "Glossary:Outstanding queue") ，以便在同一天阅读，或 (3) 提前阅读这些文章（例如，在 [浏览器](https://help.supermemo.org/wiki/Browser "Browser") 中，你可以执行: **[学习](https://help.supermemo.org/wiki/Subset_operations#Learning "Subset operations")  : 复习所有** ，或 **[学习](https://help.supermemo.org/wiki/Subset_operations#Learning "Subset operations")  : 添加到待处理** ，或 **[提前](https://help.supermemo.org/wiki/Subset_operations#Advance "Subset operations")  : 主题** ）。如果你还没有导入任何解释性文章，可以现在进行（例如，搜索网络并 [导入文章](https://help.supermemo.org/wiki/Incremental_learning#Skill_1:_Importing_articles) ，如前所述）。请注意，你可以在 SuperMemo 中选择一段文本，并使用 _Ctrl+F3_ 搜索百科全书或字典，以获取有关特定主题的更多材料。
    - **低优先级** : 以较小的部分阅读低优先级文章，从而减少对低优先级主题的整体时间分配。
    - **过载** : 如果你有一长串文章需要阅读，你自然会分成小部分来阅读
12. 一旦您完成阅读整篇文章并提取了所有有趣的片段，请在[学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar")上选择 **[完成！](https://help.supermemo.org/wiki/Learnbar#Done! "Learnbar")** (  [![Learning : Done will remove the article from the review process, and delete its contents (without deleting the extracted material](https://help.supermemo.org/images/0/01/Done%21.png)](https://help.supermemo.org/wiki/File:Done!.png "Learning : Done will remove the article from the review process, and delete its contents (without deleting the extracted material"))。您也可以按 _Shift+Ctrl+Enter_，在[指挥官](https://help.supermemo.org/wiki/SuperMemo_Commander "SuperMemo Commander")中选择 **完成！**，或在[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")中选择 **[学习](https://help.supermemo.org/wiki/Element_menu#Learning "Element menu")  : 完成** 。 **完成！** 将 [关闭](https://help.supermemo.org/wiki/Glossary:Dismiss "Glossary:Dismiss") 文章并删除其内容（不删除提取的材料）。 **完成** 将删除一个没有子项的文章（即没有提供任何有趣的[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")的文章）。使用 **完成** 将大大减少您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")的大小，并在[搜索](https://help.supermemo.org/wiki/Find_elements "Find elements")文本时消除“死命中”。

[![SuperMemo: The Read toolbar at the bottom of the element window. It features options used in incremental reading](https://help.supermemo.org/images/thumb/5/5b/Read_toolbar.jpg/800px-Read_toolbar.jpg)](https://help.supermemo.org/wiki/File:Read_toolbar.jpg "SuperMemo: The Read toolbar at the bottom of the element window. It features options used in incremental reading")

> _**图：** [**阅读** 工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar") 位于 [元素窗口](https://help.supermemo.org/wiki/Element_window "Element window") 的底部。它包含在 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 中使用的选项。_

### 技能 3：提取片段、问题和答案

#### 提取文本

在传统阅读过程中，我们常常用荧光笔标记重要段落。在 SuperMemo 中，这些段落可以提取为单独的小文章，稍后用于刷新记忆。每个提取的段落或部分都成为一个新的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，将遵循与原始文章相同的阅读算法。使用 **[提取](https://help.supermemo.org/wiki/Extract "Extract")** (  [![SuperMemo: Extract button on the learnbar in the element window](https://help.supermemo.org/images/8/80/Extract_button.png)](https://help.supermemo.org/wiki/File:Extract_button.png "SuperMemo: Extract button on the learnbar in the element window")) 提取重要片段和单句。您可以使用 _Alt+X_、在 [学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar") 上点击 **提取** ，或在 [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") 上选择 **阅读 : 记住提取** 。

#### 添加引用

在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，您始终需要快速恢复问题或文本的上下文。快速恢复上下文的最简单方法是通过[引用](https://help.supermemo.org/wiki/References "References") 。引用在您生成[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")和[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")时，从[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")传播到元素。通过将所有从给定文本生成的[子元素](https://help.supermemo.org/wiki/Glossary:Child "Glossary:Child")标记为引用，您将不必担心丢失问题的上下文。当您从网络导入时，引用会自动添加。您也可以逐字段手动定义它们。示例引用在下图中以粉色显示。有关详细信息，请参见： [引用](https://help.supermemo.org/wiki/References "References") 。

[![SuperMemo: An extract produced from an article about the greenhouse effect (references (in pink) at the bottom are added automatically)](https://help.supermemo.org/images/thumb/f/f5/Incremental_reading_Extract.jpg/800px-Incremental_reading_Extract.jpg)](https://help.supermemo.org/wiki/File:Incremental_reading_Extract.jpg "SuperMemo: An extract produced from an article about the greenhouse effect (references (in pink) at the bottom are added automatically)")

> _**图** : [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的典型快照。在学习温室效应时，学生提取了这样一个片段：“在没有温室效应和大气的情况下，地球的平均表面温度为 14 °C (57 °F)可能低至-18 °C (-0.4 °F)，这是地球的黑体温度。”提取的片段将继承右侧的插图以及文章引用。学生可以通过按下 Enter 键继续阅读另一篇文章。右侧的图片存储在本地的图像[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中（在用户的硬盘上），可以重复用于说明其他文章或问题。_

#### 填空：生成问题

SuperMemo 会向你展示，提取重要片段并在稍后时间进行复习将对你的记忆能力产生极好的影响。然而，它也会显示，一旦复习之间的时间超过 200-300 天，阅读和重读（ [被动复习](https://help.supermemo.org/wiki/Glossary:Passive_review "Glossary:Passive review") ）往往会导致记忆不足。因此，迟早你需要将你的文本转换为具体的问题。为此，你将使用**填空删除** 。

填空删除是一个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ，它使用省略号([...])来替代句子的一部分。

例如：

> _问题：塞拉利昂的首都是[...]  
> _**答案** : 弗里敦

在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中， [填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")是从具有句子或简单段落形式的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")中生成的。

要创建一个[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，请执行以下操作：

1. 确保一个 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 仅包含一个简短的句子（例如 _塞拉利昂的首都是弗里敦_ ）
2. 在该句中选择一个重要的关键词（例如 _Freetown_）
3. 执行以下操作之一：
    - 点击 **Cloze** 按钮 (  [![Reading : Remember cloze uses the currently selected text to create a cloze deletion and memorize it](https://help.supermemo.org/images/3/35/Remember_cloze.gif)](https://help.supermemo.org/wiki/File:Remember_cloze.gif "Reading : Remember cloze uses the currently selected text to create a cloze deletion and memorize it")) 在 [**阅读** 工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar") ，或者
    - 按 _Alt+Z_，或
    - 从 HTML [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu")中选择 **[阅读](https://help.supermemo.org/wiki/Component_menu#Reading "Component menu")  : 记忆填空** 。

**记忆填空**将一个句子转换为一个特定的问题和答案。通过使用填空，你将从 [被动复习](https://help.supermemo.org/wiki/Glossary:Passive_review "Glossary:Passive review") 转变为 [主动回忆](https://help.supermemo.org/wiki/Glossary:Active_recall "Glossary:Active recall") 。你不需要等到一个段落或句子变得难以回忆时才进行 [被动复习](https://help.supermemo.org/wiki/Glossary:Passive_review "Glossary:Passive review") 。对于你最重要的材料，你可以在找到需要好好记住的信息后立即创建 [填空项目](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 。

下面的例子展示了如何有效地使用 **记忆填空** 。

[![Two numbers from the extracted sentence are used as keywords for generating questions and answers (temperatures of 14 °C and -18 °C)](https://help.supermemo.org/images/thumb/d/d9/Incremental_reading_Extract2.jpg/800px-Incremental_reading_Extract2.jpg)](https://help.supermemo.org/wiki/File:Incremental_reading_Extract2.jpg "Two numbers from the extracted sentence are used as keywords for generating questions and answers (temperatures of 14 °C and -18 °C)")

> _**图** : 从提取的句子中得到的两个数字被用作生成问题和答案的关键词（14 °C 和 -18 °C 的温度）_

[![A question-answer item (in the form of a cloze deletion) forming the final product of incremental reading used in strengthening the memory of a given fact (here: hypothetical temperature on Earth devoid of atmosphere)](https://help.supermemo.org/images/thumb/c/cd/Incremental_reading_Cloze_deletion.jpg/800px-Incremental_reading_Cloze_deletion.jpg)](https://help.supermemo.org/wiki/File:Incremental_reading_Cloze_deletion.jpg "A question-answer item (in the form of a cloze deletion) forming the final product of incremental reading used in strengthening the memory of a given fact (here: hypothetical temperature on Earth devoid of atmosphere)")

> _**图** : 在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")过程中提取的句子（见前面的图片）被转换为[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 。（即形成增量阅读最终产品的问题-答案对，用于加强对特定事实的记忆（这里是：假设的没有大气的地球温度））。右侧保留了原始[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")的图片。问题底部的粉色文本是从[维基百科](https://en.wikipedia.org/)导入文章时自动生成的参考。_

当你点击 **Cloze** 时，你将看不到新生成的 [cloze](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")。只有选定的关键词会改变颜色。这将加快你的工作速度。然而，如果你想立即编辑新创建的 [cloze deletion](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")，请在 [导航栏](https://help.supermemo.org/wiki/Navigation_bar "Navigation bar") 上选择 **返回** 按钮 (  [![Back enables you to go back to the most recently visited element](https://help.supermemo.org/images/f/f8/Back.gif)](https://help.supermemo.org/wiki/File:Back.gif "Back enables you to go back to the most recently visited element")) 或按 _Alt+左箭头_ 。这将使你能够添加上下文线索、缩短文本、改善措辞等。

#### 简化问题

在将[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")转换为问题和答案时，您应该确保您的问题简单、清晰，并且包含相关的上下文。例如，如果您从关于互联网历史的阅读中提取了以下片段：

> _互联网始于 1969 年，由高级研究计划局（ARPA）签订的合同启动，连接了位于美国西南部的四台主要大学计算机（加州大学洛杉矶分校、斯坦福研究所、加州大学圣巴巴拉分校和犹他大学）_

你可能会发现，当复习[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")变得足够长时，你可能实际上无法回忆起 ARPA 机构的名称，甚至忘记互联网开始的年份。然后你可以选择一个重要的关键词，例如 _1969_，并使用**记住填空**来生成以下问答对：

> _**问题** : 互联网是在 [...] 的情况下启动的，该合同由高级研究计划局（ARPA）签订，连接了位于美国西南部的四所大学的主要计算机（加州大学洛杉矶分校、斯坦福研究所、加州大学圣巴巴拉分校和犹他大学）  
> _**答案** : 1969

在学习过程中，您需要通过手动编辑将上述[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")润色为更简洁易懂的形式：

> _**问题** : 互联网是在 [...](年份) 根据 ARPA 机构签订的合同启动的  
> _**答案** : 1969

或者更好的是：

> _问题：互联网始于[...]（年份）  
> _
> 
> **答案** : 1969

至于在编辑过程中“丢失”的宝贵信息，可以（但不必）通过**记忆填空**生成的独立问题进行学习。

上述对问题的微调为新创建的问题-答案对带来了以下好处：

1. **问题的更清晰目的** ：通过使用红色的 _(年份)_ 提示，强调了这个问题是关于互联网开始的年份。
2. **简洁性** : 通过去除多余的信息，您将不会浪费时间在不太可能被记住的信息上（只有主动回忆的材料才能被记住多年）。您将回答问题，而不会关注早期互联网最初连接的大学。如果您认为这些信息也很重要，您将使用原始的 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 来生成更多仅关注相关大学的 [填空项](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，通过在答案字段中命名它们（如果您不同意，请阅读: [知识表述的 20 条规则](http://super-memory.com/articles/20rules.htm) ）。
3. **可理解性** : _"ARPA 机构"_ 这个短语可能违背了你在小学学到的语法规则，但它比单纯的 _ARPA_ 更容易理解。在 SuperMemo 中，可理解性比死板的语法或拼写规则更为重要！

### 技能 4：重复和复习

[SuperMemo 基于重复](https://help.supermemo.org/wiki/Introduction "Introduction") 。您将不时复习所学的材料，以确保防止遗忘。

如果您之前从未尝试过 SuperMemo，您需要掌握标准重复的使用方法，如[这里](https://help.supermemo.org/wiki/Introduction "Introduction")所述。

在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，您的复习将基于与经典 SuperMemo 相似的原则。主要区别是：

- 学习过程将新文章的阅读与复习你的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")交替进行
- 你的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")主要将以[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的形式出现，即句子中通过缺失部分提出问题 [...]（例如：离太阳最近的行星是 [...]）
- 由于整个学习过程是渐进的，您的[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")通常会以未完成的形式出现

逐步处理的文章将定期进行复习/阅读。当您在一段时间后重新开始阅读一篇文章时，您将进入新的部分，将新获得的智慧提取到单独的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")中，使用 _Alt+X_（即**记住提取** ）。通常，您会使用**光标前删除** （_Alt+\_）删除处理过的文章的残余部分。

决定（1）问答材料重复和（2）阅读材料复习时机的算法是类似但不完全相同的。最重要的是，所有的重复和文章展示默认情况下都发生在逐渐增加的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")中。在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，您将看到新的文章不断流入您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 。未处理的材料需要与新导入的材料竞争。增加的复习[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")确保您的旧材料如果没有及时处理，会逐渐降低优先级。处理的速度将取决于您时间的可用性和材料本身的价值。那些无聊、写得差、对您的工作或成长不太重要的文章，将获得较少的关注，可能在您甚至还没能通过一小部分文本之前，就进入较长的复习[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") 。这是大量新信息流入您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")和记忆的不可避免的副作用。然而， [间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")和[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")可以很容易地进行调整。 如果您的优先级发生变化，您可以修改处理重要文章的方式。在复习时，您可以选择不间断地阅读整篇文章，或者在较短的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")内将其带回进行复习。您可以手动更改其[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") （例如，使用 _Alt+P_）。您还可以使用搜索工具（例如 _Ctrl+F_）来查找更多您觉得被忽视的相关文章。您可以通过更改它们的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")来重新排序一组文章。您可以缩短文章的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") ，或者在需要时对它们进行全面复习（参见： [子集复习](https://help.supermemo.org/wiki/Subset_review "Subset review") ）。

复习问题和答案的算法（例如[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ）相当复杂，并限制了你对重复时间的影响（参见：[SuperMemo 算法](https://supermemo.guru/wiki/SuperMemo_Algorithm) ）。这样做是为了确保你能够达到较高的知识[保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")水平，而这可能会因手动干预而受到影响。然而，确定[复习间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")的算法对于[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")来说要简单得多，完全由你控制。每篇文章都有一个特定的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。优先级决定了哪些文章会优先复习，哪些可以在你时间不足的情况下推迟复习。每篇文章还会被分配一个称为 [A 因子](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor")的数字，决定了后续复习之间的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")增加多少。例如，如果 [A 因子](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor")为 2，则每次复习的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")将翻倍。 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")和 [A 因子](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor")是自动设置的，但你可以随时手动更改它们。 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")和 [A 因子](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor")是根据文本的长度、处理方式、推迟或提前的方式以及许多其他因素，通过启发式方法确定和修改的。您可以通过按 _Alt+P_ 来更改文章的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")和 [A 因子](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor") 。您还可以使用 _Shift+Ctrl+上箭头_和 _Shift+Ctrl+下箭头_来增加或减少[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。请注意，与[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")相关的 [A 因子](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor")无法由用户更改，因为它们反映了项目难度，决定了最佳重复间隔的长度[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") （见： [遗忘指数](https://supermemo.guru/wiki/Forgetting_index_in_SuperMemo) ）。

您可以通过手动调整复习之间的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")来控制文章复习的时间。使用 _Ctrl+J_（ **重新安排** ）或 _Shift+Ctrl+R_（ **执行重复** ）来确定下次复习的日期。_Ctrl+J_ 将增加当前的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") ，而 _Shift+Ctrl+R_ 将首先执行一次[重复](https://help.supermemo.org/wiki/Glossary:Repetition "Glossary:Repetition") ，然后设置新的间隔。例如，如果您当前的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")是 100，并且您在**重新安排**中指定值为 3，则您的新重复日期将在 3 天后设置，最后的重复日期将不会改变（新的间隔将是 103）。如果您对**执行重复**做同样的操作，您的新[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")将是 3，最后的重复日期将设置为今天。换句话说， **重新安排**增加了[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") （也可以缩短间隔），而**执行重复**设置了间隔的长度（同时保留在学习过程中执行的重复的痕迹）。 请注意，在**下次重复**阶段执行的**重新安排** （_Ctrl+J_）将首先完成重复，并且将具有与**执行重复** （_Shift+Ctrl+R_）相同的效果。要在学习过程中延迟重复，请使用重复周期的任何早期阶段。

在一个负载过重的增量阅读过程中，您通常会希望在某一天专注于一个特定的主题（例如，在考试前）。为此，请了解这个无价的工具： [子集学习](https://help.supermemo.org/wiki/Subset_learning "Subset learning") 。

#### 摘要

- 使用 **[学习](https://help.supermemo.org/wiki/Learn "Learn")** 按钮来处理、学习和复习你所有的知识
- 对[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的复习由 [SuperMemo 算法](https://supermemo.guru/wiki/SuperMemo_Algorithm)处理。对你的项目进行良好的评分，合理地制定它们，并用诚实的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")标记它们。SuperMemo 会处理剩下的事情。
- 对[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") /文章的复习也会在逐渐增加的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")中进行，不过，您始终可以手动设置下一个日期，使用**执行重复** （_Shift+Ctrl+R_）。确保您将重要的文章标记为高[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。否则，它们可能会很快被遗忘。

### 技能 5：处理大量知识

在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，您可以快速导入和生成比您能有效处理的学习材料更多的内容。为了确保您能够迅速处理[过载](https://help.supermemo.org/wiki/Glossary:Overload "Glossary:Overload") ，SuperMemo 使用[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") 。

使用 _Alt+P_ （ **[优先级](https://help.supermemo.org/wiki/Element_menu#Priority "Element menu")  : 修改** 在 [元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu") 上），您可以将每个 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 的 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 设置为 0% 到 100%。请注意，0% 对应于高优先级！

默认情况下，未完成的重复将按优先级从高到低[自动排序](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort") 。这样，如果您未能完成每日学习任务，只有优先级较低的材料会受到影响。同样默认情况下，在您工作日的开始（即您第一次运行 SuperMemo 时），您前几天的未完成材料将被[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone") （再次强调，高优先级材料受到的影响最小）。

阅读一篇关于[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")的文章以了解更多信息：

1. 手动排序[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，
2. 定义排序标准，
3. 关闭 [自动排序](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort") 和 [自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone") ，以及更多功能。

有关处理过载的更多选项，请参见：

- [推迟对话框](https://help.supermemo.org/wiki/Postpone "Postpone") 用于推迟学习材料的部分内容并定义推迟标准
- [宽容](https://help.supermemo.org/wiki/Mercy "Mercy") 将学习材料的过量分散在一段时间内（或在假期之前提前学习材料等）
- 要了解更多不同的选项，请参见： [推迟、提前和宽恕](https://help.supermemo.org/wiki/Postpone,_Advance_and_Mercy "Postpone, Advance and Mercy")

## 其他基本技能

### 增量阅读中的知识演变

SuperMemo 知识演变的三个主要原则：

- **复杂性降低** - 文章将被转换为段落集合。段落将被拆解为独立句子和陈述的集合。句子将被缩短，以最大化信息与措辞的比率等。
- **[主动回忆](https://help.supermemo.org/wiki/Glossary:Active_recall "Glossary:Active recall")** - 所有信息最终将被转化为 **主动回忆** 材料，例如问答对、 [填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 、图片识别测试、声音识别测试等。这是为了最大化你对知识的回忆。
- **渐进主义** - 所有变化将会根据可用时间、所选材料的优先级以及记忆痕迹逐渐增强的程度逐步进行。SuperMemo 中学习的渐进特性将帮助您在最短时间内获得最大的记忆效果。参见： [学习中中断的价值](https://help.supermemo.org/wiki/Incremental_learning#The_value_of_interruption_in_learning)

### 使用图片

有关更多信息、记忆提示以及学习的乐趣，您在 SuperMemo 中逐步阅读的文章可以用其内容或其他来源的有意义图片进行说明。按 _Ctrl+F8_ 选择文章中嵌入的图片之一。

[![SuperMemo: A topic with an article about the greenhouse effect imported from Wikipedia](https://help.supermemo.org/images/thumb/d/d4/Incremental_reading_Topic.jpg/800px-Incremental_reading_Topic.jpg)](https://help.supermemo.org/wiki/File:Incremental_reading_Topic.jpg "SuperMemo: A topic with an article about the greenhouse effect imported from Wikipedia")

如果您恰好从[维基百科](https://en.wikipedia.org/)导入，SuperMemo 16 或更高版本可以用全分辨率的图像来展示文章及其所有[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")和[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，而不仅仅是缩略图。

[![SuperMemo: Download images dialog box makes it possible for you to get images embedded in local pages imported from the net and put them to the image registry](https://help.supermemo.org/images/thumb/5/58/Download_images.jpg/771px-Download_images.jpg)](https://help.supermemo.org/wiki/File:Download_images.jpg "SuperMemo: Download images dialog box makes it possible for you to get images embedded in local pages imported from the net and put them to the image registry")

> _**图：** **[下载图像](https://help.supermemo.org/wiki/Component_menu#Download_images "Component menu")** (Ctrl+F8) 使得可以下载在 [HTML 组件](https://help.supermemo.org/wiki/HTML_component "HTML component") 的 HTML 代码中提到的远程图像，并将其导入到图像 [注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry") 中。在图片中，正在下载来自 [维基百科](https://en.wikipedia.org/) 的 [唐纳德·特朗普](https://en.wikipedia.org/wiki/Donald_Trump) 文章的插图。最初，图像作为缩略图从浏览器渲染器中捕获。全尺寸图像则并行下载。34 张列出的图像中已有 5 张被下载（如标题所示），而另外 2 张仍在下载中（标记为 →，后面跟着当前下载进度，即 27.9% 和 38.2% 完成）。您可以用缩略图来说明 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，或者等待全图下载完成。在平均速度的连接下，图像通常下载速度快于您查看的速度。换句话说，与 SuperMemo 16 不同，您通常不需要等待图像下载。 **插入** 将插入图片以说明文章及其所有 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 和 [填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") （那些准备好插入的标记为 ✔）。 未插入的缩略图/图片将在所有包含相应图像的文本部分中提供下载。_

欲了解更多，请参见： [视觉学习](https://help.supermemo.org/wiki/Visual_learning "Visual learning")

### 主题与项目

在 SuperMemo 中，您会看到信息以两种基本形式呈现给您：

- **主题** : 这些通常是你想要阅读的较长文章
- **项目** ：这些通常是您需要回答的具体问题

[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")和[条目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")以不同的方式和在不同的时间呈现。 **[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")保存您想要学习的知识** （即您想要阅读的内容），而**[条目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")保存您想要记住的知识** （即您已经拥有但可能会忘记的知识）。

#### 主题

在 SuperMemo 中，主题是您想要学习的文章、其部分或一句话。主题也可以是图片、视频、音乐等形式。与[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")不同，主题并不测试您的知识。它们仅用于[被动阅读](https://help.supermemo.org/wiki/Glossary:Passive_review "Glossary:Passive review") 、观看或聆听。短文本主题用于生成[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 。主题参与增量学习过程。一旦它们被转换为[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ，通常会被[忽略](https://help.supermemo.org/wiki/Glossary:Dismiss "Glossary:Dismiss") （即在学习中被忽视）或[完成](https://help.supermemo.org/wiki/Element_menu#Done "Element menu") （即完全从学习过程中删除）。 **完成！** 和**忽略**都必须由用户执行（即它们不是自动的）。

##### 使用主题

主题在**[目录](https://help.supermemo.org/wiki/Contents "Contents")**中用绿色 T 图标标记（  [![A topic taking part in the learning process](https://help.supermemo.org/images/8/84/Topic_memorized.gif)](https://help.supermemo.org/wiki/File:Topic_memorized.gif "A topic taking part in the learning process")）。主题可以非常长（整篇文章）或非常短（单句）。这就是你如何处理主题的：

- 从顶部阅读主题
- 如果你发现一些有趣的信息，请提取它（例如，使用 _Alt+X_）；提取的内容将形成一个新的独立主题；这个新主题会更简短，并将以与所有其他主题相同的方式处理。
- 根据主题的优先级和可用时间决定你想深入阅读的程度（例如，如果你很着急，可以快速中断，或者如果主题非常重要，可以全部阅读）。
- 如果您完成了该主题的阅读，请执行 **完成！**（例如 _Ctrl+Shift+Enter_）；这将删除该主题，而不会删除它所产生的材料。
- 仅当主题短到只有一句话时，才创建[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") （例如使用 _Alt+Z_）
- 下次复习时返回阅读该主题

在较长的主题中，你**阅读并提取** ，在非常短的主题中，你**生成 [填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")** 。

#### 项目

SuperMemo 中的项目是你想要记住的一条知识。它通常以问答的形式存在。项目与[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")之间的主要区别在于，项目会主动测试你的记忆（例如，通过提问），而主题仅用于[被动复习](https://help.supermemo.org/wiki/Glossary:Passive_review "Glossary:Passive review") （例如，阅读、观看等）。

#### 概念

SuperMemo 17 引入了一种新的元素类型：概念（在 **[目录](https://help.supermemo.org/wiki/Contents "Contents")** 中用橙色灯泡图标表示 (  [![SuperMemo: A concept taking part in the learning process](https://help.supermemo.org/images/f/f6/Concept_memorized.gif)](https://help.supermemo.org/wiki/File:Concept_memorized.gif "SuperMemo: A concept taking part in the learning process"))). 这样的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 代表一个重要的想法或主题。多个 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 和 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") （甚至 [任务](https://help.supermemo.org/wiki/Glossary:Task "Glossary:Task") ）可以与一个概念关联。这个链接将它们与概念所代表的想法/主题关联起来。基于概念的链接网络称为 **概念图** 。它为 [扩散激活](https://help.supermemo.org/wiki/Glossary:Spreading_activation "Glossary:Spreading activation") 提供了框架，而扩散激活是 [神经复习](https://help.supermemo.org/wiki/Glossary:Neural_review "Glossary:Neural review") 的基础。

#### 任务

除了[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 、 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")和[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") ，您还可以在增量学习中使用任务。任务是按价值/时间或价值/价格比率排序的工作。

有关[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 、 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 、 [概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")和[任务](https://help.supermemo.org/wiki/Glossary:Task "Glossary:Task")在 SuperMemo 中的详细比较，请参见：[SuperMemo 中的元素类型](https://help.supermemo.org/wiki/Items,_topics,_concepts,_and_tasks "Items, topics, concepts, and tasks") 。

### 阅读过载

_过载_发生在学生需要复习的[未完成](https://help.supermemo.org/wiki/Glossary:Outstanding_material "Glossary:Outstanding material")[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")或[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")超过他（她）能够处理的数量时。很少有用户能够每天维持超过 200 次的项目重复。当[**统计**窗口](https://help.supermemo.org/wiki/Statistics "Statistics")中的**[未完成](https://help.supermemo.org/wiki/Statistics#Outstanding "Statistics")**参数开始超过这个数字时， _过载_很可能会发生。

过载可以通过 **[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone")** 来最好地处理。然而，一次性的大负荷可以通过 **[推迟](https://help.supermemo.org/wiki/Postpone "Postpone")** （延迟所有 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ）或 **[宽容](https://help.supermemo.org/wiki/Mercy "Mercy")** （将所有复习分散到时间中）有效解决。

您还可以使用以下方法推迟特定的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")及其所有[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")

1. 前往相关的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")
2. 按 _Ctrl+Space_ 打开 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 、其 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 和 [填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 在 [浏览器](https://help.supermemo.org/wiki/Browser "Browser") 中
3. 选择 **[处理浏览器>](https://help.supermemo.org/wiki/Subset_operations "Subset operations") : [推迟](https://help.supermemo.org/wiki/Postpone "Postpone")** 在 [浏览器菜单](https://help.supermemo.org/wiki/Browser_menu "Browser menu") 上

请注意，如果您已将学习材料的部分内容移动到其他[分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch") ，您可能需要在[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")中使用**[学习](https://help.supermemo.org/wiki/Element_menu#Learning "Element menu")  : 定位摘录** 。

另见：

- [优先队列](https://help.supermemo.org/wiki/Priority_queue "Priority queue")
- [怜悯](https://help.supermemo.org/wiki/Mercy "Mercy")
- [推迟](https://help.supermemo.org/wiki/Postpone "Postpone")

### 自动排序和自动推迟

只要你合理地优先安排学习材料，检查以下两个选项应该会让你的生活更轻松：

- **[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [排序](https://help.supermemo.org/wiki/Learn_menu#Sorting "Learn menu")  : 自动排序重复项** ，这会在每天开始时按[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")对您的[待处理队列](https://help.supermemo.org/wiki/Glossary:Outstanding_queue "Glossary:Outstanding queue")进行排序。
- **[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [推迟](https://help.supermemo.org/wiki/Learn_menu#Postpone "Learn menu")  : 自动推迟** ，这会导致在每天开始时推迟较低[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")的[未完成重复](https://help.supermemo.org/wiki/Glossary:Outstanding_material "Glossary:Outstanding material") 。它确保你不会感到过载，并确保你将高优先级材料的延迟降到最低。

**自动推迟**始终会在队列中留下若干个高优先级的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 。推迟的目的是摆脱大量低优先级的材料，专注于高优先级的材料。您最有可能在学习一天后使用**[推迟](https://help.supermemo.org/wiki/Postpone "Postpone")** ，而**自动推迟**是在您的学习日开始之前执行的。这就是为什么它从不影响今天的材料，也不会推迟前几天的高优先级材料。如果您在菜单上勾选了**[自动推迟](https://help.supermemo.org/wiki/Learn_menu#Postpone "Learn menu")** ，您将始终以当天安排的所有重复内容和前几天未执行的若干高优先级重复内容开始一天。尽管**自动推迟**增加了[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")并减少了低优先级材料的[保留率](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") ，但它也使您受益于[间隔效应](https://help.supermemo.org/wiki/Glossary:Spacing_effect "Glossary:Spacing effect") 。研究表明，较长的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")可能会悖论性地提高学习速度（直到某个点）。 这源于 SuperMemo 中默认的[保留率](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") （约 95%）高于每单位投入时间所能记住的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")数量的最大保留率。

您可以从默认的[排序标准](https://help.supermemo.org/wiki/Priority_queue#Sorting_repetitions "Priority queue")开始，但是，如果您觉得在[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")上进展不足（例如，高[遗忘指数](https://help.supermemo.org/wiki/Glossary:Forgetting_index "Glossary:Forgetting index") ），您可以减少[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")的比例。如果新材料的流入速度太慢，您可以增加[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")的比例。如果您的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")不完美，请增加随机化的程度。如果您认为错过了太多高优先级的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") （请参见： **[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Toolkit_menu#Statistics "Toolkit menu")  : [分析](https://help.supermemo.org/wiki/Analysis "Analysis")  : [使用](https://help.supermemo.org/wiki/Analysis#Use "Analysis")  : 优先级保护** ，来自[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu") ），请减少随机化。通过反复试验，您将找到最佳方案。即使在找到最佳方案后，仍然要继续尝试不同的随机化和主题水平。这将帮助您避免在学习过程中产生的各种认知偏见。偶尔进行随机复习也可能有帮助（只是为了大致了解您的整体进展）。

通过**[自动排序](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort")**和**[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone")** ，您几乎不必担心[材料过载](https://help.supermemo.org/wiki/Glossary:Overload "Glossary:Overload") 。每当您在某一天第一次启动 SuperMemo 时，它会首先推迟您在前几天未能执行的重复任务。它将使用默认的推迟标准，您可以随时修改（例如，通过**[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [推迟](https://help.supermemo.org/wiki/Learn_menu#Postpone "Learn menu")  : 所有元素** ）。在推迟完积压的重复任务后，SuperMemo 将对今天的重复任务以及被**自动推迟**的未完成任务进行排序。 **自动排序**将使用之前指定的[排序标准](https://help.supermemo.org/wiki/Priority_queue#Sorting_repetitions "Priority queue") ，通过**[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [排序](https://help.supermemo.org/wiki/Learn_menu#Sorting "Learn menu")  : 排序标准** 。

通过 **[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone")** 和 **[自动排序](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort")** ，您可以始终以一部分可管理的材料开始新的一天，这些材料按 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 排序。您的学习顺序将得到优化，而无需您采取任何行动（即无需选择选项，也无需按键）。

#### 过载提示

- 有无 **[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone")** ，你对抗遗忘的唯一有效方法始终是： **完成你的重复练习！**
- **[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone")**影响所有天数**除了**今天。如果您今天安排了低优先级的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ， **自动推迟**将仅在明天推迟它们，并且仅在您今天没有复习它们的情况下。这是为了确保低优先级的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")也有机会根据您的**随机化/优先级**平衡进入重复，如[排序标准](https://help.supermemo.org/wiki/Priority_queue#Sorting_repetitions "Priority queue")所确定。
- 在**[推迟](https://help.supermemo.org/wiki/Postpone "Postpone")**对话框中， **跳过以下数量的高优先级元素**仅跳过在[**参数**选项卡](https://help.supermemo.org/wiki/Postpone#Parameters_tab "Postpone")上被**[跳过条件](https://help.supermemo.org/wiki/Postpone#Skip_conditions "Postpone")**跳过的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 。如果这些[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")没有受到[推迟标准](https://help.supermemo.org/wiki/Postpone#Parameters_tab "Postpone")的保护，它们将不会被保护以免被推迟。无论此参数的值是什么，您仍然可以将所有的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")推迟。您可以将其视为一个支持推迟的参数，用于强制额外的推迟（而不是一个保护您免受额外推迟的反推迟参数）。这里的_跳过_意味着“ _跳过推迟保护_ ”，而不是“ _跳过推迟_ ”。
- **模拟**在**[推迟](https://help.supermemo.org/wiki/Postpone "Postpone")**中可以用来告诉你当前的[推迟标准](https://help.supermemo.org/wiki/Postpone#Parameters_tab "Postpone")的效果如何。它忽略了**跳过以下数量的最高优先级元素** ，因为这个参数不需要模拟（它将始终强制跳过被[推迟标准](https://help.supermemo.org/wiki/Postpone#Parameters_tab "Postpone")保护的指定数量的元素）。

### 子集复习

_子集复习_是对学习材料的一部分进行复习（例如，在考试前）。该部分可以通过 [搜索](https://help.supermemo.org/wiki/Find_elements "Find elements") 、在 **[目录](https://help.supermemo.org/wiki/Contents "Contents")** 中选择分支、通过 [概念组](https://help.supermemo.org/wiki/Concepts "Concepts") 以及其他确定元素子集的方法来识别。被复习的子集材料可以按其在 [知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree") （ **[目录](https://help.supermemo.org/wiki/Contents "Contents")** ）中的顺序、 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 、 [难度](https://help.supermemo.org/wiki/Glossary:Difficulty "Glossary:Difficulty") 、 [间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") 、最近性等进行排序。

有关更多信息，请参见[子集学习](https://help.supermemo.org/wiki/Subset_learning "Subset learning")

## 提示和技巧

### 导入文章

- 从[维基百科](https://wikipedia.org/)导入文章是最简单的：
    - 要搜索[维基百科](https://en.wikipedia.org/)文章，请按 _Ctrl+F3_，输入一些关键词，选择**维基百科** ，然后按 _Enter_
    - 要搜索您正在阅读的主题的文章，请选择一段文本并按 _Ctrl+F3_。选择 **维基百科** ，如上所述。
    - 要从 Internet Explorer 导入维基百科文章，请按 _Shift+Ctrl+W_ （在 [主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu") 上选择 **[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [网页导入](https://help.supermemo.org/wiki/Web_import "Web import")  : 维基百科** ）
- 要快速从网络导入许多文章，请执行以下操作：
    1. 找到相关文章（例如，通过谷歌），
    2. 在 Internet Explorer 中打开它们，
    3. 在 SuperMemo 中，使用 _Shift+Ctrl+A_ （ **[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [网页导入](https://help.supermemo.org/wiki/Web_import "Web import")  : 全部** 从 [主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu") ）
- 要快速搜索您正在阅读的主题相关文章，请选择一段文本，按 _Ctrl+F3_ 并选择 **Google**
- 在 SuperMemo 中输入自己的笔记，请使用 _Alt+N_ （ **[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [添加笔记](https://help.supermemo.org/wiki/Edit_menu#Add_a_note "Edit menu")** 在 [主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu") 上）
- 如果您希望将图片存储在本地硬盘（在图像[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中），并使其在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中传播（例如，即使提取中不包含图片，仍然在所有[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")中显示等），那么您必须使用以下方法之一将图片导入到图像[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")中：
    - 要导入包含在单个文章中的图片，请使用 _Ctrl+F8_ （在 **[组件菜单](https://help.supermemo.org/wiki/Component_menu#Download_images "Component menu")**上选择 **下载图片** ），选择图片并点击 **插入**
    - 要从网络导入图片，请在您的互联网浏览器中对图片使用 **复制** ，然后在 SuperMemo 中按 _Shift+Ins_ 或 _Ctrl+V_ 粘贴图片（如果图片没有粘贴，请按 _Esc_ 几次以进入 [显示模式](https://help.supermemo.org/wiki/Glossary:Presentation_mode "Glossary:Presentation mode") ，然后再尝试 _Shift+Ins_ 或 _Ctrl+V_）
    - 要从 Internet Explorer 中导入许多文章的许多图片，请使用 **[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [网页导入](https://help.supermemo.org/wiki/Web_import "Web import")  : 图片** ，并选择 **仅本地图片** 或 **图片页面** 作为导入模式
    - 要在导入后优化多张图片的拼贴，请在[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")中使用**[组件](https://help.supermemo.org/wiki/Element_menu#Components "Element menu")  ：拼贴组件**
    - 另见： [将图片添加到 SuperMemo](https://help.supermemo.org/wiki/Visual_learning#Adding_pictures_to_SuperMemo "Visual learning")
- 维基百科最近将默认的数学公式显示从 PNG 更改为 MathML。要在 SuperMemo 中显示公式，请登录维基百科，选择 **偏好设置 : 外观** ，进入 _数学_ 部分并选择 **PNG**。点击 **保存** 以保存偏好设置。您将能够使用 PNG 公式来说明您的元素，并通过摘录和填空题使它们在知识树中传播。
- 与其为了[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")而扫描纸质书籍并进行 OCR，不如先寻找电子版的替代品。在大多数基础知识领域，学习材料的来源有很多。需要进行扫描的情况越来越少。如今，你甚至可以挑剔地搜索 HTML 文本，以替代你漂亮的 PDF 材料（以避免[将 PDF 转换为 HTML](https://help.supermemo.org/wiki/Incremental_learning#PDF_to_HTML_converters) 的麻烦）。
- 一些富含图片和表格的文本可能会被 SuperMemo 处理得很困难（SuperMemo 越旧，您可能遇到的困难就越多）。学习使用 HTML 过滤器可能非常有用（按 _F6_）。一些问题源于 SuperMemo 用于显示和编辑 HTML 格式文本的 Internet Explorer 中的错误。这特别指的是旧版本的 Internet Explorer（例如 IE 6.0）。因此，强烈建议您安装 Internet Explorer 7 或更高版本，以便让您的生活更轻松。
- 如果你面临考试截止日期，并且对[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")还不太流利，那么同时进行一些旧的和新的学习会更有意义。例如，30%的[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")和 70%的传统学习。你在策略上肯定会犯很多错误，发现过程可能会比考试前花费更长的时间。一开始你会有很大的开销成本（策略、材料选择、公式、学习 SuperMemo 本身等）。因此，如果你第一次尝试时考试表现实际上下降，也就不足为奇了！你可以选择几章你特别喜欢的内容，并在增量学习中使用它们。然后，你可以用旧的方法处理其余的材料。在你还没有掌握如何正确进行之前，绝对不可能大规模地将教科书转换为 SuperMemo 材料！这可能会适得其反，并打击使用 SuperMemo 的积极性。像往常一样，小心谨慎，逐步进行。

### 新文章的涌入

- SuperMemo 使用两种基本元素类型： [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") （文章）和[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") （问题和答案）。在复习过程中，这两者的处理方式不同。 **[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")代表你想要了解的内容，而[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")则包含你已知的内容** 。要更好地理解它们之间的区别，请参见： [主题与项目](https://help.supermemo.org/wiki/Items,_topics,_concepts,_and_tasks "Items, topics, concepts, and tasks")
- 保持你的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") /文章的检查。使用你的[排序标准](https://help.supermemo.org/wiki/Priority_queue#Sorting_criteria "Priority queue")确保你每天除了阅读之外，还能获得足够的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") /问题。过多的主题可能会减缓你的项目流动，并损害[主动回忆](https://help.supermemo.org/wiki/Glossary:Active_recall "Glossary:Active recall")过程。 **高主题负载会使 SuperMemo 类似于传统阅读，导致你的[记忆保持](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")水平不可接受** 。你可以根据重复所需的时间决定最佳比例。例如，5:1 的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") : [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")比例可能仍会让你在阅读上花费更多时间而不是复习。增加这个比例以提高你的[记忆保持](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") ，如果你需要进行大量阅读，则暂时减少比例。如果你不确定，可以将[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") : [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")设置在 3:1 到 8:1 之间。还是很难决定？在[待处理队列](https://help.supermemo.org/wiki/Glossary:Outstanding_queue "Glossary:Outstanding queue")中为每个[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")复习 5 个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 。
- **[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Toolkit_menu#Statistics "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Statistics "Statistics")  : 保护** 可用于检查您在某一天处理高优先级材料的进度
- **[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Toolkit_menu#Statistics "Toolkit menu")  : [分析](https://help.supermemo.org/wiki/Analysis "Analysis")  : [使用](https://help.supermemo.org/wiki/Analysis#Use "Analysis")  : 保护** 可用于检查您最优先材料的处理程度随时间的变化

### 阅读

- 在阅读时，您可以通过点击其标签 (  [![SuperMemo: Read toolbar in the control bar at the bottom of the element window](https://help.supermemo.org/images/4/42/Read_toolbar.png)](https://help.supermemo.org/wiki/File:Read_toolbar.png "SuperMemo: Read toolbar in the control bar at the bottom of the element window")) 在控制栏中显示 [**阅读** 工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar") 。在您学习使用键盘访问其所有功能之前，工具栏可能会很有帮助。
- 如果你不喜欢按下 _Enter_ 时行间距过大，可以使用 _Shift+Enter_。记住这个技巧！许多用户为行间距苦恼了几个月，才发现这个宝贵的提示。这个棘手的行为是由 Internet Explorer 引起的，而不是 SuperMemo。
- 完成处理文章后，请在[学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar")上使用 **完成！** (  [![Learning : Done will remove the article from the review process, and delete its contents (without deleting the extracted material](https://help.supermemo.org/images/0/01/Done%21.png)](https://help.supermemo.org/wiki/File:Done!.png "Learning : Done will remove the article from the review process, and delete its contents (without deleting the extracted material")) 或从[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")中选择 **[学习](https://help.supermemo.org/wiki/Element_menu#Learning "Element menu")  : 完成** （例如，使用 _Ctrl+Shift+Enter_，然后通过 _Enter_ 确认所有必要的操作）。这将清理您的学习过程，而不会影响您所做的工作（所有[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")和[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")将保留在学习过程中）。 **完成！** 删除（1）文章，（2）其[重复历史](https://help.supermemo.org/wiki/Repetition_history "Repetition history") ，（3）其[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")等。然而，它会保留原始的空[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")作为参考源，并作为派生结构的[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")和[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的持有者。 **完成！** 在您认为已完成阅读和处理给定文本的时刻执行。这通常意味着跳过所有不重要的部分，并提取文章中所有重要的部分。您在从文章生成的所有[主题提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")上重复使用**完成！**。 您会很快发现，仅将原始文章保留作为参考会使您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")变得杂乱，增加其大小并产生过多的搜索结果。通常，删除原始文章是更为理想的选择。您可以随时通过其参考链接在网上访问原始文章
- 如果您在学习过程中返回到一个中断的文章，文本中的光标将设置在最后处理的文本上。该文本选择称为_阅读点_ 。离开文章时，您也可以手动设置_阅读点_ ，在您中断阅读的地方。选择 _Ctrl+F7_ 来设置阅读点，或者点击[**阅读**工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar")上的设置阅读点按钮（  [![Set read-point marks the selected text as the point from which you will resume reading the next time you return to the presented article](https://help.supermemo.org/images/4/4f/Set_read-point.png)](https://help.supermemo.org/wiki/File:Set_read-point.png "Set read-point marks the selected text as the point from which you will resume reading the next time you return to the presented article")）。
- 高亮文本会自动设置 [阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point")
- 使用 **清除阅读点** (  [![Clear read-point removes the read-point from the currently processed text](https://help.supermemo.org/images/4/4d/Clear_read-point.png)](https://help.supermemo.org/wiki/File:Clear_read-point.png "Clear read-point removes the read-point from the currently processed text")) 在 [**阅读** 工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar")上，或按 _Ctrl+Shift+F7_，以移除 [阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point")
- _Enter_ 是在学习周期中前进时使用的默认键。当选择一个 [阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point") 并按下 _Enter_ 时，SuperMemo 将自动开始或恢复重复，而不是插入新行。如果您在文本中进行任何选择，情况也是如此。只有在文本中没有选择时，_Enter_ 才会发挥其通常的功能。尽管在这种情况下使用 _Del_ 和 _Enter_ 而不是仅使用 _Enter_ 可能显得繁琐，但您会很快发现这种行为在学习中是不可或缺的。如果您尝试过后仍然不喜欢这种 _Enter_ 行为，请在 _[[BIN]\supermemo.ini](https://help.supermemo.org/wiki/SuperMemo_files#Program_files "SuperMemo files")_ 中设置 `Allow Read-Point Enter=0`。
- 如果您使用**光标前删除** ，可能会因为缺少**撤销**而感到烦恼。然而，如果您错误地删除了重要文本（例如，使用**之后**而不是**之前** ），您可以在[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")的 _[TEMP]_ 文件夹中找到被删除文本的临时备份（文件名为_最后删除的文本部分_ ，后面附有元素编号和删除时间）。备份文件仅在**[修复集合](https://help.supermemo.org/wiki/Repairing_collections "Repairing collections")**或在**[文件](https://help.supermemo.org/wiki/File_menu "File menu")  : [工具](https://help.supermemo.org/wiki/File_menu#Tools "File menu")  : 垃圾**时被删除，也就是说，如果您退出元素，它不会消失。
- 水平线可以用来分割文章。如果您插入一条水平线并调用 **[分割文章](https://help.supermemo.org/wiki/Component_menu#split_article "Component menu")** ，文章将被分割成独立的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 。 **分割文章** 也可以从 **[指挥官](https://help.supermemo.org/wiki/SuperMemo_Commander "SuperMemo Commander")** 中获取。要插入水平线，请按 _Shift+Alt+H_ 或输入
    
    ---
    
    ，选择它，然后按 _Ctrl+Shift+1_（或在 [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") 中选择 **[文本](https://help.supermemo.org/wiki/Component_menu#Text "Component menu")  : 转换 : 解析 HTML**）。 **解析 HTML** (  [![Parse HTML removes HTML tags from the selected text](https://help.supermemo.org/images/c/c0/Parse_HTML.png)](https://help.supermemo.org/wiki/File:Parse_HTML.png "Parse HTML removes HTML tags from the selected text")) 也可以在 [学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar") 中找到。
- 使用 _Ctrl+]_ 和 _Ctrl+[_ 来改变选中文本的字体大小

### 生成填空题

- 在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，您应该始终努力将被动文本转化为主动问题。理想情况下，所有被动文本在完成后应被删除。来自“外部世界”的所有干扰都会使 SuperMemo 的准确性降低。被动文本在学习中提供的额外帮助很少。同时，它们会造成干扰，只应用于生成新的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") （或作为参考）。
- 当你按下 _Alt+Z_ 时，当前 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 中选定的关键词会被标记为 填空 。新创建的 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")**不可见** （即你不会立即看到答案或删除括号）。你可以通过按 _Alt+左箭头_ 来查看新创建的 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 。使用该键来编辑新创建的 [填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") （例如，添加上下文线索、缩短文本、改善措辞等）。然而，如果可能的话，你应该逐步进行这些小任务，即在下次遇到 [填空项目](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 时。
- 如果您想要填空多个关键词，在应用 **Cloze** 之前，您应该确保处理过的陈述或段落尽可能简单。您应该尽量**仅使用一句话的[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")**来生成[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ！一些新手一开始不喜欢增量学习。怪物[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")是他们负面情绪的主要原因。将父段落简化为简单的陈述将产生简单的[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，这将需要很少的处理。对复杂文本使用 **Cloze** 会在简化文本时增加重新编辑的成本（在所有填空多个关键词的情况下）。如果您在较长的多句段落上使用 **Cloze**，您将不得不额外努力简化生成的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 。所有[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")都应该足够简短，以确保您在重复时能够完全阅读它们。否则，您的大脑会倾向于从非语义线索中“推导”答案。这将违背学习的目的！ 通过使用单句[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")进行[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，您将节省大量的重复时间，并在简化[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")和将其转换为基于[最小信息原则](https://help.supermemo.org/wiki/Incremental_learning#Minimum_information_principle)的最终形式所需的时间上节省无数时间。如果您计划仅根据增量原则填空一个关键字，您可以减少预填空的简化/编辑，尤其是。关于仍需在其“整体结构”上进行更多工作的材料
- 您在提取片段、生成[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")和编辑它们的工作应该是渐进的。 **在每次复习中，只对学习材料进行必要的工作！** 在间隔中提取和编辑会为学习带来额外的好处，并且更节省时间。每次重新思考结构和表述时，您都会磨练记忆中某一知识点的表现和“连通性”。此外，随着学习的进行，您的优先事项也会发生变化。有时，您会对某一知识点投入过多，而该知识点很快变得无关紧要或过时。渐进的方法将减少过度投资的影响。因此，渐进主义不仅应在阅读时使用，还应在后续处理和表述知识时使用。请参见： [示例](https://help.supermemo.org/wiki/Incremental_learning#Examples:_Incremental_reading_in_action) 。除非您处理的是最高优先级的材料，否则不要一次性生成所有的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 。要做到渐进。今天生成一个[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，下次复习时再生成一个。 学习过程的渐进性、带有处理风格的文本的多样化色彩以及复杂的提取层次似乎与许多人的完美主义特性相悖。然而，渐进阅读的目的是在最短的时间内获得最大的效果。因此，在提取时，您已经在形成提取句子的被动痕迹记忆痕迹。 最佳策略是不要继续生成[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，但可以转向队列中的其他[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")或同一文章中的其他[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") （如果文章的高优先级是合理的）
- 一旦你完成了对带有[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的段落的处理，请在[学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar")或[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")上使用**完成！**（  [![Learning : Done will remove the article from the review process, and delete its contents (without deleting the extracted material](https://help.supermemo.org/images/0/01/Done%21.png)](https://help.supermemo.org/wiki/File:Done!.png "Learning : Done will remove the article from the review process, and delete its contents (without deleting the extracted material")）（例如，使用 _Ctrl+Shift+Enter_）。这将清理你的学习过程，而不会影响你所做的工作。所有[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")将保留在学习过程中。 **完成！** 会删除[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") /段落，但会将原始空[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")保留为派生[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的占位符。一旦你认为你的[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")涵盖了构成主题的陈述的所有重要关键词，你可以再次执行**完成！**。最后，只有[填空项目](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")保留在学习过程中。请注意，从源文章降到单个[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的过程可能需要数年。整个过程是渐进的，并且由记忆的衰退痕迹来决定节奏。一个从短句生成的单一[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")通常可以让人们在几个月内保持对整个陈述的良好记忆。 除非是任务关键的信息，在所有关键词上不执行[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，直到个别关键词引发关于它们是否可以单独回忆的问题
- **转换为纯文本** ：纯文本占用的空间要小得多。 [丰富的纯文本集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")备份速度更快。只要不包含可能需要的格式信息，您可以将短的 HTML 片段转换为纯文本，以有效记忆文本。从长远来看，简单的纯文本[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")可能通过剥夺您由格式带来的额外提示而更好地发挥作用。将一些[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")保留为 HTML，将一些转换为纯文本。经过一段时间，您可能会对哪种方式更有效有自己的偏好。
- 生成一个[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")后，最后一个字符保持被选中状态。一方面，它指示刚刚处理的关键词，另一方面，选中状态使得可以使用 _Enter_ 键移动到重复中的下一个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 。
- 如果你不断收到关于在填空中使用的[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")的问题，请使用**[搜索](https://help.supermemo.org/wiki/Search_menu "Search menu")  : [概念](https://help.supermemo.org/wiki/Concepts#Concept_properties "Concepts")**来检查你导入文章的概念组，并取消勾选**自动应用**
- 您可以通过样式表更改[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")和[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的外观。请参见： [更改填空关键词的外观](https://help.supermemo.org/wiki/Incremental_learning#Changing_the_appearance_of_cloze_keywords)

#### 更改填空关键词的外观

您可以通过以下方式修改 SuperMemo 中的默认 [cloze](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 样式：

1. 从[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")中，选择**[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [选项](https://help.supermemo.org/wiki/Options "Options")**
2. 在**选项**对话框中，点击**[字体](https://help.supermemo.org/wiki/Fonts_tab_in_Options "Fonts tab in Options")**选项卡
3. 在**字体**选项卡上，点击**样式表**按钮
4. 在 **SuperMemo 样式表**对话框中，选择顶部下拉列表中的 _Clozed_ 选项；然后使用**字体** 、 **颜色**和**背景**按钮设置该样式的各个属性

##### 移除填空关键词格式化

显示给定填空文本背后的 HTML 代码（例如，使用 _Ctrl+Shift+F6_）。在 HTML 代码中，将 _class=clozed_ 替换为空字符串。

||之前|之后|
|---|---|---|
|HTML|这是我的示例 <SPAN class=clozed> 元素</SPAN>|这是我的示例 <SPAN> 元素</SPAN>|
|WYSIWYG|这是我的示例元素|这是我的示例元素|

您的填空关键词将以与周围文本相同的格式显示。

#### 模拟现实生活情境以对抗记忆干扰

有些文本以难以记忆的形式呈现知识。列表和集合就是一种不易记住的知识的好例子。即使你对非洲的地图了如指掌，回答请求：“ _列出所有非洲国家_ ”可能仍然相当困难。有一些经过验证的技巧可以帮助你使用 SuperMemo 应对重复、富含列表或乏味的知识。所有解决方案在记忆阶段的成本都很高，但从长远来看，由于遗忘率较低，回报将非常丰厚。基本的两个原则是：

1. 逐渐将各个部分粘合到你的整体知识结构中
2. 尽可能地具象化和记忆化

以下是一些具体提示：

- **使用思维导图** ：在网上搜索与所学主题相关的好记忆图像（例如，非洲的政治地图）。这幅图像将为你的记忆提供基本框架。就像圣诞树上的装饰品一样，你将把新的知识挂在这个记忆框架上。使用这幅图像来说明所学的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")和[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")在所研究的[概念组](https://help.supermemo.org/wiki/Glossary:Concept_group "Glossary:Concept group")中的所有内容。
- **不要一次性学习所有内容** ：在它们获得某种特殊意义时，逐渐添加单独的 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 。当它们与您现有的知识紧密契合时添加它们。当您特别需要它们或学习相关主题时添加它们。如果您需要为考试准备枚举知识，可以使用传统方法进行突击学习，但在您觉得它们有趣或重要时，仍然可以在独特的上下文中继续添加单独的内容。
- **与故事关联** ：如果你问一个该领域的专家，你可能会听到他/她通过与个案故事的关联掌握了枚举知识。无论他或她在学校学到的知识多么丰富，都会很快被遗忘，但个别案例或待解决的问题由于其独特性，留下了良好且持久的印记。一旦你碰到一个与难以记住的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")相关的故事，尝试在那个特定故事的背景下学习这些项目（例如，只有在阅读 [Eto](https://en.wikipedia.org/wiki/Samuel_Eto'o) 转会切尔西的文章时，才把喀麦隆挂在你的[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")上）。如果在练习过程中遇到案例，简要描述它们并用它们来提供背景。
- **通过增量阅读补充** ：与其沿用相同的重复和单调的模板来制定所有[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ，不如尝试使用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")来生成针对不同故事线的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 。理想情况下，您应该回顾您的主题并仅生成一个子主题（例如，关于非洲的一个国家）。始终选择看起来最明显或最重要的内容。始终尝试添加一些补充材料。确保您不提供会让您在没有形成适当联想的情况下正确回答的线索。
- **与专家比较** ：询问该领域的专家他们是如何记住某个事实或关联的。在某些情况下，你可能会感到失望，因为专家对必修大学课程的记忆如此糟糕。而在其他时候，你会看到他们如何轻松地通过使用简单的记忆法来解决问题。这将帮助你在压缩的时间尺度上模拟真实的学习，而不必浪费时间去掌握那些别人从未能掌握的内容。这就是学校学习和你高效增量学习之间的基本区别：你并不是按照严格的规定死记硬背。你利用你的创造力逐步构建一个持久的有用知识结构！

##### 示例：处理枚举

如果你恰好学习地质时期，你一定会产生讨厌的[水蛭](https://help.supermemo.org/wiki/Glossary:Leech "Glossary:Leech") ，尤其是当你对这个主题不熟悉时。使用自上而下的学习规则，确保你在学习时期之前了解时代，在学习纪元之前了解时期，并在进一步深入知识树之前做好准备。

一个典型的错误是从死记硬背毫无意义的时间段序列开始。例如，填空古生代的序列：“ _寒武纪，奥陶纪，志留纪，泥盆纪，石炭纪，二叠纪_ ”可能会导致一个必然会造成问题的问题：“ _寒武纪，奥陶纪，[...]，泥盆纪，石炭纪，二叠纪_ ”。这个[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")会让任何对该领域不熟悉的人感到困扰。换句话说，只有那些心中已有知识的人才能以较小的代价应对这种类型的问题！ **结论：除非你已经知道自己想要学习的内容，否则没有必要以艰难的方式学习列表！** 这是个两难选择！

与其使用上述方法，不如先用一些有意义的事件将志留纪时期固定在你的脑海中。例如，硬骨鱼的出现。这样，我们可以从一个基于" _硬骨鱼出现在志留纪（距今 443-419 百万年）_"的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")开始。接下来的问题将更容易记住：“ _硬骨鱼出现在 [...](时期)（距今 443-419 百万年）_”。即使答案与原来的不幸的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")相同，这个问题在语义上也不等价。你将需要更多的[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 。然而，处理类似的序列时，应该始终逐步进行，并与将各个时期固定在记忆中的过程成比例。之后你可以继续填入日期、时代和其他细节。你应该始终尝试添加新的有趣的锚点，并与材料并行工作，以便吸收可能在记忆中长久停留的有意义的信息。

### 学习

- 使用 _Ctrl+W_ （ **[工具箱](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [日历](https://help.supermemo.org/wiki/Calendar "Calendar")** 从 [主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu") ）来 **查看重复的日历** 。双击某一天以查看那天将要复习的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 。您还可以检查过去的某些天复习过哪些 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") （从 **工作量** 切换到 **重复** 模式）。
- 要**检查今天的[未完成元素](https://help.supermemo.org/wiki/Glossary:Outstanding_element "Glossary:Outstanding element")数量** ，请查看屏幕底部默认[布局](https://help.supermemo.org/wiki/Glossary:Layout "Glossary:Layout")中的[状态栏](https://help.supermemo.org/wiki/Status_bar "Status bar") 。您还可以查看[**统计**窗口](https://help.supermemo.org/wiki/Statistics "Statistics") （例如，使用 _F5_）。 [**统计**窗口](https://help.supermemo.org/wiki/Statistics "Statistics")也可以保存在默认[布局](https://help.supermemo.org/wiki/Glossary:Layout "Glossary:Layout")中（使用 _Ctrl+Shift+F5_）。
- 阅读（ [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ）和学习（ [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ）的最佳时间分配取决于多个因素：文章的主题和重要性、难度、趣味性、你的兴趣、你的偏好、你的知识、你的情绪、你的生物钟等。 **最佳时间分配可以从几秒到几小时不等！** 这是[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")力量的来源之一。对于某些文本，你可能会发现很难在几分钟内保持合理的注意力水平。通常，你的最大处理能力可能只能维持在一个句子或段落上。对于那些非常有趣、写得很好、非常有用或非常重要的文本，你的好奇心和掌控欲可能会激发你，让你连续几个小时不间断地阅读。在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，时间分配的主要标准是你的专注力。你可以在一个连续的时间段内阅读一百篇文章，同时保持高度集中和警觉。有些文章会被深入处理，而其他文章则会被迅速推迟。专注力标准是全面的。 它包括上述所有因素：文章的难度可能会影响你的注意力，你的疲惫总是会减少对困难文本的最佳分配，并增加对有趣或愉快文本的分配（那些帮助你“度过”糟糕学习日的文本）
- **您可以将一些低优先级的材料保持在被动形式** （即不生成[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ）。当然，这些材料会逐渐变得难以回忆或完全遗忘。使用**记住填空题**的最佳时机是当您注意到材料变得不稳定时。不要一次性将整个段落转换为[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") （除非它非常重要）。选择最重要的关键词，仅创建一个[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 。当下次复习该段落时，您将能够确定哪些其他关键词必须与[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")一起使用，以防止遗忘关键信息。预测您需要生成多少个[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")以达到对整个段落的完美回忆是非常困难的。有时，一个[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")就足够了。而在其他时候，一个段落可能需要十几个[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ！
- **你变得越好，你就越会想要依赖增量学习** 。你的增量学习技能越强，使用增量学习的有效工作周期就越短。对于熟练的用户来说，甚至第二天的作业也可能适合使用增量学习工具。然而，对于初学者来说，考虑到你可能需要几个月的练习才能真正理解增量阅读（以及在你记忆中的知识流动），这可能会使得在一个或两个月内进行考试学习时变得无效。
- **[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone")** 使您更接近理想的间隔重复学习，通过减少您因数量过多而无法掌握的低优先级材料的负担。从某种意义上说， [自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone") 将高优先级材料（ [间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition") ）与低优先级材料（传统学习）分开。如果没有它，您将陷入这两种极端之间。
- 您可以通过在[排序标准](https://help.supermemo.org/wiki/Priority_queue#Sorting_repetitions "Priority queue")中增加**随机化**程度来**增加材料的随机化** （ **[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [排序](https://help.supermemo.org/wiki/Learn_menu#Sorting "Learn menu")  : 排序标准**来自[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu") ）。随机化可以分别为[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")和[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")设置。这应该有助于您避免隧道视野和[优先偏见](https://help.supermemo.org/wiki/Priority_queue#Priority_bias_in_incremental_reading "Priority queue") 。
- **您可以缩短或延长单个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")** 。如果您想在选定的日期安排某篇文章的复习，请在[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")中选择**[学习](https://help.supermemo.org/wiki/Element_menu#Learning "Element menu")  : [重新安排](https://help.supermemo.org/wiki/Element_menu#Jump_interval "Element menu")** （例如，按 _Ctrl+J_）。您也可以使用**[学习](https://help.supermemo.org/wiki/Element_menu#Learning "Element menu")  : [执行重复](https://help.supermemo.org/wiki/Element_menu#Execute_repetition "Element menu")** （例如，按 _Ctrl+Shift+R_）。 **执行重复**的工作方式类似于**重新安排** ，不同之处在于在重新安排之前会执行一次重复。根据您是否已经查看过[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的内容并尝试从记忆中回忆它，选择这两者中的一个。 **执行重复**需要提供一个评分（除非您在已经进行过重复的那天执行它）。
- **对于 [重要性较低的项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ，降低 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")** (_Alt+P_)，增加 [间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") (_Ctrl+Shift+R_)，甚至可以增加 [遗忘指数](https://help.supermemo.org/wiki/Glossary:Forgetting_index "Glossary:Forgetting index") 。遗忘指数可以用来优化 [知识获取率](https://help.supermemo.org/wiki/Glossary:Acquisition_rate "Glossary:Acquisition rate") 和 [知识保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") 之间的权衡。在一个过载的 [集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 中给予 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 低 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 类似于给予它更高的 [遗忘指数](https://help.supermemo.org/wiki/Glossary:Forgetting_index "Glossary:Forgetting index") 。
- 材料过载所造成的**损害程度**可以在**[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Toolkit_menu#Statistics "Toolkit menu")  : [分析](https://help.supermemo.org/wiki/Analysis "Analysis")  : [使用](https://help.supermemo.org/wiki/Analysis#Use "Analysis")  : 优先保护**中看到。一方面，您希望提高**优先保护**的价值。另一方面，限制新文章导入的速度与学习进度成比例，可能会导致您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") “变得陈旧”，从而减少学习的乐趣和动力。一些较旧的文章可能会因[过载](https://help.supermemo.org/wiki/Glossary:Overload "Glossary:Overload")而被推到较低的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，最终被删除，因为它们不够重要、不够好或过时。
- 你永远不应该停止思考你在记忆中保留的**[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的价值** 。见： [项目的重新评估](https://help.supermemo.org/wiki/Incremental_learning#Re-evaluation_of_items)
- 使用 **[学习](https://help.supermemo.org/wiki/Browser_menu#Learning "Browser menu")  : 分布** 在 [浏览器](https://help.supermemo.org/wiki/Browser "Browser") 中 **改变学习材料的时间分布** 。您可以通过在选定的时间段内压缩学习计划来加快考试前的学习。您还可以在无聊的考试后在更长的时间段内重新分配材料（用于增量复习、重新学习、降低优先级和/或消除）。对于后者，您可以选择每天提供特定部分的材料。阅读关于 **[怜悯](https://help.supermemo.org/wiki/Mercy "Mercy")** 的内容。
- **推理/数学中的推导步骤** 。如果你正在学习数学，你可能会想知道是否应该记住数学证明或解法的每个推导步骤，还是应该只关注最终结果。这个选择将取决于你的目标。如果你只需要最终公式，那么花时间学习推导步骤可能不如学习材料中其他重要部分来得有效。如果你今天不确定未来需要什么，你可以将整个推导输入到一个[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")中，并记住最终公式。稍后，在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，你将逐步决定推导的哪些部分在你的工作或进一步学习中是重要的。这部分知识将在学习过程中与其他知识竞争，从长远来看，你可能最终决定是否想要记住细节，是否仅将其保留用于[被动复习](https://help.supermemo.org/wiki/Glossary:Passive_review "Glossary:Passive review") ， [删除](https://help.supermemo.org/wiki/Glossary:Dismiss "Glossary:Dismiss")某些步骤，或[认为](https://help.supermemo.org/wiki/Glossary:Dismiss "Glossary:Dismiss")整个推导是多余的（或学习成本过高）。自然，推导通常会增强你有效使用公式的能力。 因此，做出决定从来都不是容易的。一旦你已经确定了推导步骤，你可以随时调整它们的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，以确定你复习它们的概率是否足够高，从而对你的知识产生影响。
- **您可以将阅读（ [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ）与复习（ [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ）分开** 。然而，多样性是生活的调味品。随机混合阅读和重复是克服早期版本 SuperMemo 单调性的一个非常强大的工具。将[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")与[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")交替进行，提供了许多[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的优势，相较于传统学习或经典 SuperMemo。要仅复习[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") （阅读），请选择（1） **[查看](https://help.supermemo.org/wiki/View_menu "View menu")  : [未完成](https://help.supermemo.org/wiki/View_menu#Outstanding "View menu")** ，（2） **[子项](https://help.supermemo.org/wiki/Browser_menu#Child "Browser menu")  : 主题** ，然后（3） **[处理浏览器>](https://help.supermemo.org/wiki/Subset_operations "Subset operations") : [学习](https://help.supermemo.org/wiki/Subset_operations#Learning "Subset operations")  : [学习](https://help.supermemo.org/wiki/Subset_learning "Subset learning")** （_Ctrl+L_）。要仅进行重复（ [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ），请使用类似的方法。在阅读阶段混合[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")和[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")可能是更好的策略，并在一天的后期通过仅进行项目的重复来巩固知识。最终，遵循[优先事项](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 、 [自动排序](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort")和[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone")将是最佳的、最少偏见的长期策略。
- **乐趣是成功的关键** ：如果你的学习文本过于“枯燥”，没有太多意义，或者冗长等，学习的乐趣就会下降。如果学习不愉快，它的效果就不太可能好。如果你不喜欢某篇特定的文章，也许一个[维基百科替代品](https://en.wikipedia.org/)会更有趣且更有意义？即使这篇文章稍微长一些，你也可以通过[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")快速处理它，配上图片，享受这个过程。
- **滋养你对知识的渴望** ：你必须找到知识与其对生活带来的价值之间的明确联系。随着你接受更多教育，知识的渴望会不断增长（你知道得越多，就越意识到自己不知道的东西）。因此，有一个极好的解决办法来应对缺乏动力的问题：学习更多，看看它如何影响你和他人的生活。
- **您决定了在 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 中的学习速度！** 您可以确定 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 的呈现频率（例如，使用 [A-Factors](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor")、 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 、 **[怜悯](https://help.supermemo.org/wiki/Mercy "Mercy")** 等）。您可以确定 [项目](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") 的 [保留](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 水平（例如，通过 [遗忘指数](https://help.supermemo.org/wiki/Glossary:Forgetting_index "Glossary:Forgetting index") 、 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 、 [自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone") 等）。您可以强制提前复习任何材料（见： [子集复习](https://help.supermemo.org/wiki/Subset_review "Subset review") ）
- **你绝不能记忆你不理解的材料！** 有一些希望，通过在其他领域进行更多学习，你会在某个时刻理解它。然而，更有可能的是，你会对那些毫无意义的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")感到沮丧。如果你不理解一个术语或概念，你需要深入挖掘原因。是术语问题吗？这可以很容易地调查和解决。还是材料本身存在问题？也许你可以在网上找到一个替代品？也许你可以在网上找到一张漂亮的图片来说明这个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ？显然，每一次小调查都需要时间，但掌握 10-20%的材料要比毫无理解地死记硬背一本百科全书要好得多。即使你考试失败，这 10%在未来也可能有用（例如，如果你重考）。一般来说，学校的负担超过了学生能够掌握的，这导致了很多压力和沮丧。选择 SuperMemo，你已经迈出了第一步。现在你需要理顺这个过程，并仔细考虑你最佳的长期策略。理解是成功的关键！
- 如果您想对一个 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")**无** 或 **差** 进行评分，请分别按 _0_ 或 _1_
- SuperMemo 还没有配备帮助您有效利用知识为善良事业服务的工具。它会提升您的知识，但……您必须保持警惕： **不要把时间花在为了知识而获取知识上！要考虑适用性！** 幸运的是，随着您的知识增长，您有效利用知识的能力也在提升。

#### 项目的重新评估

您应该记住，所有引入到您的学习过程中的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")都需要在其适用性、表述、重要性、逻辑等方面进行无尽的关注。在一个精心规划的学习过程中，通常不需要在各个重复之间的时间段内复习[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 。然而，当一个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")需要重复时，您应该快速且几乎是本能地评估以下内容：

1. _我真的需要这个物品吗？_
2. _在我（期望的）知识的整个范围内，这个项目的真实[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")是什么？_
3. _这个项目难以记住吗？如果是，为什么？_
4. _这在事实上的正确性如何？_
5. _它是否尽可能简单明了？_
6. _我现在真的需要知道吗？_
7. _您是否需要补充知识以理解该项目的所有影响？_

根据上述问题的答案，您将采取的一些典型行动如下：

1. **编辑**项目。您将使用 _Q_、_A_ 或 _E_ 等按键进入所需的文本字段并进行编辑。在更复杂的 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 中，您将使用 _Ctrl+T_ 在 [组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") 之间切换，使用 _Alt+click_ 在 [编辑](https://help.supermemo.org/wiki/Glossary:Editing_mode "Glossary:Editing mode") 和 [拖动](https://help.supermemo.org/wiki/Glossary:Dragging_mode "Glossary:Dragging mode") 模式之间切换，或使用 _Ctrl+E_ 进入 [编辑模式](https://help.supermemo.org/wiki/Glossary:Editing_mode "Glossary:Editing mode") 。
2. **降低**该项目的优先级。对于[不够重要的项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ，或者你不确定是否足够重要的项目，使用 _Alt+P_ 来降低它们的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。你也可以使用 _Ctrl+Shift+向下箭头_进行小幅降低优先级。
3. **重新安排**该项目。如果您对该项目非常了解，或者出于某种原因想手动增加（或减少）重复间隔的长度，按 _Ctrl+Shift+R_ 选择下次重复的日期。
4. **忽略**该项目。如果您确定将来不太可能需要该项目，但希望将其保留在您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中以供参考或归档，请按 _Ctrl+D_。 [被忽略的项目](https://help.supermemo.org/wiki/Glossary:Dismissed_element "Glossary:Dismissed element")将从学习过程中移除。
5. **删除**该项目。键 _Del_ 在清理你的 [收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 中的垃圾时非常有用，这些垃圾是由于你想知道的内容超出了你的记忆所能承载的。在 [编辑模式](https://help.supermemo.org/wiki/Glossary:Editing_mode "Glossary:Editing mode") 或拼写 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 时（即在 _Del_ 执行文本编辑功能的情况下），你可能需要使用 _Ctrl+Shift+Del_。请注意，在 SuperMemo 中删除一个 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 将删除其所有 [子项](https://help.supermemo.org/wiki/Glossary:Child "Glossary:Child") ！因此，你可能希望学习始终使用更安全的 **完成** （_Ctrl+Shift+Enter_）。
6. **延迟**或**遗忘**该项目。如果您认为该项目此刻太难，您可以推迟学习它。为此，请选择 _Ctrl+J_ 设置一个新的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") ，或使用**遗忘**将该项目转移到[待处理队列](https://help.supermemo.org/wiki/Glossary:Pending_queue "Glossary:Pending queue") 。这将给您一些时间导入一些补充材料，以帮助您理解该项目。

### 表述

- **使用最小信息原则** ，该原则指出，为[主动回忆](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")而制定的简单[元素](https://help.supermemo.org/wiki/Glossary:Active_recall "Glossary:Active recall")比复杂元素带来更好的学习效果。即使一个复杂的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")可能相当于大量简单元素，这一点依然成立。请参见： [最小信息原则](https://help.supermemo.org/wiki/Incremental_learning#Minimum_information_principle) 。
- 某些信息可能以列表的形式呈现。应尽量避免使用列表。然而，有些是不可避免的（例如，神经列表、支流列表、欧盟入会列表等）。如果需要记忆列表，请使用记忆法，并尝试[模仿现实生活情境以对抗记忆干扰](https://help.supermemo.org/wiki/Incremental_learning#Mimic_real_life_situations_to_combat_memory_interference) 。另见： [学习列表](https://help.supermemo.org/wiki/Incremental_learning#Learning_lists)
- 在 SuperMemo 中提问的方式可能与生活中问你同样问题的方式不同。换句话说，你可能在 SuperMemo 中存储了一些材料，但现实生活中的情境会让你无法回忆起它。换句话说，你需要正确地构造材料，以最大限度地提高其在所有潜在情境中的回忆效果。
- 记住记忆规则的普遍性。例如，学习一个通用的数学公式比仅仅学习其使用示例要好。示例可以用来强调在不同上下文中的适用性。
- 您可以使用 **解析 HTML** (_Ctrl+Shift+1_) 将选定的 HTML 代码转换为格式（例如，尝试插入
    
    ---
    
    或  
    并使用 **解析 HTML** 进行解析）。您还可以使用此选项来删除格式（例如，如果您想去掉换行符）。
- 您可以使用您喜欢的 HTML 编辑器编辑更复杂的文本。您需要将该编辑器与文件名扩展名 _*.HTM_ 关联。例如，如果您将 [Microsoft Expression Web](http://www.microsoft.com/en-us/download/details.aspx?id=36179)（免费）与 *.HTM 关联，您只需按 _Ctrl+F9_ 就可以编辑您的文本。如果您更愿意保持关联不变，您可以使用 _F9_ 在 Internet Explorer 中查看文件，然后选择 **文件 : 使用 Microsoft Expression Web 编辑** （该菜单项是由 Expression Web 添加到 Internet Explorer 中的）。更多信息请参见： [在默认 HTML 编辑器中打开 HTML 文件](http://supermemopedia.com/wiki/Open_HTML_files_in_the_default_HTML_editor)
- 背景颜色样式在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中用于保留文档中使用的原始字体。然而，要使其正常工作，您必须在 Internet Explorer 中取消选中以下选项： **工具 : Internet 选项 : 常规 : 辅助功能 : 格式 : 忽略网页上指定的颜色**

要了解更多关于高效表述的内容，请阅读： [有效学习：知识表述的 20 条规则](http://www.super-memory.com/articles/20rules.htm)

### 图片

- **重要的图片应保存在图像 [组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") 中（而不是 HTML 文本内）**。使用 _Ctrl+V_ 或 _Shift+Ins_ 从剪贴板粘贴图片。您可以将图片粘贴到新的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 或图像 [组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") 中。请勿将图片粘贴到 HTML 中。将图片粘贴到图像 [组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") 中，可以方便地调整大小、平铺、适应或移动图像，以及更改其属性，如拉伸、透明度、显示时间（例如，仅在回答时显示）等。粘贴或导入到图像 [组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") 的图片存储在图像 [注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry") 中，可以通过名称进行搜索。它们可以在多个 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 中重复使用。它们会自动用于说明所有从包含该图片的文章生成的 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 和 [填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 。在编辑文本等过程中，它们不容易丢失。[HTML 组件](https://help.supermemo.org/wiki/HTML_component "HTML component") 可以保留存储在网络上的远程图片，但自然地，一旦图片从远程服务器移除，您将失去它们。
- 使用 **下载** 与 **插入** 或 **本地化** 在 **[下载图片](https://help.supermemo.org/wiki/Component_menu#Download_images "Component menu")** 中的 [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") （_Ctrl+F8_）将远程图片传输到您的硬盘
- 使用 **重命名 (成员)** (_Alt+R_) 为图片赋予有意义的名称，以便在图像 [注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry") 中轻松搜索
- 要搜索图片，请使用 **[搜索](https://help.supermemo.org/wiki/Search_menu "Search menu")  : [查找元素](https://help.supermemo.org/wiki/Find_elements "Find elements")** (_Ctrl+F_)。或者，您可以通过图像 [注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry") 定位它：
    1. **[搜索](https://help.supermemo.org/wiki/Search_menu "Search menu")  : [图片](https://help.supermemo.org/wiki/Search_menu#Images "Search menu")** （打开图片[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry") ），并且
    2. _Ctrl+S_ 用于搜索注册表（与 **[搜索](https://help.supermemo.org/wiki/Registry_menu#Search "Registry menu")  ：查找文本** 在 [注册表菜单](https://help.supermemo.org/wiki/Registry_menu "Registry menu") 上相同）
- 如果您希望图片成为答案的一部分（即在提问时不可见），请在图片上标记为 **[答案](https://help.supermemo.org/wiki/Component_menu#Answer "Component menu")** ，并在 [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") 中进行设置。

要了解更多关于使用图片的信息，请参见： [视觉学习](https://help.supermemo.org/wiki/Visual_learning "Visual learning")

### 参考文献

查看： [使用引用的提示](https://help.supermemo.org/wiki/References#Reference_system_highlights "References")

### 你自己的发现

在增量学习中，您会很快发现自己对学习过程的一些想法可能并不是最佳的。以下是您在前2-3个月的密集增量学习中会自己发现的一些事情：

- 识记对你的考试有帮助，但在长期内，回忆对你的专业技能至关重要
- 手动组织复习的时间并不是最适合你的记忆；实际上，这与 SuperMemo 的理念正好相反，SuperMemo 认为你应该在有助于巩固记忆的时刻进行复习
- 手动组织复习顺序并不是最适合你的记忆方式（尽管[子集复习](https://help.supermemo.org/wiki/Subset_review "Subset review")在 SuperMemo 中是准备考试时非常有用的工具）
- 对于初学者来说，传统学习在短期内（可能是 1-2 个月内）可能优于 SuperMemo，因为学习曲线较陡。您需要学习[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的工具集，才能获得其好处（除非您采用简单的问答学习，在这种情况下，SuperMemo 甚至在一周的时间内也可能更优）。
- 在不推迟复习的情况下，您可能在 1-2 周内达到 95%的回忆率。然而，如果您一次性将 1,000 页主题投入到学习过程中，您将无法按 SuperMemo 的计划复习所有这些材料，您的记忆保持率可能会在 60-80%之间徘徊，这取决于您在重复学习上投入了多少时间。
- 一旦 SuperMemo 对你的记忆和习惯有了一定了解（1-3 周），你的回忆率将在第一次重复时 oscillate around 95%（如果你不[延迟](https://help.supermemo.org/wiki/Postpone "Postpone") ，并且遵循[知识表述规则](http://www.super-memory.com/articles/20rules.htm) ）
- 你会很快发现，在单个段落中使用多个[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")并不是一个好主意（例如，比较[测量的遗忘指数](https://help.supermemo.org/wiki/Glossary:Measured_forgetting_index "Glossary:Measured forgetting index")与具有相同填空关键词分开的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ，或者看看这样获得的知识在实践中是如何运作的）。
- 您可以查看 SuperMemo 中的学习参数，以了解不同的学习方法如何影响您的进展

## 增量阅读的优势

在增量学习中，你学习得很快，获取大量知识，终生保留记忆，几乎记住你所学的所有内容，更好地理解事物，各方面和谐发展，增强你的创造力，同时享受无与伦比的乐趣！如果这听起来太美好而不真实，请继续阅读下面的内容，或者亲自尝试一下。

### 大规模学习

增量学习提供了同时学习大量主题的可能性。在传统阅读中，通常必须完成一本书或一个学科后才能学习另一本书或另一个学科。而通过增量学习，几乎没有限制你可以同时学习多少个主题。处理知识的量可能是惊人的。只有时间的可用性和你的记忆容量才能控制大规模学习。

### 终生记忆

由于增量学习基于[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition") ，因此在学习过程中形成的所有记忆将无限期地受到遗忘的保护。请参见：[SuperMemo 的一般原则](http://super-memory.com/english/princip.htm) 。只有 [SuperMemo](https://help.supermemo.org/wiki/SuperMemo "SuperMemo") 使得实现[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")成为可能。增量阅读需要持续的[知识保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") 。根据程序中知识流的量，阅读同一篇文章的各个部分之间的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")可能从几天延长到几个月甚至几年。**SuperMemo ( [重复间隔](http://super-memory.com/english/ol/background.htm) ) 提供了[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的基础，这基于在阅读间歇期间不会消退的稳定记忆痕迹**

### 高保留率

在增量学习中，学习材料的复习由一种称为 SuperMemo 方法的[间隔重复算法](https://help.supermemo.org/wiki/Glossary:Computational_spaced_repetition "Glossary:Computational spaced repetition")控制。该算法默认确保 95%的知识[保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") 。这个比例可以通过增加时间成本（即更频繁的复习）来提高。 [保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")也可以减少，以提高整体学习速度。在负担过重的[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中，95%的保留率仅指最高优先级的材料。为了节省时间，低优先级材料的复习频率可能会降低，从而导致较低的[保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") 。

### 理解

获取新知识的一个限制因素是理解的障碍。在大脑中建立知识就像拼装拼图。有些拼图块在其他拼图块之前无法放入。有些拼图块依赖于其他拼图块。在你了解什么是_标准模型_之前，记忆关于_希格斯玻色子_的事实是没有意义的，而这又应该建立在对_粒子物理学_的基本理解之上，而这本身又需要一些_物理学基础_ 。在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，如果你遇到与_希格斯玻色子_相关的文本，你可以手动推迟它，直到你希望你的_物理学基础_能够为理解玻色子提供基础。在传统阅读中，你只会浪费时间在复习_希格斯玻色子_的材料上，因为你没有工具在较长的文章中有效地重新安排和重新优先考虑你的阅读。传统上，你跳过材料的决定不会提供未来回到跳过材料的明确方式。通过[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ，你不会浪费时间阅读你不理解的材料。 您可以安全地跳过部分材料，并在未来再返回去。您成为了有意识的知识构建过程的主人。您可以逐步建立对复杂现象的理解。

所有书面材料，根据读者的知识水平，都会在准确解读其含义时带来一定的难度。这在使用复杂符号丰富语言的高度专业化科学论文中尤为明显。符号丰富语言是一种通过使用高度专业的词汇和符号约定来实现简洁的语言。对于普通读者来说，符号丰富语言可能会成倍提高词汇能力的门槛（即理解所需的词汇知识）。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")使得可以推迟处理那些需要先前知识的文章、段落或句子，这些知识在阅读时并不为人所知。学习材料的处理只有在新信息开始舒适地融入读者的知识结构时才会进行。然后，您可以逐渐通过这些材料，逐步从基本或简单的事实构建对知识的理解，直到达到更详细或更复杂的知识组件。 你将建立理解，解决矛盾，并最终创造性地发现关于所学材料的新真理。随着时间的推移，你将优化心中知识的结构，使其在连贯性、完整性和表现上更加出色。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")将使你能够处理那些可能看起来难以阅读的最困难的材料。

### 均匀进展

学生将不再专注于单一的学习科目，而是在一天内复习数十个学科领域。学生不会将自己的知识垄断于某一专业领域，而是会根据需求和/或兴趣和谐地加深对所有知识面向的理解。知识树的生长也将受到个人学科当前理解水平的指导，按支持知识和专业术语的增长比例进行。知识树不会只生长几根粗壮的枝干，而是会在所有可能的方向上生长细枝，同时仍然为树干和主枝增加厚度。增量学习本质上无法培养出从未听说过库伊伯带的医学专家，或对基本健康饮食毫无概念的天文学家。SuperMemo 帮助你优先获取各个领域的知识。它还帮助你微调专业化与通识知识之间的平衡。另请参见 SuperMemo 如何防止视野狭隘。

### 创造力提升

创造力的关键在于远程思想的联想。通过以不可预测的顺序学习多个学科，你将增强联想思想的能力。这将极大地提高你的创造力。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")可以比作与自己进行头脑风暴。SuperMemo 会以最意想不到的顺序向你抛出各种文章、段落、陈述和问题。从长远来看，最大的创造性优势来自于永久存储在你记忆中的知识（与需要 [Google](https://google.com/) 的知识相对）。不同知识片段的联想形成新质量，只需付出创造性的努力和投入时间。这也将为你的大脑提供一种有趣的心理训练形式，这在所有基于智力表现的职业中都将受到高度赞赏。

通过[增量邮件处理](https://help.supermemo.org/wiki/Incremental_mail_processing "Incremental mail processing") ，您还可以将学习、 [创意写作](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_writing "Creativity and problem solving in SuperMemo")和[创意问题解决](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_problem_solving "Creativity and problem solving in SuperMemo")与其他人进行创意邮件交流。这在集体问题解决或复杂项目中可能显得有帮助，当您需要在专注的个人工作和团队集思广益之间找到平衡时。这个过程被称为[增量头脑风暴](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_brainstorming "Creativity and problem solving in SuperMemo") 。 [增量头脑风暴](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_brainstorming "Creativity and problem solving in SuperMemo")的速度较慢，但不需要同步（生物节律、时区、动机等），您也不需要打断彼此的工作。 [增量头脑风暴](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_brainstorming "Creativity and problem solving in SuperMemo")永远无法替代面对面的互动协作，但它具有许多与增量学习相关的优势（创造力、 [优先级](https://help.supermemo.org/wiki/Incremental_learning#Prioritization) 、 [注意力](https://help.supermemo.org/wiki/Incremental_learning#Attention) 、 [细致入微](https://help.supermemo.org/wiki/Incremental_learning#Meticulousness) 、长期可行性等）。它可以提供出色的基于知识的补充，或者成为您在远程工作时（尤其是跨时区）最佳的创意协作工具。 The creative process is unpredictable, and when you hit your best ideas when the rest of the team is asleep, it makes a good sense to strike the iron while hot: employ creative elaboration and send your idea out.

有关增量学习在创作过程中的应用，请参见：

- [增量问题解决](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_problem_solving "Creativity and problem solving in SuperMemo")
- [增量写作](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_writing "Creativity and problem solving in SuperMemo")
- [增量头脑风暴](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_brainstorming "Creativity and problem solving in SuperMemo")
- [神经创造力](https://help.supermemo.org/wiki/Neural_creativity "Neural creativity")

### 一致性（解决混乱和矛盾）

学习材料中的矛盾和混乱源于不良来源、错误、科学上的分歧，或者是因为你从导入一组无关或甚至混乱的文章开始这个过程，这些文章描述了一个复杂问题。

如果你的学习材料包含矛盾的信息，你的大脑会迅速提醒你这一事实。在传统学习中，你常常会重新学习与之前学到的事实相矛盾的新事实。然后你会再次学习旧版本，这种浪费的循环可能会重复多次。在 SuperMemo 中，类似的过程也会发生；然而，会有两个机制将混乱和矛盾转变为自我限制的状态。第一个机制依赖于 SuperMemo 中**知识的高[保留率](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")** ，这通常会让你瞬间发现矛盾： _等一下！我已经学过这个事实，答案是不同的！_ 不幸的是，即使是 SuperMemo 也无法完全避免矛盾（你的[保留率](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")实际上从未达到 100%）。第二个机制是**矛盾材料的时间收敛** 。例如，如果你学习了两个不同的答案来回答_人类人口的规模是多少？_，比如 _55 亿_和 _60 亿_ ，你自然会对其中一个问题提供错误的答案。 一旦你以新的方式重新学习它，你将对另一个问题提供错误答案。这两个矛盾的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的重复间隔[时间](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")将在每个重新学习周期中变得更短。矛盾的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的重复在时间上会趋于一致。迟早，你的大脑会发出红色警报。你会迅速解决这个差异并删除其中一个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 。类似的过程也会影响模糊或不完全指定的信息。随着时间的推移，你的知识将变得更加一致。

在科学研究、获取工程知识、研究狭窄的兴趣主题等方面，我们不断面临着一片混乱，充斥着各种不同且常常矛盾的陈述。通过将新研究的混乱引入 SuperMemo，您将逐渐发现矛盾，并努力在记忆中构建更好、更一致的模型。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")[随机地](http://www.dictionary.com/search?q=stochastic)[并列](http://www.dictionary.com/search?q=juxtapose)来自各种来源的信息片段，并利用人类记忆的联想特性来强调并解决矛盾。您将迅速倾向于那些更有研究结果支持的理论。那些支持较差的理论将不够稳固，常常会导致回忆问题。当然，您也可能希望学习矛盾的陈述。例如，持不同意见的科学家的观点。在这些情况下，SuperMemo 将帮助您强调丰富背景的必要性。您将用支持者的名字或思想流派标签来标记各个陈述。

### 无压力

观察者和新的 SuperMemo 用户认为， [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的复杂性必然会带来压力。一些人报告说， [甚至阅读关于增量学习的内容也会感到压力](https://help.supermemo.org/wiki/Incremental_learning#SuperMemo_user's_opinion:_Why_I_do_not_use_incremental_reading?) 。然而，尽管复杂性总会导致一定程度的压力或困惑，但从长远来看，事实恰恰相反：SuperMemo 帮助你对抗压力。无压力学习是增量学习最大的优势之一。本节列出的所有优势都促进了乐趣和放松的感觉。然而，SuperMemo 对抗信息过载的能力可能是主要因素。相反，低压力水平对学习的有效性有着奇妙的影响。

并不是每个人都因信息过载而感到压力。体验到阅读或学习过多而产生压力的前提条件是：对知识的强烈渴望、对无法跟上的恐惧、对新知识的迫切需求等。根据多项研究，这一前提条件在很大比例的普通人群中是存在的，而在年轻个体中，包括学生，这种情况实际上更不可能，因为他们的学习动机不那么固定，从而使他们免受压力的影响。

最近 coined 的术语 _信息疲劳综合症_ 是用来指代因管理过量信息而产生的压力。英国心理学家大卫·刘易斯博士列出的一些 IFS 后果包括：焦虑、紧张、拖延、浪费时间、失去工作满意度、自我怀疑、心理生理压力、关系破裂、分析能力下降等。信息时代往往让我们感到被迫处理大量信息而感到不堪重负。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 不需要对要阅读的文章做全有或全无的选择。全有或全无的选择是有压力的！ _我能否跳过这篇文章？我已经好几个月没时间阅读这篇文章了！_ 等等。SuperMemo 帮助你优先处理并部分跳过文章（通过决策）或自动跳过（即在后台）。通常，阅读一篇文章的 3% 可能提供其阅读价值的 50%。文章的阅读可以在没有你参与的情况下延迟，即不是由于压力拖延，而是由于与其他信息片段在其 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 基础上的竞争。 在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，你不再犹豫或拖延，而是简单地进行优先排序。

如果你恰好在网页浏览器中打开了十几个标签页，你常常会对最佳行动方案感到压力。你可能会晚睡，或者上班迟到，但你又不想失去这些信息。在 SuperMemo 中，你只需[导入](https://help.supermemo.org/wiki/Incremental_learning#Skill_1:_Importing_articles) &优先排序。或者只需[导入](https://help.supermemo.org/wiki/Incremental_learning#Skill_1:_Importing_articles) 。没有任何信息会丢失。你将在学习时间分配允许的情况下，立即遇到导入的材料。同样，你可以在几小时内清理掉 1,000 封邮件的收件箱，所有邮件都经过良好的优先排序并安排了复习。

一旦你知道可以依赖 SuperMemo 来为你呈现复习材料，你就可以消除与学习或阅读过多相关的压力和焦虑。你永远无法阅读或学习所有你希望掌握的内容，但至少你不会因为计划和安排而失眠。SuperMemo 是你潜力最佳利用的承诺。怀着这种信念，你可以将所有精力投入到对所学材料的理解、分析和[记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")中。

SuperMemo 帮助你减轻大量信息过载带来的压力。在典型的 IFS 压力治疗中，你会发现细致的笔记、整理桌面、规划工作、保持约会日历等都有很强的治疗价值。SuperMemo 正是这样做的：它帮助你保持一份细致且优先级明确的阅读记录，并消除获取信息和学习所收集材料过程中的压力混乱。SuperMemo 消除了无序和随之而来的不确定性，这通常是网络上疯狂搜索信息的特征。

### 注意

人脑对注意力的持续时间有内在的限制。我们都会对事物感到厌倦。这在孩子身上尤为明显。有限的注意力有助于最大化学习输入。这就是为什么大多数玩具的使用寿命很短，而其他孩子的玩具似乎总是更有趣。阅读也是如此。即使是最好的文章，如果太长也会让人感到疲惫。每天都有数百万人在电视上进行频道切换。这种荒谬的活动正是由于对密集行动和信息多样性的渴望。对于典型的频道切换者来说，一部引人入胜的电影会显得“太慢”。这就是为什么他们更喜欢同时观看三部电影（尽管每部电影的情节连贯性会受到影响）。增量学习是应对有限注意力的完美良方。即使是一篇文章中的一个不幸段落，也可能大大降低你阅读的热情。如果你碰到几个令人沮丧的段落，你可能会逐渐对阅读某篇特定文章产生厌恶。你甚至可能会对整个晚上阅读感到厌烦。

在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，一旦你感到无聊或分心的迹象，就可以跳到下一篇文章，这主要带来积极的副作用（主要体现在通过间隔学习产生的更好记忆）。与频道切换不同，你不会错过任何信息。恰恰相反，你将最大化每段的注意力。你对同一信息的关注可能取决于你的情绪、之前的阅读量、今天的兴趣，这可能取决于你早上在收音机上听到的新闻等。通过[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ，你可以将最佳注意力集中在每一篇阅读材料上。你可以根据你的生理节律状态（即一天中的时间、心理能量等）改变方法。你可以降低那些削弱注意力的文章的优先级。你可以将令人生畏的文章拆分成更易管理的部分。注意力的提升是[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")比普通阅读更有趣的主要原因之一。

### 巩固

我们所学的每一件事都必须不时地复习，以便被记住。如果你在[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")中阅读一篇文章，你已经开始了记忆的巩固，这可以为你节省大量时间。在传统阅读中，你需要先阅读整篇文章，然后再多次复习这篇文章。使用早期版本的 SuperMemo 时，你需要先阅读整篇文章，然后仅在程序确定的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")中复习文章中最重要的部分。现在你可以在阅读时就开始巩固复习循环！ [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")将提取有价值知识的过程与记忆巩固结合在一起。这种预巩固通常会显著减少在你的材料被复习之前所需的重复次数，时间可以长达几个月和几年。当你将材料的部分内容转换为[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")或问答[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")时，你已经将其很好地巩固了。 这种巩固将基于扎实的背景、一定程度的冗余（有助于[记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") ）以及基于[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的易记公式。从更大知识体中提取信息片段为您的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")提供了所有相关的背景。这种慢慢凝聚知识的过程增强了个别信息的意义和适用性。语义上等价的信息片段可以在不同的背景中进行整合，增加它们的联想能力的额外角度。换句话说，您不仅会记得更好，还能够从不同的角度看待相同的信息。

### 优先级排序

你总是有一长串文章等待阅读，而且总有比你能记住的更多的文章。在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，你可以精确地确定每篇文章、段落、句子或问题的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。评估文章并对其进行优先排序是困难的，因为你无法在没有实际阅读相关部分的情况下进行良好的评估。在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，你可以先阅读引言，然后决定何时阅读其余部分。如果一篇文章极其有价值或有趣，你可以一次性处理它。其他文章可以慢慢地通过学习过程。而有些文章可能最终会被删除。在你阅读文章的过程中，优先级排序将持续进行。如果在阅读过程中质量或内容的评估发生变化，阅读-复习的计划也会随之改变。

优先级工具将确保重要信息能够得到更好的处理。这将最大化您阅读时间的价值。这也将减少材料过载对[记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")的影响。您将始终记住您最高优先级材料的期望比例。而较低优先级的材料可能会更容易受到过载的影响，记忆也会不那么准确。文章的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")并不是一成不变的。您可以在阅读时根据从特定文章中提取的价值手动修改它。每次生成文章[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")时， [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")也会自动变化。如果您推迟或提前安排的阅读， [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")也会发生变化。 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")由文章的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")决定。由单个句子产生的问题和答案的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")由其父级[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")决定。多个优先级工具将帮助您有效应对学习重点的重大变化。借助优先级工具，您始终可以用数字确定您的学习重点！

这是关于[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")最重要的事情之一：高效地捕捉黄金知识的片段！

### 阅读速度

增量阅读者在阅读速度上可以超过速读者！即使对于相对初学者，几乎没有速读训练，这也是事实。需要注意的是：这一切都是以延迟理解为代价的。在速读中，你总是需要担心理解水平。高理解力是速读技巧至关重要的地方。然而，在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，你可以快速浏览文本中不太重要的部分，而不必担心会错过细节。被浏览的片段将被安排在稍后复习。你可以选择确定复习的时间和[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") （低优先级的复习可能会进一步延迟，通常是自动的）。你可以快速从段落跳到段落，获取整体概念，标记片段以便稍后阅读，标记片段以便详细研究，等等。这种速读方法经过一些训练后是无压力的。你将消除速读中最大的瓶颈：害怕错过重要信息。当你在未来回到被浏览的片段时，它们可能已经变得不相关或不那么重要。 这就是[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")所带来的时间节省之一。你始终专注于最优先的材料，几乎不需要担心那些留待后续阅读的内容。 **[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")是快速阅读而不损失理解力** 。一旦你快速阅读了整篇文章，你可以在增量阅读过程中从头开始慢慢消化它。无需多言，快速阅读在长期[记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")方面远不及[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。记忆总是会受到遗忘的影响。你在阅读时收集的所有有价值的信息都可能在任何时候被遗忘。那些在没有 SuperMemo 的情况下（例如，通过定期使用）仍能保留的内容，产生的工作量最小。其他内容则会让你无需再回到相关的文章。总之，所有你在长期内需要的知识，最好通过[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")来获取。 传统阅读仍然可以用于娱乐、临时知识（例如如何安装声卡）、好奇心（例如新闻）等。这并不是说速读技巧在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中没有用处。如果你已经是一个扎实的速读者，你可以借助[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")来提高你的速度和理解能力。在这个过程中，你将进一步磨练你的技能，成为一个更快的阅读者。

另见： [增强版速读](http://super-memory.com/articles/speedread.htm) ，其中也解释了主题复习成本变化的钟形曲线。

### 项目制定的速度

[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")是将文本转换为[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的最快工具。除了大量导入外，您还可以将自己的粗略笔记引入 SuperMemo，并随后逐渐将其转换为结构良好的知识。较不重要的材料可能会保持非结构化，因此记忆效果较差。您将看到被动笔记如何逐渐在记忆中消退，以及它们的各个组成部分如何需要通过制定具体的结构良好的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")来加强。您将根据消退材料的重要性和回忆问题的程度逐一做出这种加强决策。自然，由于典型的学习过载，您总会忽视一些材料。这就是您获得额外速度的方式，理解为每个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")所投入的时间。您将更快地生成[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ，更轻松地重新制定它们，并通过忽视不太重要的材料来节省额外的时间。这就是通过制定优先级。较不重要的材料将保持在一个处理较少且更混乱的状态，特征是较低的[保留率](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") 。

### 细致入微

通过优先排序的信息流，您可以以较小的块接收知识。这使得您能够真正专注于最重要的部分，并发现那些在大量学习中永远不会被注意到的事物。良好的注意力带来了细致和创造性的发现。换句话说，这是一种优先排序、注意力和创造力优势的结合，带来了一个新的转折：注意到在大量学习中难以察觉的事物。

### 训练

通过大量的[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ，你将磨练一套对高效学习至关重要的技能。通过日复一日、年复一年地反复进行相同的程序，你将成为处理和保留知识的高手！ **如果你想把事情做好，就要经常去做** 。以下是一些将得到提升并改变你学习的技能示例：

- **一眼识别合适的文本** 。有些文本适合高效阅读，有些则充满了废话和冗余。你需要快速预览和优先排序的文章越多，你的速度就会越快，准确性也会提高。这是一个专家模式识别的练习。
- **有效地形成知识** 。在学习效率方面，良好表述和表述不佳的 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 之间的差异可能高达 1:10 甚至 1:100。一些 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 是助记的。其他则令人困惑。有些在一生中只需重复 5-6 次。其他则永久存在于 [吸血虫](https://help.supermemo.org/wiki/Glossary:Leech "Glossary:Leech") 中，反复出现以供复习，浪费你宝贵的时间。
- **记忆技巧** 。你越是尝试记住，越能更好地掌握快速和长时间记忆事物的方法。记忆技巧可以通过专门的课程来培养。每一个你制定和记忆的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")也能提升这些技巧。
- **速读技巧** 。快速阅读是增量学习的标志。传统的速读与使用 SuperMemo 的速读截然不同。你几乎不需要担心错过信息。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")没有典型的随机速读所带来的负担。浏览速度没有限制。掌握键盘和眼睛的[扫视](https://en.wikipedia.org/wiki/Saccade)同样重要。你浏览得越多，浏览得越好。你越急，浏览得越多。增量学习加速了你对知识的渴望，以及你吞噬知识的速度。
- **语义技能** 。语言就像一个拼图，由单词和短语组成，遵循一定的语法规则。理解语言对于快速阅读至关重要，因为句子的结构需要在瞬间被解析。 在 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 中，正确的 [填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 形式通常需要进行小幅度的改写。就像拼图一样，你需要将一个词从这里移动到那里，删除句子的某些部分，插入上下文，改变时态，消除指代模糊等。掌握语法句子的框架和语义将随着每一个为长期记忆而精炼的新 [填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 而不断提高。
- **优先级技能** 。然而，新学生，无论多聪明，往往对知识的优先级完全无知。他们无法判断自己当前和未来知识的程度。他们很难区分黄金和垃圾。如果看似珍贵的知识未能通过优先级测试，确保其能够被掌握，那么它就会变成垃圾。人脑的终身容量是有限的。没有理解这些限制，新进入增量学习的人往往会开始一场徒劳的追求，试图掌握那些会占用对个人生存（职业及其他）至关重要的记忆空间的细节。随着每个月的过去，以及你知识和你的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") （即“待掌握的知识”）规模的不断增加，你将更好地理解自己的最终限制。你的知识选择技能将在未来几年内不断提高。
- **编辑和 SuperMemo 技能** 。SuperMemo 是复杂的。完全探索它需要几个月的时间。SuperMemo 也以键盘为导向。键盘快捷键的列表令人不知所措。只有掌握键盘和 SuperMemo 本身，你才能成为真正的增量学习专家，能够每小时快速浏览数十篇文章。你将编辑数十个小文本，以最佳方式制定你的问题。速读和语义技能结合编辑技能将帮助你瞬间调整你在[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中的文本，以适应你的长期目标。

### 知识数据库

一旦你的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")在各个领域的材料中变得丰富，你可以在使用 [Google](https://google.com/) 搜索你已经想要学习的材料主题之前先使用它。搜索结果可能不会那么丰富，但会更加集中于你感兴趣的领域。在进行[搜索&复习](https://help.supermemo.org/wiki/Subset_learning#Search_and_review "Subset learning")时，你将能够在许多领域减少未来的工作量。这很有趣！

### 一体化档案

一旦你熟练掌握 SuperMemo，你可以将其用作所有媒体文件的全面档案。这些文件不需要成为学习过程的一部分，然而，你可以将归档功能与增量过程结合起来（例如，在注释你的家庭相册[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")时）。SuperMemo 可能是摆脱那些尘封的纸质文件、录音带、CD、相册、学校笔记本等的好方法。你可以将这些文件归档到计算机上的专用文件夹中，并将其全部导入 SuperMemo。归档的增量处理有许多优点。例如，在注释两个世纪前的家庭照片时，你可以通过简单的人脸识别填补信息的空白，这可能依赖于一定程度的学习或将来自不同来源的照片进行创造性的并置，时间间隔很近[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") 。 [增量音频](https://help.supermemo.org/wiki/Glossary:Incremental_audio "Glossary:Incremental audio")还可以将你的 SuperMemo 点唱机转换为一串充满乐趣的音乐流。你可以通过文件名、日期、注释、优先级、最近观看等方式对媒体播放器设备上的曲目进行数百万种排序方式……但这些都无法与增量复习过程相提并论。 这是因为在处理音乐或照片时，您的体验质量基于影响学习的相同遗忘机制。您希望比其他事物更频繁地看到或听到某些东西，但又不希望过于频繁。 遗忘是再次体验音乐、图像或视频时获得更高乐趣、愉悦感的关键，最后但同样重要的是，学习。

### 乐趣

生产力的感觉可能是最令人满意的情感之一。这就是为什么增量学习应该是非常愉快的。这只会放大它的力量。要体验增量学习的喜悦，您可能需要几个月的专注练习。您首先需要从基本工具和技术开始。然后，您需要掌握[知识表示技能](http://super-memory.com/articles/20rules.htm) 。最后，您需要几个月的高强度增量学习，以完善细节并发展自己的“增量学习哲学”。您还需要扩展您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") ，因为学习的乐趣与规模有关。最后但同样重要的是，增量学习需要良好的语言技能、一定的盲打技能和耐心（SuperMemo 通常会让您违背自己的直觉）。尽管材料最初是从电子来源导入的，但它始终需要被塑造、缩短、提供上下文线索、重新结构以适应措辞和语法等。所涉及的技能并不简单，需要练习。

如果您使用过 SuperMemo 和/或 [间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition") ，您可能会得出结论，使用 SuperMemo 学习是无聊的，因为它的重复性。那些能够将经典 SuperMemo 与增量学习进行比较的人会证明，增量学习要有趣得多。与经典 SuperMemo 侧重于旧材料的复习不同， [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 将旧知识与新知识交织在一起。新颖性增加了学习的乐趣和效率。增量学习远比典型的重复更具挑战性和多彩性。除了复习和阅读，您还可以导入丰富的图形、音频和视频，以丰富您的学习过程。

最终，你可能会严重上瘾于增量学习。声明“ _我不读书_ ”不应再被视为负面！只要你理性地控制增量学习，它将对你和你周围的人带来好处。

## 缺点

增量学习的大多数缺点来自于几乎所有人类追求中的不利因素：机会成本和间接成本。然而，还有一些缺点源于[增量学习并不适合每个人](https://help.supermemo.org/wiki/Incremental_learning#Incremental_learning_is_not_for_everyone) 。知识选择不当可能导致在低质量学习上浪费时间。此外，增量学习可能会导致挫折、压力、上瘾、强迫使用以及对用户心理的其他不良影响。

以下是需要考虑的缺点简要列表：

- **机会成本** ：每次你使用 SuperMemo 学习时，你就没有在做其他事情。你可能忽视了你的创造性追求、其他人、你的孩子、你自己的健康等。增量学习只有在与其他活动的比例正确时才有意义。这个比例将取决于你的技能、目标、职业、生活方式、个性等。你需要自己找到最佳平衡。可能只需要几分钟来提升你的英语或专业知识。或者如果你是医学生，可能需要几个小时。你始终需要考虑机会成本，并记录成本和收益。
- **间接成本** ：在增量学习中，陡峭的学习曲线是无法避免的。你会受到软件限制和概念整体复杂性的阻碍。你会想知道为什么 SuperMemo 中的某些解决方案与你的最佳直觉相悖。你会在漫长的几个月和几年中不断提高你的技能和策略。即使掌握基本技巧也需要花费大量时间。在开始这个过程之前，你应该意识到这种困难，这个过程注定会在开始时带来一些压力和挫折。同时，你应该对专业人士的情况抱有希望，因为间接成本是微不足道的。所有额外操作都是半自动的，而学习过程在学生的脑海中基本上是连续进行的。当输入指令时，知识正被记忆系统积极处理。所有操作都已针对专业使用进行了优化。一旦你达到专业水平并遵循推荐的策略，间接成本的劣势将不再重要。
- **学习垃圾** （GIGO）：如果你选择的学习材料质量差，或者你的表述能力不足，你就有可能浪费大量时间在学习那些不需要的东西上，或者那些没有带来明显记忆效果的内容。这就是为什么你必须阅读[知识表述的 20 条规则](http://super-memory.com/articles/20rules.htm) ，时刻牢记[知识选择](https://help.supermemo.org/wiki/Incremental_learning#Selecting_knowledge) ，并对你的[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")保持诚实。
- **挫折和压力** ：增量学习并不适合每个人。它需要一定的语言熟练程度，这对某些人来说可能很难达到。它需要一个具有一定抽象思维能力的头脑。你在数学或科学方面表现得好吗？这些都是好兆头。如果在几个月的努力学习后，增量学习仍然没有乐趣，你需要全神贯注地重新阅读这篇文章。否则，你的增量学习之旅将不会有成果。

**增量学习一定要有趣！**

## 增量阅读：总结

- 如果你认真对待学习，你必须学习[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ！没有它，你可能会错过 SuperMemo 中最精彩的部分！
- [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")使得可以并行阅读数千篇文章而不至于迷失。
- 使用 **提取** (_Alt+X_) 和 **填空** (_Alt+Z_) 在阅读时提取最有价值的知识片段。使用键盘以获得最大速度。然而，如果您是 SuperMemo 的新手，您也可以使用 [学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar") 来完成这项工作。
- 标准重复和[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")应当交替进行。这有助于增加多样性和创造力。 **[自动排序重复](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort")**将对你的重复进行排序，引入微小的随机性，并确保新文章以稳定、适度和优先的方式流入学习过程。了解更多关于[优先队列](https://help.supermemo.org/wiki/Priority_queue "Priority queue")的信息。
- 您可以通过修改[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") （_Shift+Ctrl+R_ 或 _Ctrl+J_）、 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") （_Alt+P_）和[遗忘指数](https://help.supermemo.org/wiki/Glossary:Forgetting_index "Glossary:Forgetting index") （例如 _Shift+Ctrl+P_）来控制[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中的复习时间和优先级。
- 使用 [阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point") (_Ctrl+F7_)、良好的标题 (_Alt+T_)、参考标签 (_Alt+Q_) 和手动插入的上下文线索，以最小化 _上下文恢复开销_ （即回忆单个问题的正确上下文的成本）。
- **[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone")**将自动延迟低优先级材料的复习。使用 **[推迟](https://help.supermemo.org/wiki/Postpone "Postpone")** 来手动处理 [超负荷](https://help.supermemo.org/wiki/Glossary:Overload "Glossary:Overload") 或定义推迟标准。
- 不要忘记查看 [20 条知识表述规则](http://super-memory.com/articles/20rules.htm) ，以确保你不会在糟糕的材料上浪费数小时。

# 参考文献

## 为什么需要参考文献？

在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，您始终需要快速恢复问题或文本的上下文。快速恢复上下文的最简单方法是通过引用。引用在您生成[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")和[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")时，从[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")传播到元素。通过将所有来自给定文本的[子元素](https://help.supermemo.org/wiki/Glossary:Child "Glossary:Child")标记为引用，您将不必担心丢失问题的上下文。

例如：

**问** : 他出生于 [...](年份)

无法在没有上下文的情况下回答。然而，以下问题已经更容易理解：

**问** : 他出生于 [...](年份)

---

#标题: 巴拉克·奥巴马  
#来源: 维基百科

为了加快学习，在增量阅读过程中，上述问题应自然地被替换为：

**问** : 奥巴马出生于 [...](年份)

或

**问** : 奥巴马出生于 [...](年份)

---

#标题：巴拉克·奥巴马  
#来源: 维基百科

引用并不存储在包含您文章的 HTML 文件中，而是存储在一个引用[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中（即在一个单独的数据库中）。引用注册表也不保存引用的文本。所有引用文本都保存在文本[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中，并可用于全局文本搜索。在早期版本的 SuperMemo 中，每个文本会保留自己的引用副本。在较新的 SuperMemo 中， [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")仅保留指向引用[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")的指针，而引用注册表则保留指向文本注册表中各个文本字段的指针。因此，许多[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")可以持有相同的引用，许多引用可以持有相同的文本。这在您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中显著节省了空间。更重要的是，您可以在单个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")中更新引用，并在所有使用相同引用的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")中看到更改。这样，您就不需要浪费时间进行搜索和替换，以纠正传播到许多[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")中的单个拼写错误或引用不准确。

## 示例

如果您选择源文章的标题并按下 _Alt+T_ （在 HTML **[参考](https://help.supermemo.org/wiki/Component_menu#Reference "Component menu")  : 标题**的 [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu")上），每个 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 将会被源文章的标题标记。如果您使用 **[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [网页导入](https://help.supermemo.org/wiki/Web_import "Web import")  : 全部** ，您的文章将提供基本参考（如 #标题 、#链接 、#日期 等）。如果您需要更多上下文（例如添加作者、期刊等），您可以使用参考链接按钮 (  [![SuperMemo: Reference button on the navigation bar in the element window](https://help.supermemo.org/images/9/9e/Reference_button.gif)](https://help.supermemo.org/wiki/File:Reference_button.gif "SuperMemo: Reference button on the navigation bar in the element window")) 在 [导航栏](https://help.supermemo.org/wiki/Navigation_bar "Navigation bar") 上跳转到生成该 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 的源文章。在父文章中，该按钮将引导您访问网络上的原始链接。

[![SuperMemo: An extract produced from an article about the greenhouse effect (references (in pink) at the bottom are added automatically)](https://help.supermemo.org/images/thumb/f/f5/Incremental_reading_Extract.jpg/800px-Incremental_reading_Extract.jpg)](https://help.supermemo.org/wiki/File:Incremental_reading_Extract.jpg "SuperMemo: An extract produced from an article about the greenhouse effect (references (in pink) at the bottom are added automatically)")

> _**图：** 典型的[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")快照。在学习温室效应时，学生提取了这样一个片段：“一个理想的热导体[黑体](https://en.wikipedia.org/wiki/Blackbody)与地球距离太阳相同，其温度约为 5.3 °C。然而，由于地球反射了大约 30%[[5](https://en.wikipedia.org/wiki/Greenhouse_effect#cite_note-5)][[6](https://en.wikipedia.org/wiki/Greenhouse_effect#cite_note-6)] 的入射阳光，这个理想化行星的[有效温度](https://en.wikipedia.org/wiki/Effective_temperature) （一个黑体会发出相同辐射量的温度）约为−18 °C。[[7](https://en.wikipedia.org/wiki/Greenhouse_effect#cite_note-7)][[8](https://en.wikipedia.org/wiki/Greenhouse_effect#cite_note-8)] 这个假设行星的表面温度比地球实际表面温度约 14 °C 低 33 °C。[[9](https://en.wikipedia.org/wiki/Greenhouse_effect#cite_note-9)] 造成实际表面温度与有效温度之间差异的机制是由于大气层，称为**温室效应** 。”提取的片段将继承右侧的插图以及文章[参考文献](https://help.supermemo.org/wiki/References "References") 。学生可以通过按 Enter 键继续阅读另一篇文章。 右侧的图片存储在本地的[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中（在用户的硬盘上），可以被重新使用来说明其他文章或问题。_

## 参考系统亮点

- 要将文本标记为参考字段，请使用 HTML **[参考](https://help.supermemo.org/wiki/Component_menu#Reference "Component menu")**子菜单中的[组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") （例如**[参考](https://help.supermemo.org/wiki/Component_menu#Reference "Component menu")  ：选择**或 _Alt+Q_）
- 引用字段 #Article、#Parent 和 #Concept group 会自动添加，并且不会存储在引用 [注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry") 中。这些字段不会在没有其他引用字段定义的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 中生成。
- 标记为 _Alt+Q_ 选项的参考文献会出现在参考字段中，并且可以从文本主体中删除（如果不再需要的话）
- 将鼠标悬停在**参考链接**按钮上（  [![SuperMemo: Reference button on the navigation bar in the element window](https://help.supermemo.org/images/9/9e/Reference_button.gif)](https://help.supermemo.org/wiki/File:Reference_button.gif "SuperMemo: Reference button on the navigation bar in the element window")）以快速查看较长摘录中的参考内容。
- 从用户的角度来看，与早期的 SuperMemo 相比，引用的处理方式几乎没有区别。SuperMemo 2008 或更高版本区分以下两种类型的引用编辑：
    - **本地编辑** 仅影响当前 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 并创建一个新的参考记录与
    - **全局编辑** ，会改变所有使用该引用的元素中的原始引用。

当 SuperMemo 不确定您的编辑是局部的还是全局的时，它会询问您

- 请注意，所有的 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 生成的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 都是原始文章的 [子项](https://help.supermemo.org/wiki/Glossary:Child "Glossary:Child") 。如果您在回忆某个片段的原始上下文时遇到问题，可以通过按下 **父项** 按钮在 [导航栏](https://help.supermemo.org/wiki/Navigation_bar "Navigation bar") 上随时调用它。您还可以使用 **参考链接** 按钮 (  [![SuperMemo: Reference button on the navigation bar in the element window](https://help.supermemo.org/images/9/9e/Reference_button.gif)](https://help.supermemo.org/wiki/File:Reference_button.gif "SuperMemo: Reference button on the navigation bar in the element window")) 访问源文章，或者如果您已经到达源文章，则可以访问网页上的原始文章。
- 如果您选择了空的 #Date 引用，您将用当前的日期和时间戳标记文本
- 在 SuperMemo 中，AND 搜索适用于文本，而不是[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 。这意味着参考文本不参与主文本的 AND 搜索。这可能导致错误的漏检。在 SuperMemo 中，文本和各个参考字段都被视为独立的文本，并且都是独立搜索的。
- 参考文献的格式可以通过样式表进行更改
- 将 HTML 转换为纯文本不会影响引用的格式（即纯文本条目可以通过样式表格式化其引用）
- 您可以在参考区域或通过选择**[参考](https://help.supermemo.org/wiki/Element_menu#Reference "Element menu")  : 编辑**从[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")中打开的专用窗口中编辑引用。您只需在每个引用行的开头使用合法的引用字段标签（例如 #作者：）。如果 SuperMemo 不确定您的更改是否仅应应用于当前[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，还是应应用于所有使用该引用的元素，它会询问您。
- 您可以快速修改（即设置、合并和删除）多个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的引用。要做到这一点，请在[元素浏览器](https://help.supermemo.org/wiki/Browser "Browser")中打开它们，右键单击鼠标并选择：
    - **[处理浏览器>](https://help.supermemo.org/wiki/Subset_operations "Subset operations") : [参考](https://help.supermemo.org/wiki/Subset_operations#Reference "Subset operations")  : 设置参考**以将相同的参考设置为一组元素，
    - **[处理浏览器>](https://help.supermemo.org/wiki/Subset_operations "Subset operations") : [参考](https://help.supermemo.org/wiki/Subset_operations#Reference "Subset operations")  : 合并参考**以将参考字段添加到元素的子集，
    - **[处理浏览器>](https://help.supermemo.org/wiki/Subset_operations "Subset operations") : [参考](https://help.supermemo.org/wiki/Subset_operations#Reference "Subset operations")  : 删除参考**以从[子集](https://help.supermemo.org/wiki/Glossary:Subset "Glossary:Subset")中的所有元素中移除参考字段
- 参考文献不再使您的 HTML 文件杂乱。在过去，参考文献的大小往往超过文本本身的长度。
- 参考 [注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry") 保留了引用（见下文），它们的各个文本字段存储在文本注册表中
- 引用在加载时添加到 HTML 文本中，因此您仍然可以像早期版本的 SuperMemo 一样，在文本底部保留引用
- 将现有引用添加到一个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") （例如，通过**[引用](https://help.supermemo.org/wiki/Element_menu#Reference "Element menu")  ：链接**从[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu") ）不会增加[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")的大小。

**重要！** **请勿在标记参考区域的横线下方添加您自己的非参考文本** 。所有参考字段区域均归 SuperMemo 所有。对该区域的任何修改将视为对参考字段的更改。与参考字段格式不符的更改将不予警告地被丢弃。

[![SuperMemo: References help you quickly recover the context of a given element as well as track its source and build a list of citations (in the picture: blue marks an incremental reading extract, yellow marks a search string (i.e. GABA-ergic), while pink marks the reference field, which will propagate to all children elements (extracts and clozes))](https://help.supermemo.org/images/thumb/5/5b/References.jpg/800px-References.jpg)](https://help.supermemo.org/wiki/File:References.jpg "SuperMemo: References help you quickly recover the context of a given element as well as track its source and build a list of citations (in the picture: blue marks an incremental reading extract, yellow marks a search string (i.e. GABA-ergic), while pink marks the reference field, which will propagate to all children elements (extracts and clozes))")

> _**图：** [参考文献](https://help.supermemo.org/wiki/References "References")帮助您快速恢复给定[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的上下文，并跟踪其来源，建立引用列表。在图片中，展示了一篇关于睡眠和梦境的文章的[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 。 蓝色标记了从所呈现文本中生成的摘录。 黄色标记了在**[搜索](https://help.supermemo.org/wiki/Search_menu "Search menu")  ： [查找元素](https://help.supermemo.org/wiki/Find_elements "Find elements")** （Ctrl+F）中使用的搜索字符串（即 REM-on 细胞），用于查找所有包含该字符串的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") （包括这个）。 粉色标记了参考区域（由 #标题 、#作者 、#日期 、#来源 、#文章 、#父级和 #概念组字段组成），该区域将传播到从此[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")生成的所有[子元素](https://help.supermemo.org/wiki/Glossary:Child "Glossary:Child") （ [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")和[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ）。_

[![SuperMemo: References are kept in a dedicated registry while their individual text fields (e.g. title, author, date, source, etc.) are stored in the text registry, and thus are available for global text searches](https://help.supermemo.org/images/thumb/7/74/Reference_registry.jpg/800px-Reference_registry.jpg)](https://help.supermemo.org/wiki/File:Reference_registry.jpg "SuperMemo: References are kept in a dedicated registry while their individual text fields (e.g. title, author, date, source, etc.) are stored in the text registry, and thus are available for global text searches")

> _**图：** [参考文献](https://help.supermemo.org/wiki/References "References")保存在专用的[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中，而它们的各个文本字段（例如 #标题 、#作者 、#日期 、#来源等）则存储在文本注册表中，因此可以进行全局文本搜索。在图片中，参考[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")包含 71,791 个成员。以黄色突出显示的部分是[下载图像的参考文献](https://help.supermemo.org/wiki/References#Image_references "References") 。其余的参考文献描述了导入的文章。所选的量子生物学参考文献描述了一篇于 2013 年 2 月从[自然物理学](http://www.nature.com/nphys/index.html)导入的文章。元素列表面板（右下角）显示了从该文章生成的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 。所有这些[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")共享同一参考文献。_

## 编辑引用

您可以在 **参考：编辑** 中使用 [SuperMemo Commander](https://help.supermemo.org/wiki/SuperMemo_Commander "SuperMemo Commander")，但是您也可以在参考区域（在默认样式表中为粉色）编辑参考。您可以安全地删除参考字段，但您需要决定该更改是局部的（仅针对该 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ）还是全局的（针对所有使用此参考的元素）。您将无法删除 #文章 、#父项： 或 #概念组 字段，因为它们是自动添加到参考部分的（即它们不是参考本身的一部分）。您可以自由更改参考的文本。非法更改是指所有不符合参考格式的更改，例如，不以参考字段标签开头的行，或以未知参考字段标签开头的行（例如 _#国家_ ）。如果您不确定这个过程是如何工作的，可以从 [维基百科](https://en.wikipedia.org/) 导入一篇文章到新创建的 [集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") ，创建一些 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 并进行编辑，以查看参考是如何处理的。

## 图像引用

图像引用在从网络或 HTML 文档导入时会自动创建。在 SuperMemo 16 中，除非您导入了整个引用页面的图像，否则重复检测将依赖于图像名称。如果您重命名了图像以便于重用，重复检测将无法正常工作。这在 SuperMemo 17 中有所改变。URL 保存在文本[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中，该注册表可以接受一定程度的“垃圾”，因为文本重用是自动的。采用的复杂解决方案可能会使 SuperMemo 在从导入的文章中导入图像或从网络导入图片时变得稍慢。然而，您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")不太可能因多个图像重复而膨胀。重复导入会被自动阻止，导入的图像将被存储的原始图像替换（维基缩略图将被其高分辨率原始图像替换）。

图像引用允许在**[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [查找元素](https://help.supermemo.org/wiki/Find_elements "Find elements")** (_Ctrl+F_)中搜索图片名称和其他文本。

您可以在参考[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中找到图像参考（从[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")中选择**[搜索](https://help.supermemo.org/wiki/Search_menu "Search menu")  ： [参考文献](https://help.supermemo.org/wiki/Search_menu#References "Search menu")** ）。或者，您可以先通过图像注册表找到图像（从[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")中选择**[搜索](https://help.supermemo.org/wiki/Search_menu "Search menu")  ：图像** ），然后从[注册菜单](https://help.supermemo.org/wiki/Registry_menu "Registry menu")中选择**[查看](https://help.supermemo.org/wiki/Registry_menu#View "Registry menu")  ：参考文献** （可通过右键单击访问）。

在参考[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中，要查看与给定参考相关的图像，请点击窗口底部的**转到** 。

要查看与给定图像/参考相关的所有[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，请点击任一注册表（图像或参考）底部的**列表** 。

# 增量学习中的附加技能

## 识别不适合的文本

最佳的[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")文章应富含事实和背景。你需要制定自己的规则来选择优质的阅读材料。没有什么能替代你自己的经验。你将学会识别那些难以处理且阅读效率较低的文本。

让我们考虑两个极端：

- **维基百科** : [维基百科](https://en.wikipedia.org/) 很棒，因为它是众包的，许多作者只编辑文本的一小部分，完全不考虑文章的其余部分。这就是为什么即使是文本的一小部分（如 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ）通常也会包含所有相关的上下文。
- **小说** : 小说最好线性阅读，你可以在纸质书中使用纸质书签，这样的效果和使用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")一样好

许多文章介于[维基百科](https://en.wikipedia.org/)和虚构极端之间。当[维基百科](https://en.wikipedia.org/)说“http 协议”时，一篇典型的文章可能只会说“协议”（如果“the”在前面的段落中是明确的）。一些文本中夹杂着“正如我在前一章提到的”或“请转到下一节”或“在前一章中解释的三个要点”等。文本写作中对工作记忆的滥用使得[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")变得困难。这意味着如果作者使用了大量的“指代模糊”，这些文本就不适合[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。模糊的关键词示例：“the”、“they”、“he”、“it”等。

许多文章也充满了无关的废话（[super-memory.com](http://super-memory.com/) 也无法避免这个缺陷）。过多的拐弯抹角，而没有清楚地陈述对读者最重要的结论。“投机哲学”可能是一本很好的启发性读物，但对于[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")来说可能不太合适。你需要做出决定。

有些叙述最好是被动地阅读。它们可能是一些通常显而易见的事实的汇编。在这种情况下，你可以选择阅读并[忽略](https://help.supermemo.org/wiki/Glossary:Dismiss "Glossary:Dismiss") 。或者你可以阅读并安排在一个月或一年后再进行一次复习（如果你担心错过了重要内容）。或者你可以尝试用自己的话写一两句关于你从叙述中学到的新东西。你的句子将简要提炼出原本冗长段落的精髓。如果它有意义且精华，你将很容易找到适合[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的关键词。

你需要制定自己的规则来决定哪些文章适合阅读。主要规则可能是：导入任何看起来有趣的内容，开始阅读，如果你发现明显的问题，就降低优先级或删除，或者提取一些亮点后再删除。

请记住，您需要区分[不适合的文本](https://help.supermemo.org/wiki/Incremental_learning#Example:_Unsuitable_texts)和[困难的文本](https://help.supermemo.org/wiki/Incremental_learning#Handling_incomprehensible_articles) 。

## 处理难以理解的文章

在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，您经常会遇到难以理解的材料。您需要培养分析能力，以帮助您识别困难的原因。如果问题出在作者身上，请删除文章。如果您需要先消化您[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中的其他内容，请推迟阅读该文章。如果您需要更多知识，请推迟文章并导入更多将有助于提高理解的知识。不要忘记， **某些文本本质上不适合[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")** （例如，科学实验的描述、数学推导、源代码中的编程示例、案例研究等）。在这种情况下，请使用传统的深入分析方法，总结您的分析结果，并使用 SuperMemo 跟踪您自己的总结。请参见： [识别不适合的文本](https://help.supermemo.org/wiki/Incremental_learning#Recognizing_unsuitable_texts) （包括[示例](https://help.supermemo.org/wiki/Incremental_learning#Example:_Unsuitable_texts) ）。

这就是你可以在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中处理复杂性的方式：

1. 从顶部开始阅读文章。一旦你找到一个难懂的片段，分析它，并诊断你理解问题的原因。
2. 如果文章的其余部分不太依赖于这个困难的片段，可以将其提取出来，然后继续阅读
3. 如果文章的其余部分在不理解困难片段的情况下无法理解，请选择以下之一：
    - 如果您需要更多知识来理解该片段：请推迟阅读该文章（ **[学习](https://help.supermemo.org/wiki/Element_menu#Learning "Element menu")  : [重新安排](https://help.supermemo.org/wiki/Element_menu#Reschedule "Element menu")**来自[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")或 _Ctrl+J_）
    - 如果该片段复杂得令人绝望，并且对未来没有任何希望（例如，由于语法、措辞、表述、逻辑等错误），请删除该文章，并寻找替代材料。
4. 如果您决定使用 _Ctrl+J_ 推迟文章，请决定在回到困难片段之前您需要哪些新知识。列出您需要处理的词典条目、百科全书文章、网络文章，然后再继续。将材料搜索安排为单独的 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ，或者尝试立即搜索新知识。
5. 估计您希望能够理解这篇困难文章的最早时间，并使用适当的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")与 _Ctrl+J_。如果文章包含高优先级知识，最好还是保守一些，提供一个过早的复习。

## 随机化重复

您可以在一个[子集](https://help.supermemo.org/wiki/Glossary:Subset "Glossary:Subset")中执行[未完成的重复](https://help.supermemo.org/wiki/Glossary:Outstanding_material "Glossary:Outstanding material") 。如果您想使用随机顺序，请按照以下步骤操作：

1. 在[浏览器](https://help.supermemo.org/wiki/Browser "Browser")中打开[元素子集](https://help.supermemo.org/wiki/Glossary:Subset "Glossary:Subset")
2. 在[浏览器菜单](https://help.supermemo.org/wiki/Browser_menu "Browser menu")中选择**[随机](https://help.supermemo.org/wiki/Browser_menu#Random "Browser menu")  ：随机化浏览器** （_Shift+Ctrl+F11_）
3. 在[浏览器菜单](https://help.supermemo.org/wiki/Browser_menu "Browser menu")中选择**[学习](https://help.supermemo.org/wiki/Browser_menu#Learn "Browser menu")** （_Ctrl+L_）

## 阅读工具栏

您可以通过点击[元素窗口](https://help.supermemo.org/wiki/Element_window "Element window")底部的**阅读**标签来显示**阅读**工具栏（在**中级**或更高的[级别](https://help.supermemo.org/wiki/Glossary:Level "Glossary:Level") ）。

[![SuperMemo: The Read toolbar at the bottom of the element window. It features options used in incremental reading](https://help.supermemo.org/images/thumb/5/5b/Read_toolbar.jpg/800px-Read_toolbar.jpg)](https://help.supermemo.org/wiki/File:Read_toolbar.jpg "SuperMemo: The Read toolbar at the bottom of the element window. It features options used in incremental reading")

> _**图：** [**阅读** 工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar") 位于 [元素窗口](https://help.supermemo.org/wiki/Element_window "Element window") 的底部。它包含在 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 中使用的选项。_

### 工具栏按钮

- **粘贴文章** (_Ctrl+N_) - 从剪贴板粘贴一篇新文章到当前的 [收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")
- **记忆提取** (_Alt+X_) - 使用选定的文本部分创建一个新的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 并将这个新元素引入学习过程中。这是 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 中最重要的选项之一。在选定的文本上使用 _Alt+X_ 告诉 SuperMemo 该选择是重要的，并且您希望在未来更好地记住它。
- **调度提取** (_Shift+Alt+X_) - 使用选定的文本创建一个新的 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 并在选定的日期上安排其 [复习](https://help.supermemo.org/wiki/Glossary:Review "Glossary:Review") ，并选择一个 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。 **调度提取** 与 **记忆提取** 相同，但您可以手动选择第一个 [间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") 、 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 等等。
- **记住填空** (_Alt+Z_) - 基于当前关键词选择创建一个新的 [填空删除元素](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 并将该新 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 引入学习过程中
    
    > **示例** : 你可以转换以下句子：
    > 
    > > _1947年，联合国投票决定将巴勒斯坦分为阿拉伯和犹太国家_
    > 
    > 提问：
    > 
    > > _在 1947 年，联合国投票决定将巴勒斯坦分为阿拉伯和 [...] 国家。_
    > 
    > 由：
    > 
    > 1. 选择单词 _Jewish_ 并
    > 2. 选择 **Cloze**（或按 _Alt+Z_）。
    
    除了 **提取** ( [上面](https://help.supermemo.org/wiki/Incremental_learning#extract) )，这是 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 最重要的选项。
    
- **安排填空** - 创建一个新的 [填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 并在选定的日期安排 [重复](https://help.supermemo.org/wiki/Glossary:Repetition "Glossary:Repetition")
- **任务提取** - 使用选定的文本部分创建一个新的 [任务元素](https://help.supermemo.org/wiki/Glossary:Task "Glossary:Task") 并将该元素放入当前的 [任务列表](https://help.supermemo.org/wiki/Glossary:Tasklist "Glossary:Tasklist")
- **拆分文章** - 使用各种章节标记，如标题、横线、维基百科部分、[SuperMemo 拆分标记](https://help.supermemo.org/wiki/Glossary:Splitmark "Glossary:Splitmark")等，将文章拆分为多个[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 。这可以显著加快非常长文章的分解和文章章节的优先级排序。
- **[电子邮件](https://help.supermemo.org/wiki/Incremental_mail_processing "Incremental mail processing")** (_Shift+Ctrl+E_) - 通过电子邮件发送[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")或选定的文本（您可以对[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")进行注释或对选定的文本发表评论）
- **[电子邮件常见问题](https://help.supermemo.org/wiki/Incremental_mail_processing#Responding_with_FAQs "Incremental mail processing")** - 使用所选文本作为常见问题的基础，并将答案发送给问题的作者。您的回复将自动添加到您选择的常见问题文件中。它还可以生成一个 Wiki 版本。SuperMemo 网站上的所有常见问题都是通过**电子邮件常见问题**创建的。许多 [SuperMemoPedia](https://supermemopedia.com/) 上的常见问题也是使用此选项创建的。
- **高亮** - 高亮当前选定的文本
- **更改高亮样式** - 更改高亮样式（即字体、字体样式、字体大小、字体颜色和文本高亮颜色）
- **忽略** (_Shift+Ctrl+I_) - 通过标记为 忽略 样式来在阅读中忽略所选文本
- **光标前删除** (_Alt+\_) - 删除光标前的文本（例如，在处理后）。当光标位于文本的最开头时，它还可以删除 HTML 格式标签以清理文本。
- **光标后删除** (_Alt+._) - 删除光标后面的文本（例如脚注、外部链接、文献引用等）。位于文本底部的 SuperMemo 引用将不受影响。
- **设置阅读点** (_Ctrl+F7_) - 将选定的文本标记为您下次返回所呈现文章时将从该点继续阅读的起始位置。在 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 中，您很少需要使用 **设置阅读点** ，因为所有提取、填空、高亮和其他操作都会自动为您设置阅读点。
- **转到阅读点** (_Alt+F7_) - 转到已选定为阅读点的文本
- **清除阅读点** (_Shift+Ctrl+F7_) - 从当前处理的文本中移除阅读点

## 一个记忆，一个行动

在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，如果你将知识以小步骤分开并在时间上进行处理，你将获得最高的效率。这样，你可以在较少的处理工作下实现良好的记忆效果。然而，许多用户会陷入低效的陷阱，在一次复习中对某个主题进行的工作过少或过多。

### 无效复习

无效复习是工作不足的一个例子（一个动作，零记忆）。无效复习产生于这样的心理场景：你看到一个[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ，并想： _我现在没有心情学习这个材料。我们执行**下一个重复**吧。_ 这是错误的！你必须采取行动，否则你将陷入浪费时间和学习很少的循环中！在没有实际学习任何东西的情况下执行处理操作是一个严重的错误。当一个[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")出现时，你可能会有一堆借口：“ _我不喜欢这个。我们明天再做_ 。”或者“ _我对这个太困了_ 。”或者“ _这个会花太多时间。_”如果你发现自己在一个循环中，不断重新安排同一个[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ，或者花时间重新安排多个[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ，你正在损害学习的效率！这段时间本可以用来进行更有生产力的步骤。

如果您不想让[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")变成浪费时间，您必须**始终采取一些行动**当您看到一个[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")时。例如：

- 阅读一个句子并删除它，或标记为忽略 ，或提取它
- 如果这篇文章对你的进一步进展不是至关重要的，可以设置低 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") （例如 99%）
- 对于一个月或更长时间内您没有时间学习的材料，请设置[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") （例如，设置为 333 天）。

换句话说，要么对文本进行小幅度的修改，要么明确标记为低优先级或待后续完成。还可以考虑 **[删除](https://help.supermemo.org/wiki/Element_menu#Delete_element "Element menu")** 或 **[完成！](https://help.supermemo.org/wiki/Element_menu#Done "Element menu")**

### 项目完美主义

同一个问题的另一个方面是在一条信息上进行过多的操作。在一次重复中处理颜色、字体、图片、 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")等是非常低效的。这些操作可以分散在时间上进行。自然，设定正确的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")是最重要的步骤之一。也许某条信息并不重要到足以在你繁忙的学习中挤出时间。如果是这样，你将节省大量时间，不必处理颜色和样式。

在这里你也应该记住： **一个记忆，一个动作** 。每次你复习一条信息时，你可以进行编辑、字体更改、模板更改、概念组更改等。然而，除非你能在一次快速的键盘敲击中完成所有操作，或者某些操作与学习新事物相关，否则你应该将每次重复的操作限制为单一步骤。

**一条记忆，一次行动**规则要求**增量学习中的每个操作都应在你的记忆中留下痕迹** 。它还指出**对一条数据进行一次操作比同时进行两次操作更好** 。

### 示例：增量项目结构化

以下[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")可能看起来违反了 [20 条规则](https://supermemo.guru/wiki/20_rules_of_knowledge_formulation) ：

> **问题** : 炎症是由 [类花烃](https://en.wikipedia.org/wiki/Eicosanoid) 和 [细胞因子](https://en.wikipedia.org/wiki/Cytokine) 产生的。类花烃包括 (1) [前列腺素](https://en.wikipedia.org/wiki/Prostaglandin) ，它们产生 [发热](https://en.wikipedia.org/wiki/Fever) 和 [血管扩张](https://en.wikipedia.org/wiki/Vasodilator) ，以及 (2) [...]，它们吸引某些 [白血球](https://en.wikipedia.org/wiki/White_blood_cell) 。  
> **答案** : [白三烯](https://en.wikipedia.org/wiki/Leukotriene)

然而，[20 条规则](https://www.super-memory.com/articles/20rules.htm)是在 1999 年为经典 SuperMemo 编写的。增量学习在规则和原则的各个方面都是增量的。特别是，制定[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")和建立理解也是增量的。

根据**一个记忆，一个动作**原则，呈现的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")将在不确定的未来某个时候（或者永远不会，如果它的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")不够高）形成最终形态。由于以下因素，它必须以增量方式处理：

1. 逐步增强理解，和
2. 需要时间的渐进式重新表述。

[20 条规则](https://www.super-memory.com/articles/20rules.htm)说“ **在理解之前不要记忆** ”，然而，理解也是一个渐进的过程。将这个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")转换为简单的“ _哪些类花生酸吸引白血球？_”只有在学生完全理解并记住炎症因子的层次结构及相关的类花生酸时才有意义。如果不是这样，以这种复杂的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的形式携带上下文是一种在[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")和[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")之间的过渡阶段。这个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")仍然提出了对[主动回忆](https://help.supermemo.org/wiki/Glossary:Active_recall "Glossary:Active recall")至关重要的问题。然而，它也确保在学生的知识结构尚未牢固建立之前提供完整的上下文。在[渐进阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，阅读的顺序往往是混乱的，理解是渐进的，建立一个坚实的知识结构的努力也是逐步进行的。

除了逐步提高理解能力外，对[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的广泛编辑是非常耗时的（尤其是将项目完全重写为一个简单问题）。事实上， [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的主要优势之一是对打字的最低需求。这就是我们首先使用电子资源的原因（而不是仅仅使用那些在输入整个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")时没有任何缺点的书籍）。因此，增量学习中的一个重要效率原则是通过遵循**一个记忆，一个行动**原则来最小化编辑。

让我们看看所呈现的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")在连续重复中可能如何演变。请注意，所有编辑步骤只能在相关知识巩固的情况下进行（即单次重复实际上可能不会带来任何编辑）。这些步骤的执行也在一定程度上依赖于项目[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。高优先级项目将获得更多的曝光、更多的处理，并且会要求更好的表述质量。

#### 取1：原始复杂项目

[![SuperMemo: A cloze deletion whose formulation is improved incrementally over many repetitions in accordance with the principle: "one memory, one action"](https://help.supermemo.org/images/thumb/7/78/SuperMemo_Commander.jpg/800px-SuperMemo_Commander.jpg)](https://help.supermemo.org/wiki/File:SuperMemo_Commander.jpg "SuperMemo: A cloze deletion whose formulation is improved incrementally over many repetitions in accordance with the principle: \"one memory, one action\"")

> _**图** : 一个与炎症相关的[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，其表述似乎违反了 [20 条规则](https://www.super-memory.com/articles/20rules.htm) 。这个填空将在许多重复中逐步改进，原则是：“ **一个记忆，一个动作** ”_

#### 第二次尝试：将线索移动到答案字段

> **问题** : 炎症是由 [类花生酸](https://en.wikipedia.org/wiki/Eicosanoid) 和 [细胞因子](https://en.wikipedia.org/wiki/Cytokine) 产生的。类花生酸包括 (1) [前列腺素](https://en.wikipedia.org/wiki/Prostaglandin) ，它们产生 [发热](https://en.wikipedia.org/wiki/Fever) 和 [血管扩张](https://en.wikipedia.org/wiki/Vasodilator) ，以及 (2) [...]  
> **答案** : [白三烯](https://en.wikipedia.org/wiki/Leukotriene) （吸引[白血球](https://en.wikipedia.org/wiki/White_blood_cell) ）

#### 第三次尝试：去掉前言

> **问题** : 炎症：类花生酸包括 (1) [前列腺素](https://en.wikipedia.org/wiki/Prostaglandin) ，它会引起 [发热](https://en.wikipedia.org/wiki/Fever) 和 [血管扩张](https://en.wikipedia.org/wiki/Vasodilator) ，以及 (2) [...]  
> **答案** : [白三烯](https://en.wikipedia.org/wiki/Leukotriene) （吸引[白血球](https://en.wikipedia.org/wiki/White_blood_cell) ）

#### 第四次尝试：基本项目

> **问题** : 炎症：类花生酸包括 (1) [前列腺素](https://en.wikipedia.org/wiki/Prostaglandin) ，和 (2) [...]  
> **答案** : [白三烯](https://en.wikipedia.org/wiki/Leukotriene)

#### 进一步阅读

- [对增量知识结构化的疑虑](https://supermemopedia.com/wiki/Dismembering_complex_topics_before_or_after_learning_the_structure_of_knowledge)
- [知识达尔文主义](https://supermemo.guru/wiki/Knowledge_darwinism)

## 学习列表

列表和集合很难记住。很难记住属于欧盟的所有国家。当学习列表时，您应该将问题分解为更小的子问题。

让我们考虑一个例子，假设你想记住字母表中的所有字母顺序。如果你使用以下项目，这样做效果不会很好：

> **问题** : 字母表中的字母顺序是什么？  
> **答案** : A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z

你会发现你经常在序列的某些部分绊倒，需要停止重复练习，以便以传统的方式练习整个序列（就像我们都通过死记硬背来学习诗歌一样）。

然而，您可以通过一种确保快速效果的方法来处理这个问题：

> **问题** : 字母表中 A 和 E 之间的字母顺序是什么？  
> **答案** : A, B, C, D, E

> **问题** : D 和 H 之间的字母顺序是什么？  
> **答案** : D, E, F, G, H

> **问题** : G 和 K 之间的字母顺序是什么？  
> **答案** : G, H, I, J, K

> 等等等等。

在经过 2-3 周的重复后，您可以在每次重复这些简化的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")后，增加一个额外的任务，即回忆整个序列。这将确保您能够快速背诵整个字母表。您还将经常练习那些对您的记忆来说更困难的部分（例如 _V, W, X, Y, Z_），而不是那些简单得多的部分（例如 _A, B, C, D, E_）。

### 记忆列表的实际问题

您可以在 SuperMemo 中开发出一种良好的记忆列表的方法。然而，您可能会发现，记忆的列表在现实生活中并不是很有用，或者更糟糕的是，当您经历严峻考验时，您的记忆可能会出错。您已经知道，列表不应成为问题的答案。在列表 A、B、C 中，SuperMemo 需要单独理解您在连接 A 和 B、B 和 C 等方面的困难。您可以使用[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")来通过多个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")学习列表。例如：

**父模板 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") / [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") :**

> A B C

[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 通过 [填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 生成：

**项目 1：**

> **问题** : [...] B C  
> **答案** : A

**项目 2：**

> **问题** : A [...] C  
> **答案** : B

**项目 3：**

> **问题** : A B [...]  
> **答案** : C

重要的是要知道，上述**项目 1** 可能会导致你无法用 A 回答问题 C，如果你仅仅通过理解 B 与 A 的关联来学习回答**项目 1**。在这种情况下，你需要通过制定[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")来进行更多的工作：A-B（其中 A 是问题，B 是答案）、A-C、B-A、B-C、C-A 和 C-B。尽管你将获得六个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")而不是一个，但你的知识可能会更加扎实，实际上你在重复这些多个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")上花费的时间可能会少于在重复综合 A-B-C 项目上花费的时间。

### 列表常常会被忽视

在大多数情况下，我们根本不需要记忆列表。认为一个列表值得记忆的看法，往往反映了我们从学校带来的一个坏习惯，因为列表在考试中是一个常见的特征。

SuperMemo 的用户问道：“ _您能帮我从以下文本中提取[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")吗？我真的不确定该如何标记[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")的边界，以及如何使用[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ？_”

> _心理疾病变化率_
> 
> _心理疾病正成为一个日益严重的问题，原因有二。首先，寿命的延长导致某些慢性心理疾病的患者数量增加。例如，由于越来越多的人活到老年，患有痴呆症的人也随之增多。其次，一些研究提供了证据，表明全球抑郁症的发病率正在上升。_

这个片段难以处理，因为它是一个枚举（一个列表），形成一个大的逻辑结构。然而，为了理解这个主题，你并不需要真正记住有多少因素影响心理疾病。你主要需要记住因果关系。如果忽略枚举，你可以简单地列出以下[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ，每个主题都将更容易进一步处理：

> - _心理疾病正日益成为一个严重的问题_
> - _寿命的延长导致某些慢性心理疾病的数量增加_
> - _由于越来越多的人活到老年，更多的人正遭受痴呆症的困扰_
> - _抑郁症的发病率在全球范围内上升_

如果你认为自己无法在没有列举的情况下生活，你可以先提取上述列出的事实，然后通过删除所有多余的信息来简化列举：

> _心理疾病的增加有两个原因：_
> 
> 1. _寿命的延长带来了慢性疾病的增加_
> 2. _抑郁症的发病率正在上升_

### 使用分解

在 SuperMemo 中，有一个鲜为人知但非常实用的功能可以帮助你处理列表。

如果你正在学习水果的名称，你可能会看到这样的文本：

> _水果的例子有苹果、橙子、梨、樱桃、香蕉……_

您不想记住整个水果列表，尤其是列表越长，您失败的可能性就越大。没有一个明确或完整的水果列表可以作为良好的记忆目标。您真正想知道的是苹果是水果，橙子是水果，等等。这个列表本身是相当无用的。您可以将其作为 SuperMemo 中的参考，但记住它将是浪费时间。

您可以使用 **[分解](https://help.supermemo.org/wiki/Component_menu#Decompose "Component menu")** 快速实现与水果相关的学习目标。首先修改 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") :

> _苹果、橙子、梨、樱桃、香蕉……都是水果。_

生成一个模板 [cloze](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion"):

> **问题** : 苹果、橙子、梨、樱桃、香蕉是 [水果/蔬菜]  
> **答案** : 水果

将该[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")转换为一个可以轻松分解的版本，通过使用斜杠作为分隔符将列表成员放入大括号中：

> **问题** : {苹果/橙子/梨子/樱桃/香蕉} 是 [水果/蔬菜]  
> **答案** : 水果

您现在可以在[组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu")中使用**[阅读](https://help.supermemo.org/wiki/Component_menu#Reading "Component menu")  : [分解](https://help.supermemo.org/wiki/Component_menu#Decompose "Component menu")**处理问题字段，以获取一系列类似于以下的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ：

> **问题** : 苹果是 [水果/蔬菜]  
> **答案** : 水果

> **问题** : 橙子是 [水果/蔬菜]  
> **答案** : 水果

> **问题** : 梨是 [水果/蔬菜]  
> **答案** : 水果

> 等等。

[![SuperMemo: An exemplary cloze ready for Decompose](https://help.supermemo.org/images/thumb/a/a1/Decompose-ready_cloze_deletion.jpg/800px-Decompose-ready_cloze_deletion.jpg)](https://help.supermemo.org/wiki/File:Decompose-ready_cloze_deletion.jpg "SuperMemo: An exemplary cloze ready for Decompose")

> _**图** : 一个示例的 [填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 准备进行 **[阅读](https://help.supermemo.org/wiki/Component_menu#Reading "Component menu")  : [分解](https://help.supermemo.org/wiki/Component_menu#Decompose "Component menu")** 在 [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") 上。_

## 文章的全面预览

很难制定一个简单的算法来决定何时在阅读之前预览整篇文章，以及/或者何时在预览过程中提取最重要的片段。毕竟，文章也可以按线性顺序逐步阅读。这是一个多标准优化的案例，许多因素必须考虑在内，最终的决定将取决于你自己的偏好。

以下是一些标准：

- 如果你今天需要这些知识，你应该先快速预览并提取关键任务片段
- 如果这些知识非常重要，而你的学习过程充满了需要阅读的文章，提取预览将增加你对文章的接触
- 如果文章不是很有趣，逐行阅读将相当于分配一个较低的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") （你可能每周或每月只读一句话，除非文章变得更相关或有趣，否则你可能永远无法读完这篇文章）
- 如果您认为文章的主体包含非常重要的内容，您可能想快速定位这些内容并提取出来进行单独（更详细的）阅读
- 如果由于阅读速度慢而导致您的复习间隔非常长，您可以选择缩短间隔或预览最重要的部分
- 如果您正在阅读来自电子邮件的文本 [tasklist](https://help.supermemo.org/wiki/Glossary:Tasklist "Glossary:Tasklist")，强烈建议使用预览：并不是所有人都会在消息开头就提到最重要的要点，您肯定不希望因为几周的延迟而耽误找到需要立即采取行动的段落
- 如果您从[维基百科](https://en.wikipedia.org/)导入，高优先级文章可以自动拆分（在**[指挥官](https://help.supermemo.org/wiki/SuperMemo_Commander "SuperMemo Commander")**中使用**拆分：拆分文章** ），您可以为各个子部分分配[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")

总之，以下是整篇文章预览的最重要激励因素：

- 材料的高优先级
- 在低优先级文本中埋藏的高优先级片段的指示
- 高兴趣

## 统一知识库

SuperMemo 应该将您所有的知识和学习材料整合在一起。理想情况下，您应该只在一个 [集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 中保留一整套知识。这个主要集合应该每天通过从各种来源导入的新文章和多媒体内容进行丰富。将您的知识保存在一个 [集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 中对于 [子集复习](https://help.supermemo.org/wiki/Subset_learning "Subset learning") 、知识和参考资料的搜索、图片搜索、统计数据、进度监控、导入默认设置等至关重要。SuperMemo 提供了一套丰富的工具，用于在一个连续的学习过程中处理不同领域的知识。然而，在某些情况下，您可能会出于不同的目的创建单独的 [集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 。保持 [集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 分开的主要原因有两个：

1. 不属于您终身学习的收藏，以及
2. 由于 SuperMemo 或当前技术所施加的各种技术限制，需要特别处理的集合。

以下是一些情况的例子，这些情况证明了创建与您主要知识体系分开的[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")是合理的：

- 项目集合（ [问题解决](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_problem_solving "Creativity and problem solving in SuperMemo") ， [任务列表](https://help.supermemo.org/wiki/Glossary:Tasklist "Glossary:Tasklist") ，创造性阐述）：这些[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")服务于特定项目，而不是您的一般学习。在项目完成后，它们可以被归档或与知识主体整合（具体取决于它们的性质）。
- [增量写作](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_writing "Creativity and problem solving in SuperMemo") 项目、博客等。
- [增量问题解决](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_problem_solving "Creativity and problem solving in SuperMemo")[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")专门针对一个特定问题，在这里你希望完全专注于单一问题
- 图片 [收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") （公开：家庭相册；私人：家庭照片收藏等）：如果你的图片数据库达到数十万张照片，你肯定会想将其分开，以便于备份和专门处理，这通常与学习的性质不同。
- YouTube 视频合集：与 [YouTube](https://youtube.com/) 学习与[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")大相径庭，您无法在观看视频时播放自己喜欢的音乐，当您无法访问互联网时，您可能会放弃学习，等等。
- 视频文件集合（例如家庭视频）：这些[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")通常需要不同的处理。此外，它们的大小迅速增长到数 TB，这使得频繁备份变得不太可行。
- 日记和日志
- 日志
- 点唱机：增量学习过程可以为体验音乐增添额外的乐趣。只有在使用点唱机.kno 几周后，你才会真正理解 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 和 [间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") 在音乐感知中的重要性！
- 邮件：您可能想将工作与家人和朋友以及与当前项目相关的邮件分开
- [任务列表](https://help.supermemo.org/wiki/Glossary:Tasklist "Glossary:Tasklist") 和图表
- 纸质笔记
- 孩子的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") ：如果你的孩子太小，无法独立使用 SuperMemo
- 备注：有时您可能更喜欢将笔记保存在 SuperMemo 中，而不是文字处理器（例如，更容易启动、切换集合、搜索更好等）。
- 音频档案，等等

## 知识的流动

下图大致说明了知识随时间流动的情况，取决于知识的难度：

[![SuperMemo: Time flow of knowledge in the learning process](https://help.supermemo.org/images/thumb/8/82/Repetitions_graph.png/800px-Repetitions_graph.png)](https://help.supermemo.org/wiki/File:Repetitions_graph.png "SuperMemo: Time flow of knowledge in the learning process")

> _**图** : 横轴对应重复次数，纵轴表示[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") （对数刻度）。尽管有一种普遍的看法，但在这里半对数刻度并不会产生线性图。显然，间隔长度的增加在连续重复中减缓。此外，零[失误](https://help.supermemo.org/wiki/Glossary:Lapse "Glossary:Lapse") （ 红色曲线）对应的图形是由[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的叠加而成，这些项目在[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")上有较低且更快的增长（由[难度](https://help.supermemo.org/wiki/Glossary:Difficulty "Glossary:Difficulty")决定）。钟形曲线由所有贡献的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") （重复次数低于 10）决定，然后仅由难度较大的项目或[遗忘指数](https://help.supermemo.org/wiki/Glossary:Forgetting_index "Glossary:Forgetting index")较低的项目决定，这些项目的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")增长显著减缓（在重复次数超过 10 时）。要在您自己的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中查看上述图形，请使用**[工具](https://help.supermemo.org/wiki/Browser_menu#Tools "Browser menu")  : 重复图**在[浏览器菜单](https://help.supermemo.org/wiki/Browser_menu "Browser menu")中。_

## PDF 文章的增量阅读

PDF 是一种专有格式。SuperMemo 不原生支持 PDF。这使得 PDF 材料的处理始终比从网络导入的普通 HTML 文本更困难。

处理 PDF 增量学习最常用的有 4 种方法。您需要查看哪种方法最适合您的特定材料。可能会出现您需要采用混合策略，并对不同的文本使用不同的方法。四个选项是：

- **[转换器](https://help.supermemo.org/wiki/Incremental_learning#PDF_to_HTML_converters)** : 使用 PDF 转 HTML 转换器生成可在 SuperMemo 中阅读的 HTML 文本
- **[图片](https://help.supermemo.org/wiki/Incremental_learning#PDF_with_visual_learning)** : 使用页面快照（例如使用 **Print Screen**）并采用 [视觉学习](https://help.supermemo.org/wiki/Visual_learning "Visual learning")
- **[手动](https://help.supermemo.org/wiki/Incremental_learning#PDF_copy_and_paste)** : 通过复制和粘贴将 PDF 逐页（或逐图）复制到 SuperMemo 页面
- **[增量](https://help.supermemo.org/wiki/Incremental_learning#Incremental_PDF)** : 在使用 SuperMemo 调用的 Adobe Reader 中，采用增量方法进行读取、复制和粘贴 PDF

转换为 HTML 是最方便且成本最低的。然而，一些转换器和/或某些 PDF 生成的 HTML 与原始内容差异很大，和/或在 SuperMemo 中处理起来困难（例如，需要额外的过滤或额外的手动格式调整）。页面快照是快速阅读和导入难以转换或仅可阅读的页面（例如，需要特定页面布局的手册）的一种方法。复制和粘贴的方法最适合那些可以轻松完整选择且不包含太多图片的文章。最后，增量方法对于 SuperMemo 来说是最自然的，然而，学生需要在停止阅读文本的地方做一个标记，而不是使用 [read-points](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point")。

有关更多解决方案，请参见：[SuperMemopedia 上的 PDF](https://supermemopedia.com/wiki/PDF)。

### PDF 转 HTML 转换器

由于 SuperMemo 无法原生支持 PDF 文件进行[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ，最有前景的长期解决方案是使用 PDF 转 HTML 转换器。然而，所有转换器都有其局限性。HTML 和 PDF 定义的语言并不等同，并非所有 PDF 中的表达都可以用 HTML 表示。这就是为什么你需要检查几个转换器，看看哪个最适合处理你的学习材料类型。

#### 转换

以下是汇总于 [SuperMemoPedia](https://supermemopedia.com/) 的转换器简短列表：

- [PDF 转 HTML 转换器](https://supermemopedia.com/wiki/PDF_to_HTML_converters)

如果您不确定选择哪个，可以使用这个： [在线 PDF](http://www.pdfonline.com/)（它对要转换的文件大小限制为 2 MB）。

#### 处理中

一旦文本被导入到 SuperMemo，可能需要进一步处理：

- 使用 _F6_ 过滤有问题的代码（例如，将表格项目化）
- 导入图片（一些图片是类似文本的构造，需要通过复制和粘贴进行捕捉）
- 分成可管理的部分（例如，借助于 **分割：分割文章** 在 [**指挥官**](https://help.supermemo.org/wiki/SuperMemo_Commander "SuperMemo Commander") 中）
- 使用 _Ctrl+Shift+F12_ 将文本部分转换为纯文本（在大多数不友好的格式情况下）

#### 使用 MS Word

一些学生使用 MS Word 作为转换为 HTML 的中介阶段。然而，尽管 PDF 到 HTML 的转换从未完整和准确，但 PDF 和 MS Word 之间的差异使得这一过程变得困难。在撰写时，尚无任何工具能够可靠地将 PDF 转换为 MS Word 格式。从 Adobe Reader 粘贴到 MS Word 的结果很差（例如，列中的文本会丢失或混合部分文本）。如果你拥有 MS Word，可以尝试一下，但使用转换器或[其他方法](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading_of_PDF_articles)可能会更有效。

#### 使用 OCR

一些用户对 [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) 赞不绝口。请参见： [使用 OCR 将 PDF 转换为 SuperMemo](https://supermemopedia.com/wiki/PDF_and_OCR)。

### 带有视觉学习的 PDF

您可以将 PDF 转换为图片，并使用[视觉学习](https://help.supermemo.org/wiki/Visual_learning "Visual learning")的工具。

以下是步骤：

1. 将 PDF 转换为图片，可以通过保存为 [JPEG](https://en.wikipedia.org/wiki/JPEG) 格式，或使用 **Print Screen** 进行页面快照
2. 将[图片粘贴](https://help.supermemo.org/wiki/Visual_learning#Pasting_pictures_from_the_clipboard "Visual learning")到 SuperMemo 或[从本地驱动器导入图片](https://help.supermemo.org/wiki/Visual_learning#Importing_pictures_from_a_local_drive "Visual learning")
3. 由于图片无法被搜索，因此重要的是复制并粘贴文章的一部分（如果可能的话），以便后续可以在[搜索和回顾](https://help.supermemo.org/wiki/Subset_learning#Search_and_review "Subset learning")中使用。例如，带有必要参考标签的学术文章摘要（#标题 ，#作者 ，#来源等）。
4. 使用 [视觉学习](https://help.supermemo.org/wiki/Visual_learning "Visual learning") 来处理导入的材料。图片需要进行裁剪（例如（1）_Alt+点击_ ，（2）选择感兴趣的部分，（3）按 _Esc_，然后（4）选择 _永久裁剪/剪切缩放/裁剪后的图像文件_ ）。使用视觉 [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") （_Alt+X_）来专注于导入文章的较小部分。
5. 对图片进行注释或写下摘要，以便通过[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")进一步处理最重要的部分。如果不使用[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，导入的材料可能很快被遗忘。

这种阅读 PDF 的方法类似于[纸质材料的增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading_of_paper_articles) 。

查看更多内容请访问 [SuperMemoPedia](https://supermemopedia.com/): [PDF 和视觉学习](https://supermemopedia.com/wiki/PDF_and_Visual_Learning) 。

### PDF 复制和粘贴

如果[将 PDF 转换为 HTML](https://help.supermemo.org/wiki/Incremental_learning#PDF_to_HTML_converters) 的效果不理想，您可能需要 resort to 旧的简单复制和粘贴。一些 PDF 文本可以很好地粘贴整个章节，几乎没有额外的文本/代码（例如页面标题）。一些 PDF 对 _Ctrl+A_（选择所有文本）和**带格式复制** （右键点击）反应良好。通常，Adobe Reader 不允许您进行多页选择，这样粘贴到 SuperMemo 时会很快且整齐。您可能会对尝试复制单页的多列部分感到烦恼。您会选择到一列，第二列的中间部分，以及第三列的结尾。其他双列文本会以每行混合两列的方式粘贴。有时粘贴多列文本是不可能的。这意味着您通常需要逐页，甚至逐列地进行复制和粘贴。这可能需要很长时间。同样，图片不会作为 HTML 的一部分进行复制。因此，您需要单独复制和粘贴图片。在这里，当 Adobe Reader 不允许您轻松复制图片时，您可以使用**打印屏幕** ，粘贴到 SuperMemo 中，并在 SuperMemo 中裁剪和修剪（参见： [视觉学习](https://help.supermemo.org/wiki/Incremental_learning#PDF_with_visual_learning) ）。 表格通常最好以图片的形式处理，因为它们通常导入到 HTML 时效果不佳。有些 PDF 文档甚至不允许选择文本。在这些情况下，您也需要诉诸于 [PDF 视觉学习](https://help.supermemo.org/wiki/Incremental_learning#PDF_with_visual_learning) 。有时您可能会放弃，直接阅读文章，而不去逐步处理，或者寻找替代文本，或者干脆放弃阅读。您也可以使用传统方法阅读文章，并仅将您通常会在 SuperMemo 中提取的部分复制到 SuperMemo 中。

从 Adobe Reader 粘贴文本到 SuperMemo 后，文本通常会出现锯齿状、被打断、格式错误等问题。将短段落转换为纯文本通常会显著提高可读性。快捷键是 _Ctrl+Shift+F12_。

欲了解更多，请参见：[PDF 复制和粘贴](https://supermemopedia.com/wiki/PDF_Copy_and_Paste)

### 增量 PDF

如果您想逐步处理 PDF 文章，可以使用以下策略：

1. 将您的 PDF 文件保存到专用文件夹中
2. 定期通过 **[文件](https://help.supermemo.org/wiki/File_menu "File menu")  : [导入](https://help.supermemo.org/wiki/File_menu#Import "File menu")  : 文件和文件夹** 导入它们
3. 定义一个包含大型 [HTML 组件](https://help.supermemo.org/wiki/HTML_component "HTML component") 和微小二进制 [组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") 的 PDF [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") 用于保存 PDF（将该模板作为导入 [概念组](https://help.supermemo.org/wiki/Glossary:Concept_group "Glossary:Concept group") 的默认模板，或在导入后应用于所有 PDF 文章）
4. 当为 PDF 元素安排阅读时，点击二进制[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") ，跳转到您上次阅读结束的页面（要自动返回到上次查看的页面，在 Adobe Reader 中，勾选**编辑 : 首选项 : 文档 : 重新打开文档时恢复上次查看设置** ）
5. 将 PDF 文档中所有重要片段粘贴到 [HTML 组件](https://help.supermemo.org/wiki/HTML_component "HTML component")中（如果无法选择文本，请使用**打印屏幕**选项，粘贴图片，并使用[视觉学习](https://help.supermemo.org/wiki/Visual_learning "Visual learning")工具提取单独的片段）
6. 通过点击选定的图片，右键单击并选择**复制图像** （在 Adobe Reader 中）或**打印屏幕** ，将图形粘贴到 SuperMemo 中。使用[视觉学习](https://help.supermemo.org/wiki/Visual_learning "Visual learning")工具处理更大的图片（裁剪、缩放、提取等）。
7. 在阅读 PDF 文档的同时处理粘贴的文本（尤其是当它们非常重要时）。或者，只有在完成 PDF 文档的阅读后，才在 HTML 中开始[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。

## 逐步阅读论文文章

如果您有很多从纸质期刊中记录的笔记，或者您必须阅读纸质文章，您可以使用一些方法在这个过程中采用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。与纸质材料工作永远无法像与电子材料工作那样高效。然而，您仍然可以通过增量学习的优势将您的表现提高三倍。

这是一个处理纸质笔记的示例算法：

1. 在开始处理之前，先上网搜索一下！许多值得注意的文章已经在网上发布。这可以节省很多时间。
2. 如果文本是一般性质的，您可能会找到更好的对应内容（例如在[维基百科](https://en.wikipedia.org/)上）
3. 创建一个专用的 _PaperNotes.kno_ [集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 以便于备份。它可能会变得非常庞大！您可以为您的纸质笔记使用一个专用的处理时间段。
4. 非常简短的笔记或非常重要的笔记，您可以手动输入。手动输入的优点在于可以缩短文本，使其更有意义，并且可以在[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中即时搜索。
5. 其余的文本可以作为图片导入或使用 [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) 处理（例如，使用笔扫描仪从书中提取最有价值的部分）
6. 使用数码相机快速拍摄纸质页面。扫描仪的质量更好，但速度太慢。
7. 将图片复制到硬盘上
8. 使用 **[文件](https://help.supermemo.org/wiki/File_menu "File menu")  : [导入](https://help.supermemo.org/wiki/File_menu#Import "File menu")  : 文件和文件夹** 一次性导入所有图片
9. 使用[视觉学习](https://help.supermemo.org/wiki/Visual_learning "Visual learning")和增量学习的工具来优先处理导入的材料（ **提取**选项特别有用）

SuperMemo 的用户对他在 [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) 和[使用 SuperMemo 学习法律](http://www.super-memory.com/articles/users/zmuda.htm)中的体验写了几句话。

另见：

- [SuperMemo 中的纸质笔记](https://supermemopedia.com/wiki/I_have_lots_of_notes_from_paper_journals)
- [如何逐步阅读任何内容](https://supermemoadventures.blogspot.com/2010/04/how-to-incrementally-read-anything.html)

# 增量学习的哲学

## 增量学习并不适合每个人

增量学习是强大的。尽管我们坚信它可能会在学习中引发一场革命，但它目前的形态只会惠及社会的一小部分。这就是原因：

- 大多数人永远无法到达这个网站。这个星球上很大一部分人没有互联网的访问权限。在那些有幸能够定期使用 [Google](https://google.com/) 或 [Wikipedia](https://en.wikipedia.org/) 的人中，大多数人都忙于工作、家庭和其他事务。其余的人则忙于 [Facebook](https://facebook.com/)、[Twitter](https://twitter.com/)、游戏以及互联网的其他“恩赐”。
- 互联网的用户中有相当一部分意识到网络提供了令人难以置信的自助机会。然而，其中相当一部分人会受到一种被称为**知识错觉**的认知偏见的影响。这种偏见并不放过高智商的个体。在知识错觉的影响下，我们对进一步学习的动机减弱。随着学习的减少，学习驱动随着年龄的增长而减弱，形成了一种消极的无行动反馈。
- 对互联网用户来说，那些对快速学习高度感兴趣的人很快发现，他们的记忆可以得到改善，并且在网络或软件的帮助下，他们的学习可以提升到一个新的水平。然而，语言障碍是另一个巨大的筛子。关于学习技巧的最佳材料大多以英语出版。语言的分歧导致了全球信息获取的不平等。你可以用几种主要语言阅读关于 SuperMemo 的内容。也许你还会了解到[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。你现在正在阅读的文章可能需要几个月或几年的时间才能传播到非英语地区的网络上！
- 对于任何对学习感兴趣的人来说，了解_[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition")_并不需要很长时间。这个术语在 1990 年代中期首次在 SuperMemo 的背景下使用时相当新颖。在那个时候，它只出现在几篇科学出版物中。然而，正是 SuperMemo 帮助普及了这一概念，现在它已经进入了大众文化。那些寻求更好记忆的人会很快了解到[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition")是实现这一目标的方法。他们会通过 [SuperMemo 免费软件](http://super-memory.com/english/down.htm)或其他一系列优秀的免费间隔重复应用程序（其中一些使用较旧的 SuperMemo 算法）来了解[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition") 。最新的 SuperMemo 是商业产品，这将使许多潜在的优秀学生无法走上增量学习的道路。这一点必须明确。目前，[SuperMemo 2004 是免费软件](http://www.freewarefiles.com/SuperMemo_program_13849.html) ，并支持[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。它可能缺少[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") ，但这在你建立一个无法管理的[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")时才会变得重要。 在 [SuperMemo 2004](http://www.freewarefiles.com/SuperMemo_program_13849.html) 中，您可以进行**导入** 、 **提取**和**填空** 。这就是[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的核心！
- 在 SuperMemo 的用户中，只有一小部分人会对增量学习这一复杂概念产生兴趣（可能仍然低于 5%）。典型的新手更有可能完全放弃，而不是继续前进到下一个层次。主要原因在于 SuperMemo 与人性和现代生活方式的不兼容。紧张忙碌的生活并不利于开辟新路径和养成新习惯。人类不仅喜欢待在舒适区，还因为现代竞争激烈的社会压力在很大程度上抑制了更高的灵感、终身学习和超越工作的创造性追求等。这些问题是固有的（人性）或系统性的，因此无法轻易解决。
- 一些用户可能对[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")持相对积极的看法，但会以 SuperMemo 的技术限制为借口来解释他们缺乏投入。例如，“ _除非你给我一个 Mac 版本，否则我不会去那里_ ”，“ _我讨厌 Internet Explorer_”，“ _你的界面来自 Windows 98 时代_ ”或“ _如果你有移动版本，我会回来_ ”。顺便提一下，移动性与增量学习之间存在固有的不兼容性。移动性与多任务处理和低注意力相关（与他人互动、社交媒体通知、到达的邮件、电话、浏览器弹出窗口等）。增量学习的力量在于平衡创造力与注意力。因此，增量学习本质上是静态的（除非你将移动性理解为在两个或多个和平且静态的环境之间的转移）。此外，没有标准尺寸的键盘， [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")可能会感觉像是在逆流而上。
- 在那些开始阅读增量学习的 SuperMemo 用户中，很多人会带着一个先入为主的目标：证明增量学习并不值得投入时间。“消极阅读”更可能发生在不良的心理状态下：情绪低落、烦躁，或者在不适合自己最佳生理节奏的时间阅读。这种先入之见可能在很大程度上是潜意识的，基于一种防御机制：证明增量学习是一个薄弱的概念很简单，这样可以节省大量掌握该概念的时间投入，并避免需要走出舒适区。发现增量学习是必需的，意味着要花费很长时间去阅读那些以可读性差而闻名的文档。所呈现的文章比 70%的[维基百科](https://en.wikipedia.org/)文章更难阅读。最终的判断与您当前的心理状态密切相关。您更可能说“ _增量学习充满了废话_ ”或“ _增量学习违背人性_ ”，而不是说“ _我发现了一项将改变我生活的新技术_ ”。 您可能只是寻求对您预设心态的确认：“ _增量学习一定是个骗局，或者至少是浪费时间_ ”，或者简单地说“ _增量学习在我这个特定职业中并没有太大用处_ ”。很容易找到所需的确认。本文中的不完美之处将为否定提供丰富的材料。完美是无法实现的。偏见的心态总会找到误解的方式。当然，如果您在第一次接触时对增量学习充满热情，这将是您最终成功的一个很好的预测指标。
- 经过这一系列丰富的障碍课程，你现在必定是到达这一点的少数人之一。好消息是，你可能是一个特殊精英群体的一部分。那些思维活跃、乐于接受新挑战、动力充足且自律的人。当然，你也可能是因为在学习中遭遇失败而感到疲惫，怀着找到改善最近糟糕考试成绩的希望而来到这里。无论答案是什么，前方的道路依然漫长。即使拥有敏捷的思维和极大的热情，你在后期仍然可能会中途退缩。
- 在阅读关于增量学习的内容时，你可能会遇到另一个主要障碍：“ _这比我想的要复杂得多！_”或者“ _整个[优先级](https://help.supermemo.org/wiki/Priority_queue "Priority queue")的概念让我感到恶心_ ”，或者“ _工具集可能很丰富，但它自然吗？_”。你可能会因为对这个概念的理解不够全面，或者这个概念与你的个性不兼容而感到沮丧。
- 如果您已经决定尝试增量学习，并且安装了 [SuperMemo 17](http://super-memo.com/supermemo17.html)，您可能会感到不愉快的震惊。[SuperMemo 17](http://super-memo.com/supermemo17.html) 并不友好！它已针对专业用户进行了优化，仅在较低级别（ **[文件](https://help.supermemo.org/wiki/File_menu "File menu")  : [级别](https://help.supermemo.org/wiki/Levels "Levels")** ）进行了足够的简化，以使其对新手稍微可口。您只能通过坚定的信念来克服这种印象：增量学习有效，值得我投入时间。一年后，您可能会喜欢最初在 SuperMemo 中讨厌的解决方案。用户的不友好和复杂性会让许多人在最初的几天或几周内放弃。这些辍学者很少会回来！我们在这里也有责任。新的解决方案从来没有完美封装和/或接口。只有当增量学习变得更受欢迎时，您才能获得整洁的 iPad 和 Android 版本，而这并不会很快到来。
- 前几周的退学率仍然很高。一些主要问题包括：导入不合适的文本、解析文本时遇到的困难、失去[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")的上下文、理解问题（与 SuperMemo 无关）、 [填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")文本过于复杂、 [项目表述困难](http://www.super-memory.com/articles/20rules.htm) 、在格式化和[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")上花费过多时间、 [学习负担过重](https://help.supermemo.org/wiki/Glossary:Overload "Glossary:Overload") 、困惑、与 SuperMemo 相关的问题（例如布局）、缺乏进步感等。没有明确的满足感，许多用户得出结论，成本大于收益。他们并没有错。在一个月甚至更长的时间内，获得投资回报并不容易。很少有用户能够在强烈的热情推动下迅速开始学习！
- 增量学习的许多优势依赖于你的学习[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")的大小。随着[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")的增大， [搜索&复习](https://help.supermemo.org/wiki/Subset_learning#Search_and_review "Subset learning")的价值也随之增加。在这个过程的开始，当[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")较小，因此知识贫乏时，你可能会觉得自己像是在广袤无趣的沙漠中铺设一座大型金字塔的第一块砖。最大的乐趣可以在金字塔的顶部找到，当你能够从良好的视角看到自己知识的广度时。这种比喻并不意味着你的金字塔会停止生长。你会不断地在侧面添加石块。金字塔将会在一生中不断地向上和向外生长。
- 失败的程度不仅仅包括辍学者和那些从未成功过的人。即使是长期用户也可能会与[知识形成](http://www.super-memory.com/articles/20rules.htm) 、复杂材料、 [优先事项](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 、 [过载](https://help.supermemo.org/wiki/Glossary:Overload "Glossary:Overload")等问题进行无休止的斗争。你开始得越晚，从痛苦到乐趣的过渡就越长。旧习惯难以改变。成功有一个明确的试金石：一旦增量学习变得有趣，你就知道自己做对了。如果在努力尝试几个月后仍未达到乐趣的水平，你需要重新思考你的策略。例如，你可能需要从头到尾再次阅读这篇文章。
- 如果你恰好是增量学习的快乐用户，你的知识将不断快速增长，你对学习的渴望也将以更快的速度不断增加。这使你成为一个非常小的精英群体的一部分。这也带来了责任。是时候帮助他人达到你的水平了！

## 增量学习的全局视角

一个常见的质疑来自于怀疑的观察者，他们认为将文本拆分成小单元将不可避免地导致失去从整体上远距离看待事物的能力。问题是： _增量学习是否会导致对全局的失去？_ 怀疑者未能意识到的是，支持 SuperMemo 的[间隔重复的强大力量。SuperMemo 方法确保对一旦掌握的知识有很高的](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition")[保留 。这意味着一旦知识在学生的头脑中被理解和良好建模，知识的连贯性就会保持在最低的分解状态。](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")

**SuperMemo 的主要优势在于你将大量不同的信息片段转化为一个在记忆中存在的坚实现实模型** 。这些信息片段可以像拼图的碎片一样随机分散在你的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中，但它们却能融入一个在你脑海中牢牢保持完整的连贯整体。换句话说，增量学习在知识处理层面是还原主义的，但在存储在你大脑中的记忆层面是整体主义的。

大局的担忧来自于传统教育中，学生在很大程度上依赖短期记忆。他们在考试前会集中精力突击学习某一科目，但在接下来的几个月里，除非在后续课程中复习，否则大部分知识会被遗忘。确实，短期记忆可以作为一种粘合剂，将大局保留在记忆中。然而，首先消失的正是短期记忆和最薄弱的长期记忆。考虑到这一点，你可能会担心如果开始将多门课程混合在一起，最终会陷入混乱和困惑。然而，增量学习并非如此。一旦建立了新的记忆，它们会逐渐得到强化，永久性地进入长期存储。增量学习所做的就是帮助你在任何给定时刻专注于一小部分材料。

**在传统的（无间隔）教育中，大局是通过短期记忆的粘合剂来维持的。因此，它是易变的，容易被遗忘。而在增量学习中，大局具有持久的价值！**

在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中担心大局，就像你担心在一个大型家庭聚会上因为同时见到太多家庭成员而忘记家庭的结构，或者因为过于专注于拼写自己名字的每个字母而忘记自己的名字。一旦大局在你的长期记忆中扎根，你就可以尽情玩弄细节。今天、明天，或者几年后。

## 增量学习可以让你变得更聪明

经典 SuperMemo 的用户 T. Sz.想知道：

> _如果我使用增量学习几年，这将如何影响他人对我的看法？他们会看到变化吗？我会变得更聪明并显得更聪明吗？我能在社交圈中凭借知识而闪耀吗？经过20年的增量学习，人们会怎么说？_

增量学习只有几年的历史。例如，增量阅读是在 2000 年引入的。 [优先队列](https://help.supermemo.org/wiki/Priority_queue "Priority queue")的基本概念则是在 2006 年才被提出。没有优先队列，大规模学习可能会导致大规模混乱。 [增量视频](https://help.supermemo.org/wiki/Incremental_video "Incremental video")于 2009 年诞生。因此，你不会找到有 20 年经验的用户。

### 增量学习更快

尽管增量学习的历史尚短，但很容易推测其强大之处。这是因为增量学习与其他学习形式（例如广泛阅读、大学学习、研究等）在最终效果上并没有太大区别。因此，结果是可以比较的。主要的区别在于，假设具备足够的技能，你将更快地达到更高的知识水平。这样，经过几个月的密集增量学习，某人可能获得的知识和行为与大学毕业生并无太大差异。当然，增量学习无法替代实验室实践、解决问题、与朋友和教授的讨论等。因此会存在差异。你可以问：“ _大学教育如何让我成为一个更好的人？_”一旦你回答了这个问题，你就会对增量学习有一个答案。

### 再多的学习也无法消除无知

如果你希望增量阅读能让你变得无所不知和聪明，那你就错了。人类的知识浩瀚无边，足以让一个两岁的孩子知道一些博士不知道的事情（尤其是如果这个孩子经过训练，比如回答“ _布基纳法索的首都是什么？_”）。

### 增量阅读者是不同的

增量阅读更可能是较少专注和更为广泛的。在大学里，你可能会在某个特定主题上深入学习，而在增量阅读中，你更可能根据自己的兴趣和遇到的知识空白而偏向多个相关领域。你的优先事项将反映你的个人特征，而你的知识可能会更加符合你自己的需求和热情。总的来说，增量阅读者与博学的人并没有太大区别。主要的区别可能体现在个性上。这并不是因为增量学习，而是因为只有少数人具备所需的心理特征，能够对增量阅读产生兴趣并维持这一过程。因此，增量阅读者可能看起来更有知识，仅仅是因为他们对知识的自然好奇心甚至是痴迷。这种对一般知识的追求可能会导致他们对其他人所表现出的知识空白感到短暂的惊讶。2013 年 9 月，科学家宣布[旅行者 1 号](https://en.wikipedia.org/wiki/Voyager_1)进入了[星际介质](https://en.wikipedia.org/wiki/Interstellar_medium) 。一组高智商的记者在一个受尊敬的新闻频道上讨论了那个历史时刻。 一位记者提到，旅行者1号是在1990年代发射的，现在已经离开了太阳系。其他记者点了点头。这时，一个痴迷的增量阅读者可能会停下来，意识到自己确实有些不同。

### 没有人喜欢聪明的家伙

重要的不是别人如何看待你，而是你如何改变自己的思维和解决问题的能力。在大多数情况下，周围很少有人关心你的问题和目标。为了实现这些目标而获得的知识对他人来说兴趣不大（超出一小圈亲密朋友的范围）。如果你在聚会上试图炫耀，反而会被礼貌地视为一种烦扰。被视为[聪明的家伙](http://www.merriam-webster.com/dictionary/smart%20aleck)在普遍上是负面的。如果你在相关的情境中展示你的知识（即不是为了炫耀而炫耀），人们的看法会有所不同。我们都喜欢那种能一眼看出病症并迅速提出解决方案的医生。然而，你在聚会上炫耀专业知识的机会相当渺茫（除非这是你所在领域的专业聚会）。

### 在更高意识中的奖励

增量阅读的最大优势可能体现在一般知识的领域。这些领域大多数人由于缺乏时间和足够的压力或动机而被忽视。一个学生可能需要为他的地理课程学习，一个医学研究人员可能需要阅读数十篇论文，但他们可能都没有足够的时间，或者需要复习物理学的基础知识，这在理解周围发生的事情时可能会很有用。因此，一个痴迷于增量阅读的人可能会达到一种更高的意识水平。如果你在一生中第一次听到[草雀](https://en.wikipedia.org/wiki/Common_Chaffinch) ，你可能会说“ _我从未见过那只鸟_ ”。然而，如果在接下来的几周内你看到那只鸟几次，你可能会感到惊讶。

在狭窄的视野下，很少有人能够指出可能与[银河系](https://en.wikipedia.org/wiki/Milky_Way)碰撞的星系。对类似事实和过程的知识和理解在日常活动中似乎没有太大应用，然而，它确实改变了人们对自己在宇宙中位置的看法。无知是盲目的。知识让你看到别人看不到的事物。这应该是足够的回报。

### 智能学习让你更聪明

如在[天才与创造力的根源](http://supermemo.com/articles/genius.htm)中所解释的： [聪明与愚蠢的学习](http://supermemo.com/articles/genius.htm#Smart%20and%20dumb%20learning) ，聪明的学习将帮助你变得更聪明。然而，糟糕的学习习惯可能导致巨大的时间浪费。SuperMemo 帮助你消除遗忘的问题。因此，它也可以帮助你记住浪费时间的垃圾。聪明学习的主要规则是： **学习高度适用的知识** 。学习那些改变你生活的事物。学习那些帮助你改变他人生活的事物。规则优于事实。你可以在数十种情况下运用概率或统计公式。如果你仅仅记住电话号码，这并不会让你变得更聪明。

### 增量学习可能会让你变得更笨

我们相信增量学习是 2013 年学习的巅峰。然而，它也可能让你变得更笨。如果你进行大量学习，你必然会遭受严重的记忆干扰。这意味着你也会忘记得更快，尤其是那些你没有保存在 SuperMemo 中的东西。对外界而言，你可能看起来更健忘，甚至心不在焉。你可能会忘记事件、承诺、邂逅、笑话、电影，以及我们理所当然的小记忆。顺便提一下，这种健忘也是由 [Facebook](https://facebook.com/)、[Twitter](https://twitter.com/) 等造成的。在这个混乱的现代世界里，我们几乎没有时间停下来思考重要的事情。如今，你可以购买带有内置扬声器的淋浴间或桑拿。与马桶进行对话只是时间问题。也许你已经在马桶上和你的 Facebook 朋友聊天了？这意味着最后的宁静思考和创造力的保留正面临信息过载的危险。这使我们以不同的方式变得更聪明。 然而，如果没有你的理性干预，这可能会对你的长期成功产生负面影响。增量学习也是如此，你必须保持警惕，只学习与自己的目标和社会地位高度相关和适用的内容。晚上关掉手机，去跑步时把 MP3 播放器留在家里，并保持你的增量阅读有序和井然。

### 理解自己的无知

增量学习帮助你量化你的知识。如果你进行增量学习，这可能是你最显著的特点： **你知道自己不知道什么以及为什么不知道。你更好地理解人类记忆的局限性及其价值！**

## 让你变得更聪明的知识

### 聪明与愚蠢的学习

并非所有知识都具有很大价值。记住所有的[亚马逊](https://en.wikipedia.org/wiki/Amazon_River)支流可能会占用你在其他学习领域的宝贵时间。除非你是[亚马逊](https://en.wikipedia.org/wiki/Amazon_River) 、 [雨林](https://en.wikipedia.org/wiki/Rain_forest) 、地理、印第安部落或相关领域的专家，否则你可能不希望从这个亚马逊练习开始你的增量学习体验。

您的学习努力必须基于新获得技能和知识的高适用性。如果您记住整个电话簿，您的问题解决能力只会略微提高（主要是通过记忆训练对大脑健康的有益影响）。另一方面，一个简单的[预期收益](https://en.wikipedia.org/wiki/Expected_payoff)公式可能会影响您在问题解决和生活中做出的所有决策。例如，它可以为您节省数年在彩票上的无谓投资。数以百万计的人被巨额彩票奖金所吸引，但他们绝不会同意放弃自己一生的全部收入，以便在退休时一次性获得回报，这实际上是参与彩票的常见概率收益。使用上述定义的术语，您会发现掌握和理解高度抽象的逻辑思维和决策规则能带来最大的好处。

要实现智能学习，您需要始终高度关注您决定学习的材料。您必须避免以牺牲长期学习为代价来追求短期满足。学习所有罗马皇帝及其有趣生活和统治的细节可能非常有趣。然而，除非您以大局为重（例如，试图理解文明为何兴衰），否则您可能从中获益不如努力学习那些不那么有趣但高度实用的公式，这些公式可能会帮助您优化饮食、投资、日常安排等。换句话说， **您不能仅仅被学习的乐趣所引导，而应被您的目标和需求所驱动** 。随着时间的推移，您将学会看到长期学习与长期收益之间的联系。您会自然而然地培养对有益学习的热爱。困难的学习材料仍然可以提供即时满足。

在你专注于目标的同时，不能忘记人类生活的整体背景。你不能仅仅因为这就是你的职业而只专注于研究汽车发动机。这会让你面临发展隧道视野的风险。你可能会花费数年时间来提高液体燃料发动机的效率，而其他人则通过参与锂电池或氢发动机的研究而取得飞跃。公司破产的主要原因之一是其领导层未能察觉变化。随着企业达尔文主义淘汰目光短浅的团队，未来社会将见证越来越多的智力达尔文主义。要理解趋势和未来，你需要研究人性、经济学、社会学、历史、神经生理学、数学、计算机科学等。你学习得越多，你的[预测能力](http://super-memory.com/articles/genius.htm#Predicting%20the%20future) 、解决问题的能力和创造力就会越强。

我们是否应该学习诸如“ _互联网是哪一年诞生的？_”这样的“琐事”？ **琐事的概念是高度相对的！** 对于幼儿园的孩子来说，互联网的诞生几乎没有意义。在这个发展阶段，孩子可能很难理解互联网本身的概念。许多父母会等到孩子上小学后才会给他们展示网页浏览器。将互联网诞生的日期放在价值上，可能只有在努力理解技术发展历史的背景下才会显得重要。在这个背景下，1969 年可能和[古腾堡](http://www.super-memory.com/articles/genius.htm#Johannes%20Gutenberg)的名字一样重要。只有当 1960 年代和 1970 年代的多个事件相互交织时，ARPANET 的启用才变得有意义。当我们意识到在通过网络建立第一次连接之前，人类已经登上了月球，1969 年显得更加重要。如果我们深入挖掘，可能会发现，当查理·克莱因在 1969 年 10 月 29 日尝试登录时，网络在他输入字母 _G_ 时崩溃，这一事实令人振奋。想象一下，你正在为一个你已经工作了几年的重大安装项目进行调试。 你知道这个安装实现了革命性的概念，但它却不断崩溃。你快要失去信心了。这可能不一定是一个情感事件，毕竟你还需要运用概率来决定何时放弃盲目的追求，即使在经过多年的投资之后。小写字母 _G_ 与互联世界的突破性概念的并置将帮助你看到全局。如果你的概念足够伟大，你将继续经历另外 100 次崩溃，希望能找出原因。那种坚持似乎与“聪明”没有太大关系，但它会让你成为赢家（只要有一点运气）。

倾听他人的建议和评价。你越年轻，越应该倾听。然而，最终， **必须由你来决定从琐事中筛选出黄金知识的标准** 。只有你能根据自己的目标来衡量知识的价值。

请记住，并非所有知识都能轻易以陈述的方式表达。因此，请利用你自己神经网络的力量：解决问题、练习技能、计算、抽象、联想等。你和其他人可能无法看到或口头表达某些规则，但你的大脑会在实践过程中提取这些规则。一旦规则被发展出来，尝试将其表述并写下来。这对你和他人都将有所帮助。

### 有助于解决问题的知识

人工智能中的问题解决可以用来模拟我们与智能和创造力相关联的人类心理能力。解决问题的方法有很多，例如演绎、归纳、溯因、类比推理或概率方法、神经网络方法、状态空间搜索等。尽管其中一些方法可能会产生错误的结论或不确定的回应，但它们都可以通过演绎方法来表达，例如在数学定理证明中使用的方法。演绎是从公理或前提出发，通过使用有效的推理规则进行逻辑推导，得出真实的公式或断言。断言的选择和推理规则的选择越好，专家系统或人脑的推理能力就越广泛。我们记忆中存储的丰富推理知识使我们在思考时快速、创造性强、智能高效，能够解决问题等。然而，我们需要事实知识作为推导的原材料。即使是创造性的灵感和思维，也可以用多线程推导和在逻辑编程中良好形式化的回溯来表达。 这里没有魔法液体或灵魂的反射。只有一张简单的神经元网络在恢复编码的事实和规则模式。另见： [创造力和天才的根源](http://super-memory.com/articles/genius.htm) 。

为了提升你的问题解决能力，你需要掌握大量的推理知识。如果你学习特定类别的问题解决方法，你可能需要在记忆推理的结果和其各个步骤之间做出选择。两者都能为你提供将知识转化为新质量的公式。学习推导步骤是有成本的。同时，它也可以让你掌握高度抽象的推导规则。你需要在成本和收益之间找到平衡。我们不能盲目假设推导问题的答案比简单记忆答案更好。在具有多个实例的问题中，我们往往会倾向于学习推导。例如，学习如何推导 X 的三次方比记忆所有有用的对：参数-结果要容易得多。另一方面，大多数人在仍然能够通过对二进制数进行位运算推导结果时，就已经记住了乘法表。记忆大约 40 个组合似乎更为可行，尤其是推导总是需要时间，而我们在一生中会使用乘法表成千上万次。在这种情况下，记忆在一生的时间视角中节省了数小时和数天。 拥有丰富事实和推理知识的大脑将会联想起最遥远的想法，并得出最意想不到的结论。 通过对这一丰富推理过程的有意识控制，我们建立了现在的文明。

### 有助于创造力的知识

创造力基于思想的联想。拥有一个在各种情况下不断涌现新想法的创造性大脑是有帮助的。然而，创造力也可以得到辅助。当你掌握了与尝试创造性解决或阐述的问题相关领域的大量事实和规则时，你的创造力会得到增强。如果你采用增量学习，随机想法的联想将在整个过程中成为常态。

科学和技术历史上的所有创新都基于联想。健忘的记忆可以通过外部知识来源得到帮助，每一个重大的科学突破都是基于一系列较小的步骤，其中许多步骤都基于数小时的搜索、试错和实验。拥有广泛知识的大脑更有可能产生所需的联想。在解决问题时，推理知识在创造性努力中也特别有价值。你所知道的规则帮助你推导出新的真理，并将这些真理与你当前的所有知识联系起来。

两个想法只有在同一个头脑中才能结合在一起产生伟大的发明。它们要么必须同时被唤起，要么一个必须意外地从外部出现：

- [阿基米德](https://en.wikipedia.org/wiki/Archimedes)走进浴缸，立刻将这一事实与他所知道的重量和浮力联系起来。在他那个时代，成千上万的希腊人未能建立这种联系。这不仅仅是因为他们的思维不够活跃，更多的是因为他们对[静水力学](https://en.wikipedia.org/wiki/Hydrostatics)的理解不足。
- [艾萨克·牛顿](https://en.wikipedia.org/wiki/Isaac_Newton)据说曾被一个苹果击中，这使他立即运用物理学和数学的知识来完善他在 _[《自然哲学的数学原理》](https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica)_ 中发表的三大著名运动定律，结合了引力法则。尽管这个故事无法验证，但它是创造性联想的一个很好的例子。
- [詹姆斯·瓦特](https://en.wikipedia.org/wiki/James_Watt) 据说曾观察水壶煮沸，将这一灵感与他的工程知识结合起来，以改进 [纽科门蒸汽机](https://en.wikipedia.org/wiki/Newcomen_steam_engine) 。这种关联在随后的百年间彻底改变了行业。

SuperMemo 不仅可以通过将您脑海中的各种知识片段结合起来来帮助您发挥创造力。它可以在您进行重复时帮助您产生新想法！创造性的联想并不是仅仅依赖于大脑中存在的两条知识。那两条知识必须同时被激活。只有这样，您的大脑才能建立联系。奇怪的是，与转基因番茄相关的重复可以激活与番茄汁、黄瓜、遗传疾病、外带晚餐、流感甚至无声的 [Mars Polar Lander](https://en.wikipedia.org/wiki/Mars_Polar_Lander) 相关的记忆。如果您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")结合了不同学科领域的知识，涌现到您脑海中的新想法和意想不到的联想可能会让您感到惊讶！

## 增量学习与人类进步

增量学习有潜力提升你的知识，并增强人类解决当今重大问题的能力。然而，从长远来看，人工智能的发展将减少人类学习的角色。

### 知识与历史

纵观历史，知识是人类进步的基石。从[石器时代](https://en.wikipedia.org/wiki/Stone_Age)到[信息时代](https://en.wikipedia.org/wiki/Information_Age) ，我们在无情的宇宙广袤中，经历痛苦，建立了一个微小的文明绿洲。人类历史由数十亿个个体生命构成，这些生命不断闪烁和消逝。历史书籍描绘了一幅由自我保护本能所驱动的画面，这些本能是由进化所印记的，展现出一连串不断的战争、利益冲突、影响力的得失、对权力的渴望以及对人性弱点的屈服。另一方面，进化的伟大成就——理性思维，持续为新的发现、发明、技术和哲学做出贡献。进步始终依赖于发现新真理，并以故事、解决方案、工具、书籍和其他信息载体的形式将其保存给后代。知识是人类力量的基础，但它不断与两种力量斗争，这两种力量定期削弱它：死亡和遗忘。我们可以通过书籍和其他信息存储形式来保存知识。 然而，这种知识只有在被人类大脑的创造力所利用时才会转化为价值。人类大脑的局限性将在未来许多年内继续成为进步的瓶颈。我们将在十年或二十年后才会开发出人工智能知识处理器。

### 知识与死亡

死亡对教育新一代提出了一个永恒的挑战。多年辛勤努力所获得的教授级知识在一次死亡中被抹去。新生儿需要经过多年的教育，才能够接触、阅读和理解这段文字。他们都必须努力掌握基本的读写能力、安全性行为和青少年怀孕的课程、利他主义优于自我主义的课程、明智与不明智选择的区别、存在主义问题等。尽管不断的再教育可能有助于每一代人获得新的视角，但这也是极其浪费的。目前尚无有效的补救措施来应对知识的死亡。我们能做的就是更加重视健康生活方式和健康研究。这两者促进了单一世代知识的持久性。

### 知识与遗忘

遗忘是一个自然过程，使我们能够有效利用大脑有限的记忆空间。我们遗忘那些被认为不太重要的知识，以便为更重要的知识腾出空间。目前，我们对记住和遗忘的控制仍然有限。今天，我们可以用来防止遗忘的最重要工具是练习。我们可以通过使用[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition") （即基于计算最佳[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")的学习技术）来最小化练习所需的时间。 **间隔重复是最大化人类一生知识的关键** 。

### 不朽的知识

人工智能是我们接近永恒知识的最佳希望。它几乎可以消除死亡问题（除了宇宙的热寂或我们今天无法预见的因素，例如空间的崩溃等）。人工智能还可以消除遗忘的问题（至少在可用存储的范围内）。一些遗忘是必要的，以形成清晰的联想知识，但这是一个受欢迎的现象，能够导致更具应用性的知识。尽管我们对人工智能抱有很大的希望，但通往永恒知识的最佳路径仍然必须依赖于人类大脑的使用。这就是为什么我们认为增量学习对人类进一步进步至关重要。

## 增量阅读是对传统书籍阅读的扩展

有人评论道：“ _如果古腾堡是个祝福，那么 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 可能就是个诅咒！_”。增量阅读是对传统书籍的攻击吗？如果你是断断续续地阅读，并且不断中断，这难道不会破坏故事情节吗？

无论[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")是诅咒还是祝福，取决于它的使用方式。传统阅读和增量阅读之间没有明确的过渡。在最简单的情况下，你可以像阅读一本书一样使用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。文本的分割和中断并不是强制性的。你可以从头到尾阅读整个文本，而不需要中断一次。如果你需要一个情节作为背景，并且不想费心将其记入长期记忆，这样做是有意义的。如果你确实休息或跳过文本的某些部分，或改变阅读的自然顺序，这一切都发生在与书籍世界相对应的情境中：

- **中断** ：你可以在一个晚上读完一本书，但很常见的是你会休息一下，每天分段阅读一本书。你甚至可能在忙碌的时期把它放回书架，几周后再回来阅读。
- **多个主题** ：同时阅读多本书并不罕见。你可以选择一本适合你当晚心情的书，或者在同一天阅读不同书籍的部分内容。
- **改变阅读顺序** ：许多读者会忍不住想要偷看书的结尾，或者翻回早期章节查看一些在之前阅读中未能记住的细节。
- **删除书籍的部分** ：在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中删除文本的部分类似于在阅读一本书后通过遗忘将其从记忆中抛弃。书仍然在书架上，原始电子文章可能仍然存在于你的档案中，但你的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")或你的记忆只保留了随着时间推移可能变得越来越稀疏的要点。原始阅读多年后，你可能只保留了单个引述或闪光的想法。其余的都消失了。

换句话说，在极端情况下，传统阅读和[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")之间可能没有区别。古腾堡的祝福是安全的。如果你认为中断或多主题是有益的，你可以比阅读书籍时更轻松地使用它们。在另一个极端，你可能希望处理成千上万的独立文章，使中断成为常态，只关注你认为最重要的部分，等等。

一个经验法则是：当你阅读故事或为了娱乐时，使用传统阅读。使用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")来处理学习材料、教科书、笔记或你需要记住一生（或至少几个月）的科学文献。

## 知识获取：优化领域

学习过程可以在七个主要领域得到增强。增量学习在每个领域都发挥着作用，但前两个领域仅能通过你不断增长的经验和量化进展的能力来受益：

1. **获取知识** : 随着全球互联网的出现，我们都可以轻松获取信息。使用 [Google](https://google.com/) 搜索知识既快速又简单且准确。 [维基百科](https://en.wikipedia.org/) 是人类历史上最大的百科全书。获取知识不再是人类学习的瓶颈。这几乎已经不再是一个问题！随着越来越多的人认识到互联网的潜力并为其发展做出贡献，网络的质量和作用将继续呈指数级增长。仍然有许多互补的信息来源与互联网成功竞争。然而，您只需等待一段时间，就可以安全地依赖互联网作为您唯一的信息来源。阅读网络的巨大好处，与阅读书籍相比，网络的超文本特性使得单个文章通常具有非常紧凑且自我解释的特性。在一本普通书籍中随机跳转到一个页面会让您感到困惑，因为材料的上下文依赖性。 另一方面，在随机跳转到网络上相应材料的选定页面时，同样的困惑不太可能困扰你。网络作者通常会更加努力地为页面添加上下文（至少以超链接的形式）。换句话说，通过阅读网络上的单个页面来构建优质知识比阅读纸质书籍的单个页面要容易得多。我们正朝着增量终身学习的理想迈进，而不是彻底复习学习，后者对许多人来说在学校年限结束时就结束了。在现代社会繁忙的日子里，很少有人能负担得起对自己在各个领域生疏知识的彻底复习。 逐步修复知识的空白要容易得多：今天一篇关于原子结构的文章，明天将发布一篇关于健康饮食的文章等。所有内容都严格根据个人的兴趣和职业优先事项进行调整。
2. **选择知识** ：你将面临在许多领域填补知识空白的需求，这超出了你的时间允许或记忆所能承受的范围。你可以请 SuperMemo 帮助你仔细记录并优先考虑所有需要增强的知识领域！在 SuperMemo 中，你是你所学和所忽视的知识的主人。你选择有价值信息的能力将随着所获得知识的增加而增长。增量学习帮助你量化你的知识并推测未来。这将帮助你在选择学习材料时更加挑剔。
3. **阅读** : 这是知识与大脑实际亲密接触的第一阶段。传统上，它以或多或少线性的方式流入记忆中（即一段接一段）。增量学习帮助你打破这一过程的线性，并通过增强**知识选择和优先级排序**来优化阅读。例如，你应该能够说“ _这一段可以稍后处理_ ”或“ _这一段现在需要特别关注_ ”或“ _这一段可以完全跳过，即使我决定再次阅读这篇文章_ ”或“ _我想在三天后更详细地再读这一段_ ”或“ _我想将这一段标记为低优先级，并在处理完所有高优先级段落后再来处理它_ ”，等等。
4. **知识的表现** ：你呈现知识的方式会影响理解和[记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") （即你记住的程度）。简单的事物更容易理解。简单的事物也更容易记住。许多人没有意识到简单性对学习的影响程度。许多人怀疑即使是最复杂的材料也可以以非常简单的方式呈现。爱因斯坦注意到“ _应该可以向酒吧女招待解释物理定律_ ”。
5. **记忆知识** ：SuperMemo 帮助您消除遗忘的问题。您将基于 SuperMemo 近 30 年前首创的[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition")进行所有学习。SuperMemo 通过仅在需要复习时安排学习材料的复习，从而节省了大量时间（见：[SuperMemo 简介](https://help.supermemo.org/wiki/SuperMemo "SuperMemo") ）。
6. **知识的生命周期** ：您在[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中的知识和记忆中的知识不断演变和成熟。这将涉及持续的重新措辞、重新排序和重新关联知识片段。您将经常放弃那些过时或失去高优先级状态的知识部分。您将应用知识表示的规则，使知识更易于记忆。随着时间的推移，您的知识也将变得更加关联。换句话说，它将成为做出智能选择的更合适的基础。
7. **使用知识** ：当知识得到正确使用时，它就转化为价值。从长远来看，本文讨论的技能将间接帮助你在使用自己知识时变得更加创造性和熟练。不出所料，有效使用知识所需的技能也是知识的一部分，并且随着知识的增加而自发增长。

## 成本效益分析

### 知识的成本

在 SuperMemo 中存储的每一条知识都会增加学习的总时间成本。如果知识是[良好表述](http://super-memory.com/articles/20rules.htm)的，我们可以估计一个单独的元素在一生中会重复 8 到 20 次。如果单次重复的时间在 3 秒到 15 秒之间，我们可以得出一个项目的预期终身成本在 24 秒到 5 分钟之间。SuperMemo 有一个统计指标称为**[成本](https://help.supermemo.org/wiki/Statistics#Cost "Statistics")** 。它衡量单个记忆元素的总时间成本。在一个管理良好的长期学习过程中，这个成本通常估计为每个项目 2-3 分钟，时间跨度为 10 年。这比理论预测的要高，因为每个集合中包含一小部分所谓的[寄生虫](https://help.supermemo.org/wiki/Glossary:Leech "Glossary:Leech") ，这些寄生虫会显著增加平均成本/项目（请注意， [寄生虫](https://help.supermemo.org/wiki/Glossary:Leech "Glossary:Leech")可以很容易地被[检测和移除](https://help.supermemo.org/wiki/Leeches "Leeches")出学习过程）。决定一条知识是否应该通过 SuperMemo 进行记忆的合理标准是判断将该条知识常驻记忆中所带来的好处。 如果这些好处似乎没有超过 10 分钟，学生可能会选择不将该项目添加到 SuperMemo 中。 经过一段时间的练习，这种分析变成了一种半自动的过程，并应无缝融入你的生活中

成本效益标准是： **如果不知道一条知识的成本大于在给定时间内重复该知识的成本，则将该知识添加到 SuperMemo**（否则不添加，或将其降级为较低优先级）。

### 物品成本

一个[结构良好](http://super-memory.com/articles/20rules.htm)[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的生命周期成本大约在 24 秒到 5 分钟之间。在任何给定时刻，可以通过将**[重复次数](https://help.supermemo.org/wiki/Element_data#Repetitions "Element data")  : 未来** （在[**元素数据**窗口](https://help.supermemo.org/wiki/Element_data "Element data")中）乘以**平均时间** （在[学习统计](https://help.supermemo.org/wiki/Statistics "Statistics")中）来近似计算 30 年的范围。SuperMemo 在[**元素数据**窗口](https://help.supermemo.org/wiki/Element_data "Element data")中显示此值。如果您的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")结构不良（即难以记忆），则此成本可能会膨胀！要消除结构不良的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ，请使用[漏斗分析](https://help.supermemo.org/wiki/Leeches "Leeches") 。

### 好处

您在[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中的每一条知识都应该与一个具体的好处相关联。只有**您**才能准确地评估其价值。例如，记住健身房的开放时间的价值可以通过将（1）您选择错误时间的概率与（2）错过健身房的时间成本相乘来近似计算。例如，如果您认为概率是 25%，而选择错误时间的成本是 40 分钟，那么知道开放时间的成本大约是 10 分钟。在这种情况下，记住开放时间的成本将低于错过健身房的成本。然而，如果概率足够低或时间损失足够小，您就不应该将开放时间添加到 SuperMemo 中。例如，如果概率是 10%，而时间损失是 3 分钟，您不太可能收回您的学习投资！自然，在两者之间还有一些不那么明确的情况。如果您不确定是否应该将某条知识添加到 SuperMemo 中，请以足够低的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")添加它。通过溢出工具（例如[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone") 、 [自动排序](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort")等），您可以以很小的成本拖动价值较低的知识。

### 优先事项

你会很快意识到，有非常多的信息符合成本效益标准。你永远无法希望学习所有这些信息。这实际上是乐观的。这意味着通过良好的知识选择，你可以获得远超过仅仅记住健身时间的几分钟。通过学习那些改变你生活的事物，你可能会获得无数小时的收益。确保你始终专注于最有益材料的最佳工具是使用[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") 。如果你有太多[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")需要记忆，优先级较低的那些将会得到较少的关注，并且更容易被遗忘。然而，这也意味着它们将受益于[间隔效应](https://help.supermemo.org/wiki/Glossary:Spacing_effect "Glossary:Spacing effect") ，你将以更快的速度学习更多这样的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") （尽管保留率较低）。

## 选择知识

美国国会图书馆拥有 10TB 的印刷材料。全球知识资源可以用 PB（10005 字节）来衡量。所有数字信息已经达到了 ZB（10007 字节）。在一个人的一生中，只有极小一部分这些资源可以被掌握。即使是一本_[大英百科全书](http://britannica.com/)_的单一副本，其内容也远远超出一个人一生所能涵盖的范围！学习的实际速度和一生的学习限制可以通过 SuperMemo 来测量（见：[SuperMemo 的理论方面](http://super-memory.com/articles/theory.htm) ）。

人脑的微观容量并没有阻止它建立我们所知的现代文明。人类的力量来自于：

1. **集体努力** - 十亿个头脑总比一个多
2. **劳动分工** - 所有集体任务都受到自上而下的功能分解，通常一个大脑一次只需要处理一小部分信息
3. **知识选择技能** - 人脑的联想能力与遗忘的选择性特征相结合，帮助我们保留在解决问题时实际上最有用的记忆

增量学习是对抗遗忘的一个好方法。然而，遗忘在我们的生活中扮演着重要角色。它对我们每天获得的知识进行有价值的垃圾回收。如果遗忘的力量减弱（如在增量学习中所发生的那样），你在选择知识方面的责任将大大增加！

**SuperMemo 将帮助你消除遗忘！同时，它会增加你对选择真正重要和适用知识的责任。如果不加以注意和小心使用，SuperMemo 实际上可能会浪费你的时间，帮助你记住一堆无用的琐事。**

一条仅占用您硬盘几个字节的信息，可能具有相对价值，这种价值可能转化为数百万美元的净收益，也可能转化为数百万美元的净损失。它也可能完全没有价值。例如，一句用法语写的句子“_SuperMemo vous aide a mémoriser et apprendre diverses informations comme une langue, des chiffres, etc._”对于一个不懂法语的人来说几乎没有价值。与此同时，一个与[海姆立克急救法](https://en.wikipedia.org/wiki/Heimlich_maneuver#Abdominal_thrusts)相关的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")可以挽救家庭成员的生命。我们知道，预期收益等于收益的价值乘以其概率。因此，家庭成员窒息的[低概率](http://www.nlm.nih.gov/medlineplus/ency/article/000047.htm)和实际成功应用该急救法的概率，使得“海姆立克项目”的价值仅为人生命价值的一小部分。同时，医生在医学知识上的任何小错误实际上都可能导致某人的生命损失，并带来相当大的负面价值！

**经常情况下，记住今天学到的三件最好的事情比将一篇单一主题的文章记得一字不漏更有益！**

## 读者是领导者

你一定听过父母或老师说过“ _读者是领导者_ ”。 [哈里·杜鲁门](https://en.wikipedia.org/wiki/Harry_truman)对此说法增加了一个悲观的转折：“ _并不是每个读者都是领导者，但每个领导者都是读者_ ”。这个限定告诉你，阅读并不是灵丹妙药，聪明地阅读至关重要。随着网络、 [维基百科](https://en.wikipedia.org/) 、博客圈和其他知识来源的出现，获取信息比以往任何时候都容易。这也意味着信息变得更加令人不知所措。总是有太多的东西需要阅读。而从众多重要来源中选择是困难的。这不再是一个有一百本书的世界，你需要从中挑选五本。现在，你实际上有成千上万的菜单选项可供一顿饭选择。老书虫的困境现在变得更加痛苦。在网上搜索书籍选择的解决方案时，你会发现数十个提供建议的博客。然而，大多数建议都是基于难以掌握的易变技能。你需要成为书籍选择、速读、浏览、浏览或阅读决策、重点标记和复习策略、边注和下划线的专家。 对于传统的大量阅读掌握（不使用 SuperMemo），你需要走极端：在厕所里阅读、在火车上阅读、在手机上阅读，利用你的闲暇时间等。你需要无情地控制自己的情绪，做出“不要阅读”或“不要完成”的决定，或“不要重新阅读”的决策等。

如果你掌握了增量学习，你将无法解决信息过载的问题。然而，你将系统地解决所有困扰大量读者的问题。一旦你踏上唯一合理的阅读之路，你将使自己的思维摆脱阅读中所有的困境和压力。增量学习帮助你专注于学习本身！

至于洗手间的时间，增量学习可以为创造性思维腾出空间。毕竟，你也想思考自己的想法，而不仅仅是处理他人的输出。

**[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 解决了所有大量阅读者的主要困境！增量阅读者是领导者。**

## 增量阅读会减缓掌握复杂主题的速度吗？

[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")会减缓或妨碍学习复杂学科，如[量子力学](https://en.wikipedia.org/wiki/Quantum_mechanics)吗？复杂知识仅仅基于“记忆段落”还是远不止于此？在并行处理许多事情时，任何形式的中断或延迟都可能减缓这一过程。许多人认为[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")适合临时抱佛脚，但不适合认真学习，尤其是当涉及复杂的主题时。

### 示例意见 1：解决量子力学

这是一个从未尝试过增量学习的人的意见示例：

> _我相信 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") (IR) 可能会减缓或妨碍学习需要更深入理解的复杂主题——与肤浅的记忆相对。从我所了解的情况来看，在增量阅读中，学生在与某一主题相关的段落上只花费几秒钟，然后跳到另一个完全无关的主题。这种在不同主题之间的切换使得进行更深入的思考变得困难，甚至不可能，因此无法发现超越段落肤浅记忆的更深层真理。当我阅读时，我寻找的是支撑所用描述性语言的概念和方法，并试图想象它们在我其他追求中的适用性。换句话说，发现更深层的真理需要更深入的思考。如果每次在一个主题上只花费几秒钟，后者就很难达到。作为一个实际的补充，硬科学和工程领域的技术论文中，不同作者、不同研究小组和不同期刊之间常常存在符号不一致的情况。同样的符号在不同的科学论文中可能意味着不同的东西。 类似地，不同的作者可能会使用不同的符号来表示相同的量。有时这些差异很明显，容易发现，而有时则只是微妙的。当一次阅读一篇论文时，读者会熟悉术语和符号，并能够在识别细微差别的同时跟随推理的思路。然而，当同时阅读几十篇（或几百篇！）文章，并频繁切换时，就会出现一种令人困惑的噩梦场景，在各种符号和细微术语差异的丛林中，意义变得模糊。这使得在任何一篇论文中跟随推理的思路变得不可能。以下是几个（不完美的）隐喻，可能传达在尝试将信息检索应用于学习复杂主题和发现更深层真理时的失落感：_
> 
> 1. _如果你是一位葡萄酒鉴赏家，想象一下你只能闻葡萄酒的香气，却不能喝它，甚至不能把它放进嘴里。你对葡萄酒的知识会有多好？通过练习，你可能会学会区分不同的酒庄、年份等。你甚至可能会更高效，能够在创纪录的时间内做到这一点。然而，我敢打赌你会觉得缺少了什么，觉得自己在某种程度上被欺骗了，觉得自己对葡萄酒的了解并不全面。这是有道理的。IR 也是如此。你只是“闻”到了知识，却从未“品尝”过它。如果你的目标是学习一门外语，这可能就足够了。但有些领域要求你深入挖掘，才能获得真正的洞察和真实的真相。_
> 2. _身体锻炼。一个全面的锻炼计划应包含心血管训练和力量训练的元素。IR 就像只有高强度的有氧运动。当然，如果你坚持有氧运动，过一段时间你将能够在创纪录的时间内将一个小包裹送到城镇另一端——这可能就是你所追求的全部。然而，这并不会给你提供足够的上肢力量来帮助移动一个 400 公斤的光学工作台。IR 也是如此：你可能会用你广博的知识给观众留下深刻印象，但你必须把重大的智力负担留给其他人。_

上述推理很容易被证明是错误的。我们可以想象两个极端：

- 所有学习都是通过传统的教科书处理进行的，结合了教师的所有学术工具，包括实践、推理、互动、实验室工作等
- 所有学习都是纯粹的增量学习，没有时间进行自由思考、边际计算、走动、交谈等。

很容易证明这两者都有缺陷。例如，传统学习缺乏[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition") ，而纯粹的增量学习可能被视为缺乏对话或实验室实践。显然，最佳方案在这两种极端之间的某个混合点上。 **增量学习是全面教育中的一种补充工具** 。它不应该垄断你的时间和思维。它不应被视为替代品，而应被视为一种增强。因此，找到你的最佳方案取决于你自己。

[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")是你所希望的一切。它可以是快速阅读、临时阅读或大量阅读。这完全取决于你选择的优先级标准。因此，它最好被描述为一种阅读管理技术。因此，无论所研究的内容复杂与否，它都是不可或缺的。一方面，你可以比传统的快速阅读更快地阅读文章，同时保留重要段落以供将来复习。另一方面，你可以仔细拆解单个段落，并将其转化为经典的问答材料，这些材料将永远伴随你。此外，你可以自由操控流入阅读/学习过程的材料量。你可以专注于一百篇最重要的文章，或者选择成千上万篇。自然，在后者的情况下，你对单个文章的时间分配将会非常有限。例如，如果你将 10,000 篇文章导入 SuperMemo，你可能在一年内每天阅读 1 小时后，最终会有 50,000 到 100,000 个[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 。在这种情况下，低优先级的文章确实会在过程中停留数月。 当然，这正是[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的目的：专注于重要的内容，同时不忽视任何属于你兴趣范围内的事物。 如果你的关注点发生变化，您可以使用搜索和导航工具来加快对阅读材料中最重要部分的复习。

[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")在教科书学习中是普遍适用的。无论你需要分析什么复杂概念，或者在边缘进行什么计算，你都可以在增量阅读教科书的同时进行（前提是你有电子版）。有一个古老的规则：无论你需要终生记住的东西（或至少几个月），都要进行增量处理（以提高记忆、增强理解，并在长期内节省时间）。无论你此刻需要什么，为了理解主题，都要进行批量处理（非增量处理）。通过将两者结合起来，你可以最大限度地提高学习效果。

比喻地说，铅笔是一个有用的工具，可以提升你的生活。你不会想用铅笔替代电脑，也不会在烹饪时使用铅笔。然而，随时准备好铅笔仍然可以提升你的生活。不用说，我们相信， [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")远比铅笔更有用。

所提出的推理不仅是错误的，而且还基于对增量学习的一些误解：

- 在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，你并不是只花几秒钟在每个[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")上，这种说法并不正确。所花的时间取决于你的需求。可能是几秒钟，也可能是整整一天（例如，在考试前、进行研究时，或是沉浸在学习热情中时）。
- 可以想象，一个增量阅读的新手可能会因为缺乏对工具集的了解而在过程中迷失，从而使得这一过程比标准教科书学习更加混乱。在权衡利弊时，应该始终考虑一个理想的情况，即学生真正理解增量学习的方法。这通常需要几个月的使用。学习过程应该从较简单的概念和较简单的学科开始，然后再处理更复杂的学科。
- 一些研究论文不太适合[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。需要大量使用工作记忆或在短期记忆中投入大量精力的论文**不**适合增量阅读。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")在每次学习具有长期应用的知识时都很有用。具有复杂方法论并且包含丰富新特定符号和标记的研究论文不适合。你应该以自己的方式阅读这些论文，并在 SuperMemo 中留下少量笔记（“深思”）。在工作记忆仍然有效时使用它，并在阅读后立即清空。自然，对于大规模学习，你会选择那些产生最小短期记忆负担的文本，即写得很好、以简洁的表述专注于终身价值的文本。
- 对于新手来说，通过[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")获得的知识可能没有专业人士感受到的那么甜美。在后者的情况下，由于建立了良好的背景知识和依赖于长期记忆的坚实语义背景，“味道”可能是精致的。一个经验丰富的增量阅读者对这个酒的比喻会有完全相反的感受。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")不仅能让人感受到复杂的挥发物全谱的精妙结构。它带来的味道、香气和乐趣将不仅仅持续一个晚上，而是终生难忘！
- [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的效果总是取决于目标。如果目标是给某些观众留下深刻印象，那么很可能会实现。然而，如果计划是进行一些“重度智力劳动”， [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")将提供丰富的工具集来增强这一过程，并为您提供完成工作所需的扎实长期知识基础。

### 示例意见 2：在基础物理方面挣扎

这是另一个尝试过增量学习但觉得困难的人的意见示例：

> _我认为[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")在学习一些物理概念时要么非常困难，要么根本无法使用。例如，我有以下关于地球和太阳的文本，你会如何使用增量阅读来处理这个问题？_
> 
> _地球正以非常缓慢的速度远离太阳。这发生有两个原因。第一个是太阳因太阳风不断失去质量。随着太阳质量的减少，它对地球的引力减弱，因此地球稍微远离太阳。第二个原因与潮汐力有关。正如月球正缓慢远离地球一样，地球也在非常缓慢地远离太阳。在地球-月球的情况下，月球对地球施加引力，产生潮汐并稍微减缓地球的自转，使白天变长。这一行为有反应——月球的轨道加速。如果某物移动得更快，它必须向外移动以保持在轨道上，因此月球以每年3.8厘米的速度慢慢远离我们。太阳的情况也是如此，但地球对太阳的影响远小于月球对地球的影响。结果是地球微小的远离太阳的漂移。_

这个例子处理起来并不比其他适合[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的知识更难。在类似情况下取得成功需要一本百科全书式的文本或一定程度的编辑努力来拆解更复杂的散文。所呈现的例子面临两个障碍：

1. **隐式列举** 。文本提到地球远离太阳的两个原因，但并没有在明确的句子中列出它们。需要阅读整个段落才能找出第二个原因。
2. **通过类比解释** 。潮汐力对太阳的影响通过描述月球产生的类似力量来解释。你无法提取“第二个原因”，而不包括和理解“ _月球示例背景_ ”。

以下是如何使用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")处理所呈现文本的方式（请注意编辑工作的努力以及需要完全重述其中一句话的必要性）：

- [增量阅读过程的进展](http://super-memory.com/articles/users/earth_files/index.htm)
- [结果问题和答案](http://super-memory.com/articles/users/earth_files/earth.txt)

一些作者通过假设读者具备大量知识，或者像这里所述的那样，给学生的工作记忆加载大量数据，而不是逐步建立知识（即从基础开始），使得[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")变得非常困难。在讨论的量子力学示例中，处理任何有意义文本所需的基本词汇相当广泛，并且涉及许多物理和数学的分支。此外，良好理解所有概念需要大量超出线性阅读的数学练习。

## 渐进主义和中断并不是强制性的

如果你喜欢从头到尾不停地阅读文本，并且总是觉得在睡觉前很难停止阅读一本书，你仍然可以从[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中受益。

没有一个增量阅读者不是从对中断的顾虑开始的。矛盾的是， **你的顾虑越强，你可能成为一个优秀增量阅读者的候选人就越好** ！

一个流行的误解是，有些急躁的人倾向于成为增量阅读者——我们称他们为**小口喝者** ——而那些喜欢大口吞噬知识的人——我们称他们为**大口吞者** 。事实是，所有创造性个体本质上都是大口吞者。增量主义既是一种技能，也是一种习惯，所有大口吞者都可以随着时间的推移而学习。

没有人会在第一天就爱上 SuperMemo。可能需要几周的时间才能注意到它的强大。尽管如此，由于我们没有感知遗忘速度的传感器，你需要理性地数学化地理解 SuperMemo 对大脑的影响。你无法轻易感受到知识的力量以及它是如何被遗忘迅速削弱的。

[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的价值比 SuperMemo 本身更需要时间来被认可。使用 SuperMemo，您只需学习两个操作（ **[添加新内容](https://help.supermemo.org/wiki/Add_new "Add new")**和 **[学习](https://help.supermemo.org/wiki/Learn "Learn")** ）。而对于[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ，您需要一个在多年使用中不断增长和改进的工具集。没错！即使在学习几年后，您也会发现新的方法来加快您自己的学习速度，使用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。您可能需要一年时间才能注意到对[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的上瘾的初步迹象。这是一种良性的上瘾形式，几乎没有负面副作用。

“吞噬者”成为优秀增量阅读者的矛盾倾向源于他们对知识的渴望。无法停止阅读的事实是这种渴望的有力表现，它是帮助你成为一个上瘾阅读者的主要驱动力。你可能仍然缺乏的是对[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")力量的理解和对“ _切换以获取更多_ ”的渴望。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")将帮助你培养对在任何给定时刻最大化所处理信息价值的渴望。

您可以今天开始[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ，而无需停止阅读您觉得有趣的文章。

**在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，中断阅读是常态，但并不是强制性的！**

您可以从头到尾阅读所有文章，仅使用增量阅读工具来优先排序文章、提取最重要的句子并将其转换为[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 。换句话说，您不需要增量主义就能实现知识的扎实[记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") 。普通的网络冲浪者在遇到一篇似乎值得阅读的文章时只有两个选择：（A） _太有趣了，来读一下，_ 和（B） _不够有趣。也许我以后再读_ 。相比之下，增量阅读者可以确定文章的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，并始终只阅读当前[优先级列表](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")顶部的文章（可能带有用户定义的随机化程度）。此外，在任何时候，他或她都可以说： _有趣，但没有我想象中那么有趣。我们降低优先级，稍后再回来（如果有的话）_。

一个吞噬者是由一种自然神经机制驱动的，这种机制是所有人类进步的基础： **好奇心** 。同样的机制可以用来放大渐进主义：对接下来会出现的文章或段落的好奇心。一旦你培养出健康的渐进阅读过程，你将增加另一种自然神经机制： **不耐烦** 。不耐烦也是进步的支柱。我们不喜欢长时间的低效率。我们喜欢成功的即时满足，成功越大越好。在 [渐进阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 中，你会不断被好奇心驱动，但一旦你正在阅读的文本没有带来足够的时间价值，你就会感到想要切换。你的渐进阅读过程越健康，你每秒可以提取的价值就越多。你会形成对现实平均价值流的感知，每当你低于这个期望时，你都会增加阅读的渐进性质（即使错误在于你，而不是文本作者，例如，当你知识的空白导致理解不佳时）。通过将好奇心与不耐烦结合起来，你可以从一个 _吞噬者_ 转变为一个 _啜饮者_ 。 而且您仍然可以毫无中断地从头到尾阅读高质量的文章。 **[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")帮助您根据内容进行优先排序，而不是对短暂的评估印象做出反应** 。

你会注意到，增量学习的态度是随着你的技术和解析能力提高而养成的习惯。你很少会删除低质量的文章，但这些文章的优先级会逐渐降低，并可能在过程中无限期地停留。因此，你将最大化你在学习上花费的每一秒钟的教育效果。

作为一名增量阅读者，你可能会逐渐对旧式书籍（与可导入的电子书和文章相对）产生厌恶。如果你选择阅读一本书，就好像你在说：“ _这是全世界最重要的阅读材料_ ”。那么书中的一系列段落就被视为以其在书中出现的精确顺序阅读的最重要段落。你赋予书籍作者神一般的能力，以无瑕疵、全知和全能的方式将信息传递到你的大脑中。

**大口喝和小口喝在生物学上没有区别！** 从一种方式转变为另一种方式需要理解增量学习，掌握 SuperMemo 工具集，磨练技能，自我控制，合理化学习过程，并逐渐提高流入记忆中的知识的平均值。

## 完美主义者的增量学习

如果你是一个完美主义者，你可能最初会对接受增量学习的混乱感到困惑。你可能会想，为什么在你的[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")看起来完美装饰有字体、样式表和图片之前，你应该让它们未完成。

如果你更加坚定地尝试增量学习，你会明白事实正好相反： **完美主义者应该热爱增量学习** ！你的完美主义本性应该接受一个首要原则：在最短时间内获得最高质量的知识。重要的不是你[集合](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")中[填空题](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")的美，而是你脑海中知识的美。对于一个熟练的学生来说，增量学习基于一套完美形成的严格规则，这些规则保证了[知识获取](https://help.supermemo.org/wiki/Glossary:Acquisition_rate "Glossary:Acquisition rate")的最大速度。确实，这些规则中的一些在最开始可能会让你感到不安。如果你看到一个符合[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")条件的句子，规则是：执行[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，并将对其确切表述的担忧推迟到第一次重复。仅仅选择填空关键词就会在你的记忆中留下足够的痕迹，足以算作一次重复。在这种情况下，完善[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的表述将变成一种艺术追求。更高层次的规则是： **最小的工作换取最大的记忆效果** 。 因此，当你进行第一次重复时，你将改善[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的表述。再一次，你只需完成成功进行一次重复所必需的工作。你再次放弃细节和花哨的东西。最终，你的[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")将变得完美表述、完美优先，并完美地放置在你的[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")中。或者，它将被删除或留在你的“待办”子集中。 完美的增量学习规则和完美的学习结果应该满足你对完美主义的需求，不是您学习材料的完美“外观”。

许多人倾向于蔑视万维网，称其为“人类信息垃圾场”。这种态度使得利用网络作为“人类知识的金矿”变得困难。 [蒂姆·伯纳斯-李](https://en.wikipedia.org/wiki/Tim_Berners-Lee)为公众知识传播创造了“完美规则”（[HTML](https://en.wikipedia.org/wiki/HTML)，[HTTP](https://en.wikipedia.org/wiki/HTTP)）。我们可以调整自己的“完美规则”来挖掘网络。增量学习使用“完美规则”将网络数据转化为黄金知识。作为一个完美主义者，你不应该担心网络的混乱或你自己的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")的混乱。真正重要的是完美的黄金最终结果：智慧！

最后，如果你仍然无法接受不完美的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，那么没有什么可以阻止你将它们完美地表述。这样的表述可能会更符合你的感知，但你自然会以较慢的速度学习。

## 增量阅读并不是一种注意力破坏者

在增量学习中，选择合适的学习材料非常重要。许多文本或视频不适合增量处理。一位从未尝试过增量学习的 SuperMemo 用户写道：

> _文章的结构和质量在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中可能确实如此重要，因为真正的学习瓶颈是人脑（皮层可塑性的速度）？如果你每天只能吸收 X 个知识点——如果你尝试做更多的事情，会对你的大脑造成不良影响吗？这里有一个想法：如果你让大脑过载新信息，它就没有时间在你已知的事物之间形成有意义的联系，因此你的知识可能会被简化为回答类似游戏节目问题的能力。  
> _解决任何重大问题都需要长时间的集中注意力。我担心信息成瘾（每天200条新信息）会导致注意力缺陷。你的大脑习惯于每15秒就获得一些闪亮的新东西（新的推文、新的搞笑图片、新的头条等），所以当你告诉它要专注于一件事情4个小时时，它并不听话。我觉得在上网冲浪之前，我能够更专注于一件事情。
> 
> _所以，换个通俗的说法， **[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")可能是终极的注意力杀手！！！**_

上述关于注意力、记忆瓶颈、“有意义的连接”等的推理中有很多真理。然而，将 SuperMemo 与互联网迷使用的 [Twitter](https://twitter.com/) 或 [Facebook](https://facebook.com/) 进行比较是非常不准确的！ [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中的奖励基于高质量的学习，而不是“闪亮的东西或有趣的东西”。当然，什么也不能阻止“闪亮/有趣”的东西被导入到 SuperMemo 中。这就是最终奖励的性质也将取决于一个人的个性和自律的原因。

当按照推荐规则使用时： **[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 应该显著提高注意力** （如[增量学习的优势](https://help.supermemo.org/wiki/Incremental_reading#Advantages_of_incremental_reading "Incremental reading")中所解释）。

### 学习速度瓶颈

皮层可塑性确实是学习过程中的瓶颈。如果不使用[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition") ，所有的速读和速学努力可能都会付诸东流，因为这最终决定了建立长期记忆的速度。请记住，在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，材料的量可能非常大，但在理想情况下，进入学习过程的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")数量相对较少（通常每天 10-20 个，而不是 200 个！）。寻找能够在长期内带来最佳价值的黄金知识确实需要大量时间。

### 超负荷记忆与睡眠的作用

记忆瓶颈的存在是过载问题的直接结果。你可以用过多的信息来过载你的学习过程，但你不太可能“过载你的长期记忆”。遗忘和在睡眠中进行的垃圾回收过程正是为了防止这个问题而进化的。无论你多么努力地学习过多的事实，遗忘将会清理掉多余的信息，而睡眠中的记忆优化将确保你发展出所有必要的“有意义的连接”。当然，这只有在你获得所需的充足睡眠时才会发生（即避免使用闹钟、安眠药、熬夜等）。

更多内容请见： [睡眠中的神经优化](http://super-memory.com/articles/sleep.htm#Neural_optimization_in_sleep)

### 学习与问题解决

解决问题确实需要高度集中。然而，在理想的世界中，你应该将时间分为两个部分：（1）学习和（2）解决问题。在科维的术语中，你的学习提升了_生产能力_ ，而你的解决问题时间则是你的_生产_时间。当然，当解决问题发生在信息不足的情况下，你可以将这两个时间段结合起来。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")是应对这种情况的理想工具。你可以在保持对当前问题的最大关注的同时，将新信息的流入与创造性努力和问题解决结合起来。这在[增量学习的优势](https://help.supermemo.org/wiki/Incremental_reading#Advantages_of_incremental_reading "Incremental reading")中有解释： [创造力](https://help.supermemo.org/wiki/Incremental_reading#Creativity_boost "Incremental reading") 。你可以通过使用各种[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")工具，特别是[搜索与回顾](https://help.supermemo.org/wiki/Subset_learning#Search_and_review "Subset learning")以及[分支回顾](https://help.supermemo.org/wiki/Subset_learning#Branch_review "Subset learning") ，来优化单一主题关注的程度。

另见： [增量问题解决](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_problem_solving "Creativity and problem solving in SuperMemo") 。

### 网络成瘾

互联网干扰在使用 SuperMemo 时可能会破坏专注。然而，这更多是自律的问题，而不是与 SuperMemo 本身相关的固有问题。是否愿意偏离到 [Facebook](https://facebook.com/) 或 [Twitter](https://twitter.com/)，完全取决于你自己。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")可能会鼓励一定程度的偏离（例如，从[维基百科](https://en.wikipedia.org/)和/或字典中导入补充材料）。 [优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")的整个概念正是为了抵消这种偏离的成本。在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，你偏离、导入、优先排序，然后……忘记（关于上网的短途旅行）。你可能访问 20 个页面，但不是在浪费时间，而是导入和优先排序。你会在几分钟内回到专注的轨道。整个过程可以在你的理性控制之下，网络可能成为盟友而不是敌人。比喻地说，互联网瘾君子不断被闪亮的东西分散注意力，而增量阅读者则专注于寻找黄金知识。

### 增量阅读提升注意力

[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")通过让你专注于可管理的知识部分来提高注意力，而不会感到不知所措，不会偏离主题，不会在更难的材料上卡住，也不必担心在快速阅读时可能会错过重要内容等。体验这种改善的最佳方式是尝试[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。然而，你应该知道效果不会立竿见影。你需要投入大量时间来学习工具，然后还需要更多时间来磨练你的策略，了解自己的记忆和推理能力。很少有增量阅读者在学习的头几个月就变得真正热情。

### 文章质量在学习中很重要

在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，您将迅速培养出能够即时区分高质量文章与充满废话和无用文字的文章的技能。您确实会寻找引人注目的标题、有意义的段落、最少的跑题评论等。文章的质量将决定您使用速读的能力，以及快速优先处理材料的能力。这与从社交媒体、即时新闻和其他网络干扰中获得的即时满足感无关。

## 你真的能同时阅读数千篇文章吗？

一位访问者在 [super-memory.com](http://super-memory.com/) 上对增量学习的说法进行了评论：

> _一个朋友向我推荐了[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。然而，我立刻被你们的说法所打动：同时阅读数千篇文章。这不仅不可能，而且听起来像是过度炒作的营销。在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，你所做的只是将文章分成小块并分别阅读。使用这种方法，你会失去整体视角。我担心你们在卖假药_ 。

这种怀疑是可以理解的，但我们仍然坚持最初的说法：你确实可以同时阅读数千篇文章。这是因为_阅读_可以被理解为一个_过程_或作为一个 _行为_ 。没有人可以理智地声称同时进行多次阅读行为。在 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 中，任何时刻只有一篇文章受到激光般的关注。很少有学生在一天内阅读超过 50 篇文章，而且他们很少会全部阅读。然而，他们可能在一个月内轻松阅读或浏览几千篇文章，并在增量学习的_过程中_保留数十万篇文章。从这个意义上说， _同时阅读数千篇文章_ 是一个准确但有些诱人的描述。

要理解[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ，您需要了解 SuperMemo（或一般的[间隔重复](https://help.supermemo.org/wiki/Glossary:Repetition_spacing "Glossary:Repetition spacing") ），以及间歇性阅读对记忆的影响。在没有基于[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition")的学习过程的帮助下，分块阅读确实没有太大意义。然而，一旦您掌握并理解了[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的技巧，您将获得与预期相反的效果：您不仅不会失去对整体情况的把握，还会对您在处理过的文章中认为重要的内容保持持久、稳定和连贯的记忆印象。

**在一个管理良好的增量学习过程中，整体图景保持在比传统学习更好的连贯状态。**

## 增量阅读与记忆干扰

您可能听说过学习中的干扰。当学生一个接一个地学习两件事时，他们的表现往往不如专注于一件事的情况。这听起来可能是一个理由来否定[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")作为一种有效的学习方法。

干扰确实会破坏学习。如果你在没有完全理解某个主题的情况下阅读它，然后又跟随一个在性质上令人困惑的相似主题，你在测试中的表现确实会变差。然而，如果第一个主题是以扎实的理解进行学习，这种影响就会明显减弱。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")使得你只需阅读你理解的内容。然后，它通过产生[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")来促进长期[记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") 。最后，它定期重新发现学习过程中的弱点并填补这些空白。当执行得当时， [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")会产生相反的效果。它通过迫使你解决材料中的矛盾来最小化干扰。它无情地惩罚所有不完全理解的情况。在课堂条件下，你可能在主题 A 上获得模糊的通过，然后通过深入主题 B 来加重这种模糊。在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，SuperMemo 会迫使你在 A 和 B 之间跳转，直到这两者形成一个和谐的知识体系，干扰最小，连接性最大。 请注意，当干扰的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")受到持续重读时，关于干扰的相同研究会产生截然不同的结果。在 SuperMemo 中，重读是很常见的，而多次主动重复[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")是常态。实验的结果也可能因为在旧复习中增加一定的新颖性而变得模糊，这大大提高了注意力。更好的学习随之而来。

## 为什么维基百科比大英百科全书更好？

### 维基百科更好

- 每个月 [维基百科](https://en.wikipedia.org/) 变得更加丰富，主流文章的错误率不断降低
- [维基百科](https://en.wikipedia.org/)由于其由众包决定的结构，更适合[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")
- 某些文章在[大英百科全书](http://britannica.com/)中无法找到（例如，搜索“SuperMemo”或“增量阅读”）

### 大英百科全书很难

由于其风格， [大英百科全书](http://britannica.com/)通常不适合[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。它阅读起来令人愉悦，解释了事物，偶尔偏离主题，提供了例子，但它并不像众包的[维基百科](https://en.wikipedia.org/)那样信息丰富和上下文丰富。

尝试使用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")处理以下文本。该文本摘自[大英百科全书](http://britannica.com/)的一篇关于睡眠的文章：

> _除了已经提到的行为和生理标准外，主观体验（在自我情况下）和对这种体验的口头报告（在他人情况下）在人的层面上被用来定义睡眠。当被唤醒时，人们可能会感觉或说：“我刚才在睡觉”，这样的判断通常被接受为识别预唤醒状态为睡眠的证据。然而，这种主观证据可能与行为分类和睡眠电生理学不一致，这引发了关于如何定义睡眠真实测量的有趣问题。睡眠是仅由客观或主观证据决定，还是由两者的某种组合决定？测量这种证据的最佳方法是什么？更一般地说，当缺乏一个或多个睡眠标准的证据，或当可用标准生成的证据不一致时，定义睡眠的问题就会出现。所有动物都睡觉吗？_

这段文字以一个不祥的背景破题：“ _已经提到_ ”。它提出了一些有趣的问题。然而，对于一个增量阅读者来说，找到能够回答长期学习最基本问题的填空关键词需要一些时间： _我真正想从刚刚阅读的段落中终生记住什么？_

### 简单英语维基百科是危险的

许多用户认为[简单英语维基百科](https://simple.wikipedia.org/)在理解问题方面比[维基百科](https://en.wikipedia.org/)本身更好。然而，简化的术语会导致术语的不准确。尽管语言更简单，但所呈现的问题可能会得到肤浅或误导性的处理。如果你想要一段关于中国帝国的简短故事，而不是一篇冗长的维基百科论文，那么[简单英语维基百科](https://simple.wikipedia.org/)可能是一个优势。然而，如果你试图理解复杂的经济学或量子物理，依赖简单的文本可能会适得其反。通常情况下，你应该通过引入补充材料来努力应对复杂的术语。走捷径可能会让你迷失方向。

## 增量阅读与书籍

电子材料的增量阅读优于阅读书籍或在浏览器中阅读（在学习材料质量相同的情况下）。一旦书籍或文章的数量超过某个水平，所有基本的阅读、书签和高亮方法就开始失效。

没有 SuperMemo，你将很难优先排序、分类、组织、安排、重新优先排序、搜索和复习等。整个 SuperMemo 的“引擎”在后台是这个过程最重要的组成部分。对于大量材料，当在浏览器中阅读时，你的效率可能只有使用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")时的 5-10%（从长远来看）。

在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，您可以使用以下工具：

- 文章 [优先级](https://help.supermemo.org/wiki/Priority_queue "Priority queue")
- 文章调度
- 文章排序
- [读取点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point")
- [填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") （比多次复制、粘贴和编辑更简单、更快速和更准确）
- [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")留下先前工作的痕迹，设置[阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point") ，安排并优先处理最重要的信息片段
- [搜索与复习](https://help.supermemo.org/wiki/Subset_learning#Search_and_review "Subset learning")
- 文章自动拆分、自动调度和自动优先级排序
- 更多

[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")可能会降低你对以下内容的耐受性：

- 信息含量低的文本（高散文性，低事实性）
- 结构不良的文本
- 具有指称模糊性的文本
- 低上下文参考的文本
- 信息锚定不足的文本（快速阅读所需）

[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")将提升您的技能：

- 文本选择
- 文本优先级排序
- 语义/结构处理
- 记忆处理
- 速读

## 增量学习与新闻

### 你可能不想使用 SuperMemo 来处理新闻！

唐纳德·拉姆斯菲尔德声称他遵循的原则是：“ _第一次报告总是错误的_ ”。

新闻传递的知识通常只在短期内有效。增量学习仅对长期记忆有用。通过增量学习处理新闻的最大好处在于意识到新闻的短暂性，并通过增量方法将其转变为“旧新闻”，从而减轻对新闻的渴望。

这些是新闻作为学习材料不佳的主要原因：

- 与新闻相关的知识是不完整的。如果你听到“突发新闻”，你知道这指的是“破碎”的新闻。它是不完整和不准确的。如果你曾考虑将其长久保留在记忆中，可以在一周、一个月或几年后再回到[维基百科](https://en.wikipedia.org/) 。当新闻变成历史时，它变得最有用。然而，大多数时候，它在下一个“新闻周期”中就被遗忘了。
- 与新闻相关的知识是矛盾的。如果你恰好将新新闻与旧新闻逐步对比，你会意识到人们在新信息出现时改变想法的程度。这种思维和观点的演变可能是新闻中最有趣的部分。
- 与新闻相关的知识是稀少的。昨天的新闻今天可能仍然是新闻，只是角度上有一些微小的变化。新闻是重复的，并且被单一的“热点”问题所垄断。如果你每周看一次新闻，你几乎不会错过任何对你长期视角重要的事情。
- 与新闻相关的知识是微不足道的。突发新闻可能完全专注于飞机坠毁或炸弹爆炸。除非你或你身边的人直接受到影响，否则你几乎不会因为了解悲剧的细节而变得更好。一般来说，理解飞机坠毁或炸弹爆炸更为重要。一部国家地理的纪录片可能是获取此类知识的更好来源。除非这是你第一次接触坠毁和爆炸，否则你很少能学到任何重大意义的东西。你改变世界的能力更应该通过其他知识来源来提升。在这一领域的优化也将有助于建立一个更少炸弹和更少坠毁的未来。

新闻在你年轻时可能对你更有价值，那时你仍然需要了解很多关于世界的知识，或者当你试图学习一门新语言并希望理解来自另一个国家的新闻时。在这种情况下，主要将新闻作为你学习过程中应该补充的材料的指示来源，以便更好地理解新闻。

除非你学习新闻学（并需要了解这个过程），或政治科学（包括新闻对公众的影响），或者你只是靠保持最新信息而生存，否则你应该限制对新闻的渴望，专注于具有长期适用性的知识。

### 示例：突发新闻如何报道新闻

考虑一下 CNN 的这个有趣片段，它展示了对“突发新闻”的痴迷。在 2013 年 9 月 22 日的一个阳光明媚的星期天，Fareed Zakaria 谈到了安格拉·默克尔对德国和欧洲的影响：

> _默克尔采取了重要措施来帮助欧洲陷入困境的经济，直接和间接地花费了数百亿美元。另一方面，默克尔对欧洲大部分地区实施了紧缩政策，这种政策过于严厉且适得其反。她的论点是，这是让希腊和意大利等政府变得更具竞争力的唯一方法。现在，讽刺的是……_

现在这里有一个真正的讽刺。智能评论被与安格拉·默克尔本人相关的突发新闻打断。观众没有机会了解这位德国领导人的历史角色。相反，他们只得到了2分钟的“交易”，观看安格拉·默克尔在联邦选举中投票。整整三分钟的宁静时光，让人有机会欣赏安格拉在这一历史时刻的着装和肢体语言。

啊，是的，如果你无法忍受类似的干扰并想了解安吉拉的历史角色，请查看扎卡里亚的记录，链接在这里：[FAREED ZAKARIA GPS: Not the Time for Big Sticks; Interview with Bill Clinton; Will Germany's Merkel Practice What She Preaches?](http://transcripts.cnn.com/TRANSCRIPTS/1309/22/fzgps.01.html)

## 最小信息原则

最小信息原则指出，您的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")应尽可能简单，并始终提出一个简单的问题。在[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition")中聚合信息会导致学习速度变慢。例如，您可能会倾向于将[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")表述为：

> **问题** : 特伦特公会议自 1545 年开始决定了什么，会议持续了多久？  
> **回答** : 天主教会的基本信仰；18 年。

在 SuperMemo 中，两个独立的记忆应该被分开，因为它们几乎总是需要不同的重复时间。如果你在思考特伦特会议时总能激活相同的思维路径（“神经元一起发火”以相同的模式），你的特定[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")在这个过程中有很大机会长时间存活而不会出现[记忆失误](https://help.supermemo.org/wiki/Glossary:Lapse "Glossary:Lapse") 。然而，一旦你建立了一个大型的相似[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")数据库，并在时间压力下回顾你的大量材料，你的回顾总会倾向于剔除冗余的信息。随着时间的推移，你的优质[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")将被简化为基本的信息，这往往无法通过其主要测试：在现实生活中的适用性。可能会发生的是，尽管没有出现任何[记忆失误](https://help.supermemo.org/wiki/Glossary:Lapse "Glossary:Lapse") ，在 2-3 年后，有人会在新的语境中问你关于特伦特会议的事，而你会惊讶地发现，尽管你在[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")中包含了所有必要的信息，你却无法合理地回答这个问题。两种不同难度的记忆可以比作两种具有不同飞行特性的飞机。 困难的部分（例如，理事会的 18 年持续时间）可以比作一架缓慢飞行的飞机。简单的部分（这里指的是天主教会）可以比作一架现代喷气机。对聚合的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的回顾可以比作以相同速度飞行两架飞机。在极端情况下，这可能是不可能的。妥协的速度可能对一架慢飞机来说太高，超过某个速度限制可能会导致其解体，而快速飞机则无法减速到足够的程度而不失速。在我们的记忆中，遗忘等同于遗忘，而失速是由[间隔效应](https://help.supermemo.org/wiki/Glossary:Spacing_effect "Glossary:Spacing effect")引起的。通过在每次重复时进行复杂且可重复的推理，你可能会像用遥控器操控两架飞机一样。然而，这总是很困难，并且在重复时需要大量的专注和深思。你的大脑对这种“强制重复推理”有自然的防御机制。它被设计得“智力懒惰”，因此在能量上是高效的。实践表明， [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")产生了更多的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 。然而，这些[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")通常更容易记住。 最终，您在复习 5-10 个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")上花费的时间比在一个会聚合信息并遭受重复[记忆丧失](https://help.supermemo.org/wiki/Glossary:Lapse "Glossary:Lapse")或非常短的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")的项目上花费的时间要少。

在进化过程中，大脑发展出了一些策略，以抽象化细节，仅保留最基本、最有用和最常用的信息。这些策略对于生存非常有效，但在实现我们的教育目标方面却不那么理想。特伦特会议是我们希望掌握的知识的典型例子，但这相当昂贵。这是因为，对于大多数人来说，这些知识并没有在日常对话、电视节目、日常应用或工作中的茶水间得到强化。如果你特别在这个主题上阅读很多，情况可能会有所不同。这可能有助于记忆以高效的方式建立起来。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")使得将这些难以保留的知识牢牢扎根于上下文中成为可能，同时确保个别重复专注于非常具体且易于保留的记忆。

这就是同一段落如何通过[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")进行处理，并且矛盾的是，从长远来看可以显著节省时间：

> **问题** : 从 1545 年开始并持续了 18 年的会议对天主教的基本信仰做出了决定。  
> **答案** : Trent

> **问题** : 特伦特公会议于 [...](年份) 开始，持续了 18 年，作出了关于天主教基本信仰的决定。  
> **答案** : 1545

> **问题** : 特伦特大公会议于 1545 年开始，持续了 [...] 年，做出了关于天主教基本信仰的决定。  
> **答案** : 18

> **问题** : 特伦特公会议于 1545 年开始，持续了 18 年，做出了关于基本信仰的决定 [...]  
> **答案** : 天主教会

> **问题** : 特伦特公会议于 1545 年开始，持续了 18 年，做出了关于 [...] 的决定。  
> **答案** : （天主教）教会的信仰

> **问题** : [...]，始于 1545 年，持续了 18 年，决定了天主教的基本信仰。  
> **答案** : 特伦特公会议

最后，如果你确定这个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")适合你，请在接下来的几年中检查它的表现。如果你在 2 年的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")内没有出现[遗忘](https://help.supermemo.org/wiki/Glossary:Lapse "Glossary:Lapse") ，那么你可以说这个特定的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")确实适合你。在这种情况下，你和 [20 条规则](http://www.super-memory.com/articles/20rules.htm)之间没有分歧。只是对于大多数人来说，即使在正确的时间进行复习，这个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")在 2 年内很可能会产生[遗忘](https://help.supermemo.org/wiki/Glossary:Lapse "Glossary:Lapse") 。根据项目的难度，前 2 年的重复次数可能低至 3 次或超过 20 次。如果你的[默认遗忘指数](https://supermemo.guru/wiki/Forgetting_index_in_SuperMemo#default_forgetting_index)是 10%，这意味着保留这个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的概率从 70%到完全不可接受的 90%遗忘概率！这个最后的数字在 SuperMemo 用户中很少被理解和意识到，应该始终让你认真思考知识高效形成的规则。

# 示例：增量阅读的实际应用

以下示例来自于发布在 [super-memory.com](http://super-memory.com/) 的各种文章。它们展示了如何将电子文本转换为 [填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，以及如何在文章、 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 和 [填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 的层面上解决表述问题。

## 示例：填空删除

以句子形式被动处理的想法很少在你的记忆中留下持久的痕迹，即使它们被定期复习。通常，在 2-3 个月后，你会注意到在复习时，你实际上似乎无法回忆起你曾经在你的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中有过某个句子。你会很快发现，你需要**主动回忆**才能记住。主动回忆是一个你必须回答问题的过程。例如，你可能会看到一张[查尔斯·达尔文](https://en.wikipedia.org/wiki/Charles_darwin)的照片，并被要求识别他的面孔。从长远来看，你需要用[主动回忆](https://help.supermemo.org/wiki/Glossary:Active_recall "Glossary:Active recall")替代[被动复习](https://help.supermemo.org/wiki/Glossary:Passive_review "Glossary:Passive review") 。否则，你对这个事实的记忆将无法永久巩固。

将简单句子转换为[主动回忆](https://help.supermemo.org/wiki/Glossary:Active_recall "Glossary:Active recall")材料的最快方法是使用[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 。使用[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，您可以处理简单的陈述句，例如：

> _第一次世界大战是由于1914年一名塞尔维亚民族主义者刺杀了奥匈帝国的弗朗茨·斐迪南大公而引发的_

这些句子被转换为问答对，可以用于积极刺激你的记忆，以达到最佳回忆效果：

> **问题** : 第一次世界大战是由于 1914 年一名塞尔维亚民族主义者刺杀了奥匈帝国的弗朗茨·斐迪南大公而引发的。  
> **答案** : 奥匈帝国

> **问题** : 第一次世界大战是由于奥匈帝国的弗朗茨·斐迪南大公被一名塞尔维亚民族主义者刺杀而引发的，发生在 [...](年份)。  
> **答案** : 1914

> **问题** : [...](战争) 是由于 1914 年奥匈帝国的弗朗茨·斐迪南大公被一名塞尔维亚民族主义者刺杀而引发的  
> **答案** : WW1

## 示例：提取和删除

### 示例文本（由学生提交）

> _在发现冥王星后，迅速确定冥王星太小，无法解释其他行星轨道的差异。对行星 X 的搜索持续进行，但没有找到任何东西。也不太可能会找到：如果使用从“旅行者 2 号”与海王星相遇中确定的海王星质量，这些差异就会消失。_

### 示例处理

在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，处理文本的方法有很多种。下面的例子只是其中一种方式。

#### 提取1和4的填空：冥王星和轨道差异

> 冥王星 太 小 以至于无法解释 其他行星轨道中的差异

1. **问题** : [...](planet) 太小，无法解释其他行星轨道的差异。  
    **答案** : 冥王星
2. **问题** : 冥王星 太 [...] 以至于无法解释其他行星轨道的差异  
    **答案** : 小
3. **问题** : 冥王星 太 小 以至于无法解释其他行星的 [...]  
    **答案** : 轨道中的差异
4. **问题** : 冥王星 太 小 以至于无法解释 轨道中的差异 [...]  
    **答案** : 行星

#### 提取 2 和 1 填空：行星 X

> 冥王星太小，无法解释其他行星轨道的差异。 对于行星 X 的搜索仍在继续，但没有发现任何东西 。

1. **问题** : 冥王星太小了 。对行星 X 的搜索继续进行，[...] 被发现。  
    **回答** : 什么都没有

#### 提取3和5个填空：旅行者号和海王星

> 冥王星太小，无法解释其他行星轨道的差异。 如果使用从旅行者 2 号与海王星相遇中确定的海王星的质量 ，这些差异消失 。

1. **问题** : 冥王星太小了。 如果使用从旅行者 2 号探测器遇到的海王星质量，则存在差异 [...]  
    **答案** : 消失
2. **问题** : 冥王星太小了。 如果使用新的 [...] 海王星，这些差异消失 。  
    **答案** : 质量
3. **问题** : 冥王星太小了。 如果使用由探测器 [...] 确定的质量 ，这些差异将会消失 。  
    **答案** : 海王星
4. **问题** : 冥王星太小了。 如果使用从海王星的 [...] 遭遇中确定的质量 ，则这些差异消失 。  
    **答案** : 旅行者 2 号
5. **问题** : 冥王星太小了。 如果使用从旅行者 2 号与 [...] 的接触中确定的质量 ，这些差异消失 。  
    **答案** : 海王星

## 示例：处理一篇文章

### 阅读文章

让我们来看一个非常简短、自成一体的文章示例，该文章于 1999 年 4 月发布在 [CNN](http://cnn.com/) 网站上。这篇短文可以在几分钟内阅读完，并可以作为调整饮食的积极激励。

> 研究表明，抗氧化剂可能减缓衰老过程 1999 年 4 月 5 日 网络发布时间：东部夏令时间晚上 9:39（格林威治标准时间 0139） 记者 Linda Ciampa 报道 -- 塔夫茨大学的研究表明，富含某些水果和蔬菜的健康饮食可能会减缓甚至逆转衰老过程。富含抗氧化剂的食物——如蓝莓、草莓、菠菜和西兰花——具有医生所称的高 ORAC（氧自由基吸收能力）水平。在美国农业部赞助的研究中，接受高 ORAC 饮食的中年老鼠经历的记忆丧失少于那些接受正常饮食的老鼠。一些年长、反应较慢的老鼠在摄入抗氧化剂后变得和年轻同伴一样活跃。“我们预防了这些老鼠在 15 个月大时通常会出现的一些大脑和行为变化，”美国农业部研究员吉姆·约瑟夫说。抗氧化剂在破坏自由基方面有效——这些细胞损伤化合物可能导致癌症和心脏病，并加速衰老过程。“衰老是由于自由基的产生这一点已被广泛接受。 “所以我们在营养上能做的任何事情来提供额外的抗氧化剂，很可能会在衰老过程中保护我们，”约瑟夫说。这个事实已经促使许多人选择富含抗氧化剂的饮食。“我把它看作是一种储蓄账户。我今天通过正确饮食受益，但我将来也会受益，”30岁的科里·阿尔科克说。“随着我年龄的增长，我也会拥有良好的健康。”"
> 
> ---
> 
> #标题：抗氧化剂可能减缓衰老过程  
> #作者: Linda Ciampa  
> #日期：1999年4月5日  
> #来源：CNN

### 提炼文章的精髓

在阅读过程中，您应该选择文章中最重要的部分。文章介绍了一些与健康饮食相关的事实，并添加了许多冗余的解释。对于您的复习，您只需要核心信息，这通常只占整个文本的一小部分。请再次查看相同的文本，并强调四个最关键的部分（编号不是必需的，仅用于您后续参考的方便）：

> 研究表明，健康的 (1) 饮食中添加某些水果和蔬菜可能会减缓甚至逆转衰老过程 。 (2) 富含抗氧化剂的食物——如蓝莓、草莓、菠菜和西兰花——具有高 ORAC（氧自由基吸收能力）水平 。在美国农业部赞助的研究中，喂食高 ORAC 饮食的中年老鼠经历的记忆丧失比那些正常饮食的老鼠要少。一些年长、行动缓慢的老鼠在摄入抗氧化剂后变得和年轻同伴一样活跃。“我们预防了这些老鼠在 15 个月大时通常会出现的一些大脑和行为变化，”美国农业部研究员吉姆·约瑟夫说。 (3) 抗氧化剂在破坏自由基方面有效——自由基是会损害细胞的化合物，可能导致癌症和心脏病，并加速衰老过程 。 (4) " 人们普遍认为衰老是由于自由基的产生 。因此，我们在营养上所能做的任何提供额外抗氧化剂的事情，都可能在衰老过程中保护我们，”约瑟夫说。 这一事实已经促使许多人开始摄入富含抗氧化剂的饮食。“我把它看作是一种储蓄账户。 我今天从正确饮食中受益，但我将来也会受益“30岁的科里·阿尔科克说。”

### 改善摘录的措辞

一旦您从文章中提取出重要片段，您可能需要重新表述各个片段，以确保它们完全独立于上下文，避免冗余信息，易于阅读，并且以这样的方式表述，使片段的开头作为后续短语的引入，而不是反过来。请查看[健康饮食文章中的示例](https://help.supermemo.org/wiki/Incremental_learning#Extracting_the_essence_from_the_article) 。我们选择了四个重要片段，这些片段（在表格左侧呈现）被重新表述为完全独立的信息（在右侧）。请注意，有两个片段生成了多个重新表述的片段，并且有一个片段在仔细分析后被删除，因为它显得冗余。

|原始片段未经更改直接粘贴自 CNN 文章|修改后的片段：更短且更易读（有时拆分为多个部分）|
|---|---|
|[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 1|   |
|1. 富含某些水果和蔬菜的饮食可能会减缓甚至逆转衰老过程|1. 水果和蔬菜的饮食可能逆转衰老|
|[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 2|   |
|2. 富含抗氧化剂的食物——如蓝莓、草莓、菠菜和西兰花——具有高 ORAC（氧自由基吸收能力）水平|2. 富含抗氧化剂的食物示例：蓝莓、草莓、菠菜和西兰花|
|3. 富含抗氧化剂的食物具有高水平的氧自由基吸收能力（ORAC）|
|[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 3|   |
|3. 抗氧化剂有效地破坏自由基——这些细胞损伤化合物可能导致癌症和心脏病，并加速衰老过程|4. 抗氧化剂破坏自由基|
|5. 自由基是会损害细胞的化合物，导致癌症、心脏病和衰老|
|[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 4|   |
|4. 众所周知，衰老是由于自由基的产生|经过仔细审查，左侧的片段与上面列出的片段相比似乎是多余的。我们可以将其从集合中删除。|

### 生成填空删除

我们现在可以将之前生成的[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")转换为基于[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的[主动回忆](https://help.supermemo.org/wiki/Glossary:Active_recall "Glossary:Active recall")[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ：

|原始[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")|从[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")生成的填空删除项[填空删除项](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")|
|---|---|
|[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") a|   |
|1. 水果和蔬菜的饮食可能逆转衰老|1. **问题** : 饮食中的 [...] 和蔬菜可能逆转衰老  <br>    **答案** : 水果|
|2. **问题** : 水果饮食和 [...] 可能逆转衰老  <br>    **答案** : 蔬菜|
|3. **问题：** 水果和蔬菜的饮食可能会逆转 [...]  <br>    **答案** : 老化|
|[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") b|   |
|2. 富含抗氧化剂的食物示例：蓝莓、草莓、菠菜和西兰花|4. **问题** : 富含抗氧化剂的例子：蓝莓、草莓、菠菜和西兰花  <br>    **答案** : 食物|
|5. **问题** : 富含 [...] 的食物示例：蓝莓、草莓、菠菜和西兰花  <br>    **答案** : 抗氧化剂|
|6. **问题** : 富含抗氧化剂的食物示例：[...]  <br>    **答案** : 蓝莓、草莓、菠菜和西兰花|
|[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") c|   |
|3. 富含抗氧化剂的食物具有高水平的氧自由基吸收能力（ORAC）|7. **问题** : [...] 富含抗氧化剂的食物具有高水平的氧自由基吸收能力（ORAC）  <br>    **答案** : 食物|
|8. **问题** : 富含/缺乏抗氧化剂的食物具有高水平的氧自由基吸收能力（ORAC）  <br>    **答案** : 丰富|
|9. **问题** : 富含 [...] 的食物具有高水平的氧自由基吸收能力（ORAC）  <br>    **答案** : 抗氧化剂|
|10. **问题** : 富含抗氧化剂的食物具有 (高/低) 的氧自由基吸收能力（ORAC）  <br>    **答案** : 高|
|11. **问题** : 富含抗氧化剂的食物具有高 [...] 的氧自由基吸收能力（ORAC）  <br>    **答案** : 级别|
|12. **问题** : 富含抗氧化剂的食物具有高水平的 [...]（ORAC）  <br>    **答案** : 氧自由基吸收能力|
|13. **问题** : 富含抗氧化剂的食物具有高水平的氧自由基吸收能力 ([...](缩写))  <br>    **答案** : ORAC|
|[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") d|   |
|4. 抗氧化剂破坏自由基|14. **问题** : [...](食物成分) 破坏自由基  <br>    **答案** : 抗氧化剂|
|15. **问题** : 抗氧化剂 (破坏/产生) 自由基  <br>    **答案** : 摧毁|
|16. **问题** : 抗氧化剂破坏 [...](有害化合物)  <br>    **答案** : 自由基|
|[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") e|   |
|5. 自由基是会损害细胞的化合物，导致癌症、心脏病和衰老|17. [...] 是会损害细胞的化合物，导致癌症、心脏病和衰老。  <br>    **答案** : 自由基|
|18. 自由基是 [...] 损害化合物，导致癌症、心脏病和衰老。  <br>    **答案** : cell|
|19. 自由基是细胞 (构建/损害) 化合物，导致癌症、心脏病和衰老  <br>    **答案** : 有害的|
|20. 自由基是会损害细胞的化合物，导致 [...](健康问题)。  <br>    **答案** : 癌症、心脏病和衰老|

虽然我们从原始的 5 个[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")中生成了 20 个[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，但重要的是要强调，复习这么多学习材料最终会让你花费更少的时间，并且记忆效果会更好！请注意， [填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")会仔细测试你对所学文章所有重要语义方面的知识。

### 将填空题转换为普通问题

在提取片段并制定[主动回忆](https://help.supermemo.org/wiki/Glossary:Active_recall "Glossary:Active recall")问题后，您应该不断重新评估各个信息片段的重要性、措辞，删除不太重要的部分并将其移至稍后复习等。下面可以找到重新制定的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")示例。请注意， [填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 4-6 和[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 20 已进一步拆分，以消除集合枚举（独立将癌症或衰老与自由基关联要比列出它们造成的所有健康问题更容易）。

|原始[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")|重新表述的[主动回忆](https://help.supermemo.org/wiki/Glossary:Active_recall "Glossary:Active recall")[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")|
|---|---|
|[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 4-6|   |
|4. **问题** : 富含抗氧化剂的例子：蓝莓、草莓、菠菜和西兰花  <br>    **答案** : 食物<br>5. **问题** : 富含 [...] 的食物示例：蓝莓、草莓、菠菜和西兰花  <br>    **答案** : 抗氧化剂<br>6. **问题** : 富含抗氧化剂的食物示例：[...]  <br>    **答案** : 蓝莓、草莓、菠菜和西兰花|- **问题** : 蓝莓富含抗氧化剂吗？  <br>    **回答** : 是的<br>- **问题** : 草莓富含抗氧化剂吗？  <br>    **回答** : 是的<br>- **问题** : 菠菜富含抗氧化剂吗？  <br>    **回答** : 是的<br>- **问题** : 西兰花富含抗氧化剂吗？  <br>    **回答** : 是的|
|[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 12|   |
|12. **问题** : 富含抗氧化剂的食物具有高水平的 [...]（ORAC）  <br>    **答案** : 氧自由基吸收能力|- **问题** : ORAC 代表什么？  <br>    **答案** : 氧自由基吸收能力|
|[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 17|   |
|17. **问题** : [...] 是导致癌症、心脏病和衰老的细胞损伤化合物  <br>    **答案** : 自由基|- **问题** : 导致癌症的细胞损伤化合物的名称是什么？（用抗氧化剂清除）  <br>    **答案** : 自由基<br>- **问题** : 自由基是什么？  <br>    **答案** : 细胞损伤化合物（导致癌症、心脏病和衰老）|
|[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 20|   |
|20. **问题** : 自由基是会损害细胞的化合物，导致 [...](健康问题)  <br>    **答案** : 癌症、心脏病和衰老|- **问题** : 自由基会导致癌症吗？  <br>    **回答** : 是的<br>- **问题** : 自由基是否会导致心脏病？  <br>    **回答** : 是的<br>- **问题** : 自由基会导致衰老吗？  <br>    **回答** : 是的|

## 示例：改写文本

冗长的文章可能需要在生成[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")之前对句子进行一些改写。

例如，以下文本让用户感到困惑，因为它似乎很难进行增量处理：

> _在1892年，俄罗斯植物学家迪米特里·伊万诺夫斯基证明，感染了花叶病的烟草植物的汁液，即使经过一种已知能保留所有细菌的瓷过滤器，仍然含有能够感染其他烟草植物的因子。_
> 
> _在1900年，报告了一种类似的可过滤病原体，导致牛的口蹄疫。_

在开始学习之前，您可以通过寻找结构合理、语言简洁的文章来节省大量时间。例如， [维基百科](https://en.wikipedia.org/)是一个很好的资源。由于它是由许多人以增量方式编辑的，因此它具有很高的上下文独立性。相比之下， [大英百科全书](http://britannica.com/)则冗长，充满了代词、确定性条款和各种上下文引用。

在[大英百科全书](http://britannica.com/)中可能会说（虚构的例子）：“ _在接下来的五年里，他努力为他的发明申请专利_ ”，而[维基百科](https://en.wikipedia.org/)可能会明确地说：“ _在 1883 年至 1889 年间，爱迪生努力为一种高电阻的碳丝申请专利_ ”。这种独立于上下文的风格可以为你节省数小时的解析和重新编辑时间。

在这个例子中，第一句话造成了困扰，因为作者试图告诉你远比你一次性想要处理的内容要多。

一种策略是从巨大的 [填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 开始，并在学习过程中逐步简化它们。然而，您可以通过另一种策略节省大量时间，即将句子拆分成更易于管理的部分。不幸的是，在这种情况下，开始时需要进行一些编辑。您还需要仔细解析段落的含义。例如，您可以将句子的 _谁_ 和 _什么_ 组件分开。

> **谁** : 在 1892 年，俄罗斯植物学家迪米特里·伊瓦诺夫斯基证明了感染了花叶病的烟草植物的汁液中含有一种比细菌更小的传染性物质。
> 
> **什么** : 在 1892 年，伊万诺夫斯基展示了即使经过一种已知能保留所有细菌的瓷过滤器过滤的感染了花叶病的烟草汁液，仍然含有一种能够感染其他烟草植物的因子。

从这两个迷你[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")中，您可以生成几个[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，以涵盖段落的精髓：

> **问题** : 在 [...](年份) 俄罗斯植物学家迪米特里·伊万诺夫斯基证明了感染了花叶病的烟草植物的汁液中含有一种比细菌更小的传染性物质。  
> **答案** : 1892

> **问题** : 在 1892 年，[...](国籍) 植物学家迪米特里·伊万诺夫斯基证明，感染了花叶病的烟草植物的汁液中含有一种比细菌更小的传染性物质。  
> **答案** : 俄语

> **问题** : 在 1892 年，俄罗斯 [...](specialty) 迪米特里·伊万诺夫斯基展示了感染了花叶病的烟草植物的汁液中含有一种比细菌更小的传染性因子。  
> **答案** : 植物学家

> **问题** : 在 1892 年，俄罗斯植物学家 [...](name) 证明了感染了花叶病的烟草植物的汁液中含有一种比细菌更小的传染性物质。  
> **答案** : Dimitri Iwanowski

> **问题** : 在 1892 年，俄罗斯植物学家迪米特里·伊万诺夫斯基展示了从感染了花叶病的烟草植物中提取的 [...](什么？) 含有一种比细菌更小的传染性因子。  
> 
> **答案** : sap

> **问题** : 1892 年，俄罗斯植物学家迪米特里·伊万诺夫斯基证明，感染了花叶病的 [...](type) 植物的汁液中含有一种比细菌更小的传染性因子。  
> **答案** : 烟草

> **问题** : 1892 年，俄罗斯植物学家迪米特里·伊万诺夫斯基证明，感染了 [...](疾病) 的烟草植物的汁液中含有一种比细菌更小的传染性因子。  
> **答案** : 马赛克病

> **问题** : 在 1892 年，俄罗斯植物学家迪米特里·伊万诺夫斯基证明，感染了花叶病的烟草植物的汁液中含有 [...] 小于细菌的物质  
> **答案** : 一种传染性病原体

> **问题** : 1892 年，俄罗斯植物学家迪米特里·伊万诺夫斯基证明，感染了花叶病的烟草植物的汁液中含有一种比 [...] 更小的感染性因子。  
> **答案** : 细菌

> **问题** : 1892 年，俄罗斯植物学家迪米特里·伊万诺夫斯基证明，感染了花叶病的烟草植物的汁液中含有一种比细菌更具传染性的病原体 [...]  
> **答案** : 更小

> **问题** : 在 1892 年，伊万诺夫斯基展示了即使经过 [...](type) 过滤器，感染了花叶病的烟草汁液中仍然含有能够感染其他烟草植物的因子。  
> **答案** : 瓷器

> **问题** : 在 1892 年，伊万诺夫斯基展示了即使经过已知的瓷过滤器过滤，感染了花叶病的烟草汁液中仍然含有能够感染其他烟草植物的因子。  
> **答案** : 保留所有细菌

> **问题** : 在 1892 年，伊万诺夫斯基展示了即使经过瓷器过滤，感染了花叶病的烟草汁液中仍然含有一种 [...](property)  
> **回答** : 可能会感染其他烟草植物

上述问题仅仅是一个粗略的开始。只有在学习过程中，你才能识别这些[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")中的漏洞。你会看到它们在哪里造成了困扰，为什么它们可能难以记住，或者哪些问题不够准确或令人困惑。你将在学习过程中逐步修正这些不足。

## 示例：信息聚合

新用户在使用 SuperMemo 时常犯的一个错误是创建包含许多信息的“怪物条目”。这些[条目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")应该通过单独处理每一部分信息来解决。

### 怪物物品示例

> **问题** : 一种杆管元件温度传感器由以下组成：  
> **答案** : 一个高膨胀金属管，里面包含一个低膨胀的杆。杆和管的一端连接在一起。管的长度随着温度的变化而变化，导致杆的自由端移动。

### 建议

这是一个典型的案例，将多个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")合并为一个，导致回忆合并后的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的能力下降。这里的建议是将[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")拆分为多个更简单的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ，以在学生的记忆中重现相同的信息：

> **问题** : 杆管温度传感器的两个部分是什么？  
> **答案** : 杆和管

> **问题** : 在杆管传感器中， **管**的可扩展性是什么？  
> **答案** : 高

> **问题** : 在杆管传感器中， **杆**的可扩展性是什么？  
> **答案** : 低

> **问题** : 温度在杆管传感器中是如何指示的？  
> **答案** : 管相对于杆移动

> **问题** : 杆和管连接在哪里？  
> **回答** : 在一端

> 等等等等。

## 示例：知识的演变

对单个知识点的更改将在连续的复习中逐步进行。以下是示例步骤，展示了单个文章如何基于[主动回忆](https://help.supermemo.org/wiki/Glossary:Active_recall "Glossary:Active recall")演变为完成的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ：

1. 想象一下，你在网上找到了一篇文章，例如_全球资本主义的批评_ ，你决定阅读它并永远记住它。
2. 您将文章导入到 SuperMemo 中
3. 您阅读文章（例如，当它在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中轮到时）
4. 在阅读时，您提取最重要的段落。其中一个段落，假设是，提到 _[Kuznets hypothesis](https://en.wikipedia.org/wiki/Kuznets_curve)_。
5. 提取的段落将在 SuperMemo 中独立存在，并将被安排进行单独的复习，即与父文章的复习无关。父文章中的提取段落将被标记为已处理 。一旦父文章中的所有段落都被处理完毕，您将终止对父文章的复习，并仅继续复习其组成部分（例如，选定的段落）。
6. 在第一次复习时，通常在几天后，你会再次阅读提取的段落，并分析它应该如何进一步处理。你可能会决定[推迟](https://help.supermemo.org/wiki/Postpone "Postpone")它，将其从学习过程中移除，缩短它，或者提取你想要记住的最重要的句子。
7. 如果您决定提取与 _Kuznets hypothesis_ 相关的单个陈述，它将在原始 [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 中再次标记为 已处理 ，并将在 SuperMemo 中进入一个单独的复习周期
8. 在首次审查提取的句子时，您会进一步决定它在 SuperMemo 中的后续使用。假设这是库兹涅茨句子的措辞：
    
    > 根据库兹涅茨假说，经济增长（从主要以农业为主的社会的低收入水平开始）最初会导致收入不平等的增加，然后再导致收入不平等的减少
    
9. 为了捕捉本质，您可能会决定将上述句子缩短为以下形式：
    
    > 根据库兹涅茨假说，经济增长最初会导致收入不平等的增加，然后再导致其减少
    
10. 与此同时，同一篇父文章的其他部分可能会建立一个记忆痕迹，表明_库兹涅茨假说_是基于相对薄弱的实证数据。此外，最近的研究清楚地表明该假说是错误的（增长实际上似乎同样惠及贫富两阶层）。然后，您可以用_有争议的_或甚至_最近被证伪的_词语来增强[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 。例如：
    
    > 最近伪造的库兹涅茨假说声称，经济增长最初会导致收入不平等的增加，然后再导致其减少
    
11. 在下次复习同一句话时，您可以决定将其转换为多个[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 。这种转换将是渐进的，也就是说，您可以先创建一个[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，询问有争议的假设的名称，然后再询问其实际含义（这个含义相对更容易记住，并且在没有[主动回忆](https://help.supermemo.org/wiki/Glossary:Active_recall "Glossary:Active recall")的情况下会在您的记忆中存留更久）。您的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")可以看起来像这样：
    
    > **问题：** 最近伪造的 [...](name) 假设声称，增长首先会导致收入不平等的增加，然后再导致减少。  
    > **答案** : Kuznets
    
    这个 [填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 将再次假设与原句分开生活，其中关键词 _Kuznets_ 将再次被标记为 已处理 。这是原始的 Kuznets 句子，其中一个关键词被标记为已处理：
    
    > 最近被伪造的 Kuznets 假说声称，经济增长最初会导致收入不平等的增加，然后再导致其减少
    
12. 同一句话将生成几个独立的[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，这些将被独立处理。在第一次复习前面提到的[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")时，您可以决定根据[学习中知识表述的规则](http://super-memory.com/articles/20rules.htm)来简化它：
    
    > **问题** : 最近伪造的 [...](name) 假设声称，经济增长最初会导致收入不平等的增加。  
    > **答案** : Kuznets
    
13. 在下次复习时，您可以，但不必，将[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")转换为标准的问答[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ：
    
    > **问题** : 什么是错误声称收入不平等最初随着增长而增加的假设的名称？  
    > **答案** : 库兹涅茨假说
    
14. 上述问答对可能是最简单的了。确实，它简单到足以相对容易记住。这个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")将在 SuperMemo 确定的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")中重复。您可以决定想要记住它的程度。默认情况下，它将以 95%的回忆概率被记住，并在一生中需要 5-15 次重复。在您的记忆中建立持久的记忆痕迹，完成了这条特定知识的生命周期。剩下的就是在 SuperMemo 确定的从几个月到几年的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")中进行记忆维持复习。
15. 一旦你将 _Kuznets 假说_中的所有重要关键词转换为单独的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，你将从复习过程中移除父段落。你将不再[被动复习](https://help.supermemo.org/wiki/Glossary:Passive_review "Glossary:Passive review")原始的陈述假说。你将继续重复个别[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，这将确保你在认为必要的时间内完美回忆起该假说。

## 示例：逐步建立理解

生成一个会不断引发问题的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")并不罕见。问题不在于主题，而在于句子的复杂性似乎让大脑进入了恐慌模式。你可能会不断重读糟糕的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，并产生每次重读理解反而减少（而不是增加）的印象。

这是一个来自真实学习过程的糟糕[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")示例。它连续导致了 5 次[失误](https://help.supermemo.org/wiki/Glossary:Lapse "Glossary:Lapse") ，并需要特别处理才能使其变得可接受和有用。

> **问题** : 公司或其他团体被发放排放许可证，并要求持有相应数量的 [...]（或 _信用_ ），这代表了排放特定数量的权利。  
> **答案** : 津贴

随着经验的积累，你会很快注意到问题出在所选文本的质量较差。你的第一个警示信号应该是“ _公司或其他团体_ ”。除非你是该主题的内部人士，否则你会立刻想知道“ _其他团体_ ”是什么意思。如果你仔细分析你的问题的本质，你会发现“ _其他团体_ ”并没有对问题的核心内容有所补充，可以轻易省略。经过一些分析后，你可以努力提出一个直接的问题，然而，采取增量的方法更简单且更具成本效益（只要你能理解问题，这可能并不适用于你）。

一旦你注意到“ _其他组_ ”不合适，你可以简化[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ：

> **问题** : 公司被发放排放许可证，并要求持有相应数量的 [...]（或_信用_ ），这代表了排放特定数量的权利。  
> **答案** : 津贴

您可能还会注意到，_allowances_ 和 _credits_ 是同义词（根据那个特定问题），您可能不需要用这两个术语来考验自己的记忆。因此，您可以简化问题：

> **问题** : 公司会被发放排放许可证，并要求持有相应数量的 [...]，这些许可证代表了排放特定数量的权利。  
> **答案** : 津贴/信用

在下一个重复中，您可能希望进一步简化问题。您现在可以开始感到自信，这个问题会牢牢记在您的脑海中。如果这让您感觉更好，您将朝着更好的回忆迈出了一大步：

> **问题** : 公司持有一定数量的 [...]，代表有权排放特定数量  
> **答案** : 配额/信用（排放许可证）

在未来的某个时刻，你可能会再迈出一步：

> **问题** : [...] 代表公司排放特定数量的权利  
> **答案** : 配额/信用（排放许可证）

最后，你可能会意识到你的问题实际上是一个术语的定义（_credit/allowance_）。因此，它甚至不需要 [cloze](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")。你可能还会注意到，这个定义缺少一个重要的上下文点。原始问题提到了碳排放（这可能是由提供问题上下文的 [Wikipedia](https://en.wikipedia.org/) 参考资料所指示的）。

> **问题** : （公司）排放特定数量的 CO2 的权利叫什么？  
> **答案** : （碳）许可证/配额/信用

根据上述定义，学习应该最终变得简单而有趣。请记住，使用斜杠（“/”）分隔同义词或等效答案是一种常用标准。这意味着任何答案都可以是 _permits_、_allowances_ 或 _credits_。您不需要列出所有答案，也不需要记住半显而易见的 _carbon_ 前缀。

有趣的是，可以很容易地发现该文本来自 2010 年 5 月 7 日的[维基百科](https://en.wikipedia.org/)版本。它被标记为“需要澄清”，这立即告诉你，你并不是唯一对这一段落有问题的人。在这种情况下，可以责怪作者并寻找更好的文本。在这个特定的例子中， [维基百科](https://en.wikipedia.org/)的文本在仅仅两周后得到了改进，而当前版本的[维基百科](https://en.wikipedia.org/)则包含了更好的版本（2013 年 8 月）。

## 示例：不适合的文本

并不是所有文本都适合或容易通过[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")进行处理。你可能不想用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")来处理一本文学小说。你可能仍然更喜欢在浴缸里纸上阅读它。难以处理的文本示例包括：华丽的材料、富含解释和隐喻的材料、编程代码、案例研究、数学推导、实验研究文档等。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")最适合百科全书式的材料。不适合的材料通常会包含有价值的信息；然而，你通常会更好地通过自己表述并用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")处理你的总结。例如，你不会想要记住 Linux 源代码。然而，你可以在代码中找到一些特定的事实或规律，简要描述它们，然后逐步学习这个描述（也许配合代码片段的插图）。

### 示例 1：过于笼统的文本

这是一个导致 SuperMemo 用户学习问题的示例段落：

> _一个优秀的企业架构师应该在组织对集成 IT 战略的需求与在整个企业中实现尽可能紧密的协同之间找到正确的平衡，同时允许各个业务单位在追求竞争优势的过程中安全地进行创新。_

用户写道：

> _我对这个短语（跨业务单位的协同必须与业务单位内的创新自由相平衡）没有问题，且我从中构建了两个[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，用于平衡的两侧，当被问到任一问题时，我都能填补空白。然而，我最近在一次讨论中辩护协同立场，却没有意识到这可能会危及创新，甚至没有意识到我有这个 SuperMemo 问题在提醒我。换句话说，尽管我能回答 SuperMemo 中的问题，但这并没有在我的记忆中留下深刻印象，即协同与创新自由并没有关联，反之亦然（也许在这封邮件之后会有所改变）。所以，我怀疑我只能基于对问题的识别或类似的东西来回答这个问题，而不是基于对关联的识别。我认为更好的关联方式是问类似“什么必须相互平衡”的问题，但这个问题的性质过于一般，以至于会对其他涉及企业架构其他方面需要相互平衡的问题造成严重干扰。 或者我需要将其更具体化，再次冒着在问题中透露答案的风险，这也不会导致关联的形成。_

你能在这里找出一个问题吗？

在类似的情况下，你需要暂停思考你希望在阅读完该段落后能够回答什么样的问题。如果问题过于笼统或明显，你只需相信自己的智慧和创造力，基于你的经验和该知识领域内更具体的问题来回答它们。

在这种情况下，像“协同”或“创新”这样的关键词可能模糊地捕捉到段落的含义。然而，非常一般的文本不适合使用[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")处理。在提问时，您可能会浪费不必要的时间重新阅读整个段落，或者浪费时间简化段落以捕捉其本质。在学校术语中，您可能会称类似的段落为“废话”。它们可能传达重要信息，可能有助于文本的流畅性，可能是解释性的，但它们并不产生适合记忆的材料。在极端情况下，您可以将维基百科式的“IT = 信息技术”与明显无法填空的“废话”并列： _我们应该对其他人友好_ 。

在各种考试中，你总是需要应对大量的“废话”。你还会遇到要求流利“废话”表现的老师。然而，这并不是能让你成为更好的专家或更好的人所需的知识。如果你遇到“废话”，请暂停思考是否有真正从文本中流出的相关问题，或者文本是否过于笼统，以至于无法用 SuperMemo 处理。在你的情况下，或许通过添加一些关于企业协同或创新限制的更有深度的段落，你会做得更好……实际上，你是最适合找到补充材料的人，这些材料将帮助你更好地理解潜在问题。

如果废话让你烦恼，试着找到一个[维基百科](https://en.wikipedia.org/)的等价物。由于众包的性质， [维基百科](https://en.wikipedia.org/)非常适合增量处理。一旦你掌握了技巧并感受到好处，你会很快学会识别那些不太合适且在使用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")时提供较少好处的文本和段落。

### 示例 2：来自 super-memory.com 的不适合文本

这是另一个来自 [super-memory.com](http://super-memory.com/) 的例子。文本本身并不差，但它使用了应作为解释的隐喻，而不是适合生成 [填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 的学习材料。

> _**智力作为处理能力** ：人类思维的原始灵活性和敏捷性。当你看到一个聪明的学生快速学习新知识，逻辑思考，解决难题并展现出惊人的机智时，你可能会说：这个家伙真聪明！看看他的脑子反应得多快！这个学生的处理器很快，他的 RAM 访问时间如闪电般迅速。然而，他可能仍然需要几年的时间通过多年的学习来“构建”良好的软件。智商测试试图在抽象知识的基础上测量这种智力。通过训练提高处理能力的难度与编程无法加速处理器的事实有类似的原因。_

上述文本是隐喻性的。它使用不同的词语几次重申相同的信息，试图找到一个能引起读者共鸣的隐喻。因此，您只需提取核心信息即可。例如：

> _智能作为处理能力 ： 智商测试试图在抽象的知识中衡量这种智能_

您还可以添加：

> _智能作为处理能力 ：通过训练提高处理能力的难度类似于编程无法加速处理器的事实_

一旦你学习了上述 6 个[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") （由 6 个填空关键词标记），你很可能会记得，在一个理想设计的智商测试中，训练以提高分数应该是非常困难的。

# 人们对增量阅读有什么看法？

增量学习有其支持者和坚定的批评者。以下两个部分展示了这个故事的两个方面。

## 用户眼中的增量阅读

以下是一些关于[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的博客摘录。

### 应对信息过载

在 [bobo23.net](http://bobo23.net/) 你可以学习到以下内容：

> _你想阅读你最喜欢的博客，每天都会收到电子邮件通讯，你有定期查看的网站、新闻组、邮件列表、论坛、有趣的维基百科文章——你想跟上大量的数字信息。但除非你把在电脑上阅读当作全职工作——否则你无法做到。那么，如何从中选择真正重要的内容呢？_
> 
> _[...]_
> 
> _这就是增量阅读概念的应用场景。有时你只想阅读特定主题，有时你只是想读一些复杂文章的片段，或者随意阅读一些内容以建立新的联系/增强创造力。你可以通过增量阅读做到这一点，而不必担心错过什么。迟早（你可以影响这一点），它会出现在你的增量阅读过程中。_
> 
> _[...]_
> 
> _您收集所有想要处理的信息并将其存储在一个地方。然后，您可以随机或按类别回顾所有文章（或任何其他类型的信息）。您可以突出重要部分，设置阅读点（书签），提取片段并生成问答项以便后续复习。_

要阅读完整条目，请访问 [bobo23.net](http://bobo23.net/): [增量阅读 - 处理信息过载](http://www.bobo23.net/2011/02/04/incremental-reading/)

### Len Budney 关于增量阅读

Len Budney 写道：

> _增量阅读是 Supermemo 的另一个惊人创新。我在其他地方没有见过或听说过这样的想法！_
> 
> _[...]_
> 
> _你正在逐渐将文章消化成越来越小的部分。_
> 
> _当这些信息块变得真正简洁易懂时，你可以将它们转换为真实的闪卡。只需点击一下，你就可以创建“填空”类型的闪卡，或者创建一个普通的问答闪卡。当信息块被转换为闪卡时，你可以“忘记”那段文本：你已经将其消化为不会忘记的事实！_
> 
> _**我使用增量阅读功能来阅读长篇复杂的文档，这比我尝试过的任何其他方法都要好得多** 。（作为一名拥有数学博士学位的人，我当然研究过不少文档！）它迫使你非常仔细地阅读重要部分，但仍然通过帮助你忽略不太重要的部分来节省时间。我无法更高地推荐它。事实上，我愿意付出我的左臂来获得一个支持增量阅读的 Palm 应用程序！_

访问 Len Budney 的博客阅读文章： [增量阅读](https://web.archive.org/web/20100615140033/http://www.jeenyus.net:80/supermemo/incremental.html)

### 如何提升你的语言学习效率

在他的博客中，tmwbuckley 写道：

> _增量阅读是 SuperMemo 中一个相当被误解的功能。增量阅读涉及将你的阅读材料导入到一个闪卡中。这可以是一个巨大的维基百科文章，或者一本完整的电子书。在阅读时，如果你遇到一个不熟悉的单词，你可以高亮显示它所在的句子或段落，并自动将其制作成一个全新的闪卡，方便你稍后复习。通过高亮显示，按下 Alt+X 提取该段落，你会看到该部分变为蓝色，这意味着这部分内容已被提取到另一张闪卡中。[...] 增量指的是在一段时间内以小块内容进行阅读，直到你阅读完所有材料并提取出你想要的信息。你可以使用阅读工具栏上的“设置阅读点”工具标记你在阅读材料中所达到的位置，这样下次你看到文章/章节/其他内容时，SuperMemo 会明显显示出来，而不是让你向下滚动。[...] 一旦你完成了闪卡的阅读，并提取了所有有用的信息，你可以使用 Shift-Ctrl-Enter 将其删除。 此命令与纯删除不同，因为它会保留您从中创建的所有闪卡，而删除则会导致您失去这些闪卡。这将非常麻烦。SuperMemo 使用其超级算法为您安排这些项目的复习。[...] 增量阅读代表了广泛阅读和深入阅读的强大结合。这可以用于任何内容——新闻故事、博客文章、维基百科条目。_

有关整篇文章，请参见： [增量阅读 - 如何提升你的语言学习](http://unmilliondemots.wordpress.com/2012/09/26/incremental-reading/)

### 记笔记：增量阅读

在一个专注于笔记的博客中，MK 在写到[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")时持怀疑态度。

MK 用以下话语介绍了这个过程：

> _学生提取个别文章中最重要的片段以便进一步复习。提取的片段随后被转化为问题和答案。这些问题和答案又成为系统复习和重复的对象，从而最大化处理文本的长期记忆。复习过程由被验证的重复间隔算法处理，该算法被称为 SuperMemo 方法。_

MK 随后表达了顾虑：

> _基本的想法是将一个较大的文档“拆分”成更小的部分，以便记住它们。这没有错，但这种方法**不会**让你**同时**阅读成千上万的文章。也不一定会让你理解全局。_

这是 MK 的博客文章： [增量阅读](https://takingnotenow.blogspot.com/2010/07/incremental-reading.html)

#### 大局观

大局的问题已经被那些对增量学习过程不太熟悉的观察者一再提及。请参见： [增量阅读中的大局](https://help.supermemo.org/wiki/Incremental_learning#Big_picture_in_incremental_learning)

#### 同时阅读数千篇文章

至于短语“ _同时阅读数千篇文章_ ”，我们将继续使用这个引人注目的短语。显然，我们并不是指同一个“ _时刻_ ”，而是指同一个“ _时间段_ ”。我们并不设想一个拥有千台显示器的用户，也不设想一个在一秒钟内快速阅读数千篇文章的用户。我们自然是指在学习过程中有数千篇文章，这在高度超负荷的[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中，可能意味着一篇文章由于在[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")上得分过低而永远不会被阅读。更多内容请参见： [不诚实地营销增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Can_you_really_read_thousands_of_articles_at_the_same_time?)

### 浪人之道：关于增量阅读

_浪人之道_博客说：

> _我一直在做什么而不是更新这个博客呢？主要是在修改和改进我用来学习的系统，并开始一个基于**增量阅读**技术的新项目。_
> 
> _[...]_
> 
> _我想谈谈我在正常使用 Anki 整整一年以及正常使用 SuperMemo 半年（仍在使用中）后的用户体验。_
> 
> _[...]_
> 
> _SuperMemo 的界面非常复杂，这使得大多数潜在用户在购买之前会考虑两次。_
> 
> _[...]_
> 
> _经过一到两周的使用，我习惯了它的界面。事实上，我意识到它非常直观。_
> 
> _[...]_
> 
> _**那么学校呢？难道他们不是年复一年、十年如一日地使用相同的方法吗？如果这一切都是真的，那岂不是意味着他们应该根据每个学生的情况调整他们的系统——而他们当然并没有这样做？**_

在 [Anki 与 SuperMemo](http://thewayoftheronin.wordpress.com/?utm_content=buffer614da&utm%0D_source=buffer&utm_medium=twitter&utm_campaign=Buffer) 中阅读更多内容。

### 如何逐步阅读任何内容

LittleFish 在他的博客中写道：

> _当我第一次开始使用 Supermemo 时，增量阅读似乎是一个有价值的功能，但我从未真正使用过。一旦我开始尝试增量阅读（成功地）并在查看学习材料时采用增量阅读的思维方式，我现在完全相信它在几乎所有智力需求上的优越性。它远远领先于时代，就像推动 Supermemo 的核心概念一样，最终它可能会在教育系统的几乎每个层面上得到应用（无论需要多少年）。_
> 
> _[...]_

访问博客：[Supermemo Adventures: 如何逐步阅读任何内容](https://supermemoadventures.blogspot.com/2010/04/how-to-incrementally-read-anything.html)

### 路易斯·古斯塔沃·内维斯·达·席尔瓦谈记忆法

路易斯·古斯塔沃写关于死记硬背和智慧：

> _当我学会如何使用 SuperMemo 时，我的第一反应之一就是向周围的每个人展示它。我对这个程序及其基本原理非常热情。然而，我非常失望地发现，很多人会说：“这只是一个死记硬背的工具”，“这只是记忆”，“这与推理或智力无关”。_
> 
> _[...]_
> 
> _我相信在我们的文化中，我们甚至发展出了一种对记忆的恐惧，认为这是一种人类的弱点，会让我们被操控，甚至去人性化。看看我们的流行文化吧。有多少电影主角的记忆被抹去、改变或操控。_
> 
> _[...]_
> 
> _教师似乎没有限制地在孩子面前堆积新材料，如果有人记忆力不佳……那完全是他或她自己的错或疏忽。_
> 
> _[...]_
> 
> _当被问及相信记忆是有害的原因时，“推理”的支持者会提出一系列令人困惑和相互矛盾的词汇，如记忆、数据、信息、知识甚至智慧。查阅这些词汇的字典时，你会发现许多循环定义，每个词都与其他词相关或通过使用其他词来定义。_

阅读更多： [这不仅仅是记忆](http://www.super-memory.com/articles/users/memorizing.htm)

### 增量阅读图示

[banaban.net](http://www.banaban.net/) 写道：

> _我制作了这个[增量阅读过程的简单图示](http://www.banaban.net/supermemo/incremental-reading.html) 。SuperMemo 网站上的解释对我来说太长且太科学了，我需要一些简单实用的东西。希望它也能帮助你快速入门使用 SuperMemo 进行增量阅读。它仅包含核心功能，更多的细节和解释请参见。_

请注意，图表使用了旧图标、旧术语和旧关键词。

## 对增量阅读的批评

### 增量阅读是无用的

对[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的批评者并不多，也不太活跃。归根结底，这可能是因为这项技术相对较新，并且在 SuperMemo 内部圈子之外并不太受欢迎。几乎所有的批评都来自那些从未使用过[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的人。因此，这些批评几乎从未触及技术的实质。有些批评似乎是针对技术的一般性问题（例如互联网、网络、计算机软件等）。

例如，Emil K. 对增量阅读提出了以下批评：

> 1. _互联网上的信息往往不可靠_
> 2. _在网上找到100%可靠的信息需要花费很多时间_
> 3. _缓慢的互联网连接大大增加了浪费时间的数量_
> 4. _软件维护浪费了更多时间_
> 5. _它只能在有电脑可用时使用 - 大多数情况下是在家里。_
> 
> _我相信我的方法比你提议的更好：_
> 
> 6. _阅读一本经过时间考验和其他花费时间探索这本书的人的评价证明优秀的书籍。_
> 7. _不要使用软件和互联网，而是用一支笔和一本笔记本扫描书籍中的重要信息，并抄下来以便后续检查/记忆。_
> 
> _此外，记下来源和日期，以便在创造力来临时，来源是可靠的——浪费大量时间进行研究，最后发现来源没有任何统计意义，将是一个灾难。像《自然》和《科学》这样的杂志已经发表了所有研究文章中最有价值的。费曼、波尔、迪拉克和爱因斯坦的书籍已经是该领域的最佳。因此，我的信是一篇有力的争论，驳斥了 SuperMemo。_

### 观察者的观点：我为什么不使用增量学习？

这里是一个专注于问题解决和短期目标的观察者的典型观点。对于这个观察者来说，终身学习被理解为“ _我现在需要什么就学什么_ ”。自然，这种方法缺少一个重要因素： _预期学习_ 。

> **大规模学习**
> 
> _我不在乎大量学习。我解决问题。我学习解决问题所需的知识。问题解决后，我就去处理下一个。我不在乎长期知识。我是技术型的。在我的领域，知识在2-3年内就会过时。_
> 
> **终生记忆**
> 
> _我不在乎终生记忆。我学习是为了短期项目。我的记忆很好。我是一个优秀的问题解决者。_
> 
> **高保留率**
> 
> _由于我进行短期学习，我的记忆保持总是很高（在我需求的范围内）。_
> 
> **理解**
> 
> _我对我的文本理解得很好。如果有什么不清楚的，我会寻找更好的文本。_
> 
> **均匀进展**
> 
> _我不在乎学习“关于一切的无知”。我在这里和现在学习我需要的东西。为什么要浪费时间和内存空间去记住英国的君主呢？这对在学校的孩子有好处，但对真正的问题解决者来说并没有用。_
> 
> **创造力**
> 
> _我足够有创造力。谢谢。我不需要混合知识领域，希望能获得一些难以捉摸的诺贝尔奖发现。我解决问题。我把所有的知识都保存在脑海里。需要的时候我会把这些知识拼凑在一起。我没有创造力方面的问题。_
> 
> **一致性**
> 
> _我在阅读感兴趣的材料时立即识别出矛盾。我从事短期项目，将所有知识保存在记忆中，并能立即知道某个东西是否符合模型。这根本不是问题！_
> 
> **无压力**
> 
> _我热爱我的工作。我并不认为这很有压力。恰恰相反。我觉得与 SuperMemo 的复杂性斗争可能会让我心脏病发作！_
> 
> **注意**
> 
> _我对我的工作充满热情。我不会强迫自己去学习无聊的东西。我的注意力非常好。_
> 
> **巩固**
> 
> _我不参与拖延多年的项目。我不需要整合。我学习我需要的，解决一个问题，然后继续前进。_
> 
> **优先级排序**
> 
> _我根据当前的需求进行优先排序。我需要 A，就阅读 A。我需要 B，就阅读 B。在解决问题时，通常不需要在同一时间阅读几十篇文章。你只需阅读所需的内容并解决问题。_
> 
> **阅读速度**
> 
> _我阅读得很快。我不知道中断阅读怎么可能比正常阅读或略读更快。_
> 
> **项目制定的速度**
> 
> _我不需要项目。_
> 
> **细致入微**
> 
> _我非常细心。在这方面我不需要帮助。_
> 
> **训练**
> 
> _通过增量学习所应培养的技能训练是无关紧要的。这些技能对我来说要么价值不大，要么我在工作过程中反正也会获得它们。_
> 
> - _**识别合适的文本** - 所有文本都是合适的，只要它们能引导我达到目标。我搜索，我阅读，我解决。就这样。_
> - _**知识的形成** - 为什么要浪费时间去形成任何东西？我阅读和工作。我不需要任何中介的时间浪费者。_
> - _**记忆技巧** - 所有那些思维导图听起来像是巨大的时间浪费。_
> - _**速读技巧** - 我的阅读速度足够满足我的需求。_
> - _**语义技能** - 我在正常阅读的过程中也会发展这些技能。我同意。你阅读得越多，理解你所阅读内容的能力就越强。_
> - _**优先级技能** - 我不优先考虑我的阅读。我阅读并执行。_
> - _**编辑和 SuperMemo 技能** - SuperMemo 是我真的不需要的东西。_
> 
> **乐趣**
> 
> _我不确定将增量学习的概念添加到你的生活中，如何能比做好事情、把事情做得很好，并让人们赞扬你所取得的成就更有趣。_

### SuperMemo 用户的看法：我为什么不使用增量阅读？

这是一个理解增量阅读的 SuperMemo 用户的典型观点，但仍然有许多保留意见：

> _我已经使用 SuperMemo 19 年了（偶尔有些间断）。我对增量阅读的概念理解得相当不错。我读过很多关于它的资料。很多次我都考虑过尝试它。然而，我仍然没有确信我应该开始这段旅程。请看看我的故事。我很乐意听听你的看法。你认为我错了吗，还是我与众不同？或者增量阅读的前景是不是有些过于美好？_
> 
> **学习的只读心态**
> 
> _我多年前开始进行重复学习，目标是提高我的英语水平。为此，我依赖于一个现成的高级英语学习资料库，其中包含超过 40,000 个单词和短语。学习材料非常全面（远远超出了我的需求），默认的学习过程也足够高效，能够迅速让我掌握这门语言。受到结果的鼓舞，我继续探索这个程序，但很少利用 SuperMemo 不断扩展的新高级选项。似乎我并不真正需要它们来获得我想要的结果（至少在英语方面是这样）。我所做的只是进行出色的重复学习，记住我每天的新单词和短语配额，并偶尔添加一些原本不在资料库中的词汇或语法。_
> 
> **我的职业与增量方法的不兼容性**
> 
> _至于我其他的学习需求，它们始于我的职业生涯，而我的职业恰好是计算机编程。看起来这个知识领域并不特别适合声明式学习。此外，沃兹尼亚克博士本人也承认，编程的学习材料不适合通过增量阅读进行处理。换句话说，我似乎无法在我职业生涯中实现增量阅读的承诺，因此对在其他领域探索它的决心也减弱了。_
> 
> **压力因素**
> 
> _我相信多年来我对 SuperMemo 已经掌握得相当不错。不过，这并不意味着 SuperMemo 不会时不时给我带来一些意外的挑战。以 **Spread priorities** 功能为例。当我第一次查看它时，在一个字段中，我看到的是 _0!!!_，背景是黄色的：步骤。我尝试更改这个值，但无论我做什么，我总是回到原点。结果证明，这是 SuperMemo 在告诉我，我选择的子集没有足够的优先级位置。尽管 SuperMemo 在实现方面可能有所欠缺，但它在文档中多次尝试详细说明这一点。换句话说，只要有足够的坚持，你就能找到使用这个程序的方法。这段探索之旅可能会让人感到压力，但如果仔细思考，远没有增量阅读的整个概念那么令人不安。事实上，我越是阅读相关内容（试图消除我的疑虑），压力就越大。尤其是整个优先级排序阶段似乎让人感到不知所措（甚至到令人作呕的地步）。_ 你所描述的优点可能都是真的（尽管有些并不明显和/或立竿见影）。这些优点大多数只有在你正确设定优先级的情况下才能成立。但整个过程在我看来就像是一场无果的追逐（不仅仅因为优先级队列在设计上是相对的）。了解学生在日常学习过程中实际花费多少时间在优先级上会很有趣。例如，考虑一个优先级尺度。在其相对变化中（即以百分比表示），它的范围从 1 到 100，这实在是太宽了（ABC 分析的创作者早就意识到了这一点）。我记得曾经读到过，SuperMemo 的新手发现很难在 6 个等级的尺度上给自己打分。与给一项知识设定优先级相比，这现在似乎轻而易举。我理解更细致控制的意图，但这实在令人费解。更糟糕的是，有许多过程（包括手动/意识和（半）自动/无意识的）会侵蚀你辛苦设定的优先级层次。 我不介意它实际改变，但如果我不小心碰到一个我设定为重要的项目，它仍然保持重要，但不知怎么的却出现在优先队列的后期阶段（根据我所读的，发生这种情况的可能性并非遥不可及）。当我阅读这篇文章时，我常常想起玛格丽特·撒切尔的一句名言：“我不知道有人能在没有努力工作的情况下达到顶峰。这就是秘诀。它不一定能让你登顶，但应该能让你接近。”这承诺很大，但远非保证。我相信，我非常清楚增量阅读实际上是多么复杂，并且在清楚这一点的基础上，我得出结论，你的优势部分在保证方面提供的内容甚至更少。你可以投入大量时间，最后 SuperMemo 只会让你意识到自己在管理这一切方面是多么糟糕（因为，别搞错了，你需要仔细管理它）。工具集可能很丰富，但它自然吗？此外，这一切都依赖于正确的输入。你的优势包括[均匀进展](https://help.supermemo.org/wiki/Incremental_reading#Uniform_progress "Incremental reading") 。是的，没错。 在导入和处理大量与单一主题相关的文章时，产生隧道视野的情况是非常可能的，甚至可能更为常见（考虑到我们人类的缺陷）。

#### 评论：你需要尝试增量方法，以便更好地理解

在[增量学习并不适合每个人](https://help.supermemo.org/wiki/Incremental_learning#Incremental_learning_is_not_for_everyone)这一节中，您可以阅读可能导致您在增量学习中失败的人格因素。根据您的文本，很难做出预测。您学习过[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")这一事实是成功的一个很好的预测指标。另一方面，仅仅是[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")的概念就能引发压力，这告诉您很多关于您个性的信息。您可能正是那些在理论上表现出色但在实际情况下因多种原因而失败的人之一。您绝对应该尝试增量学习，看看它是如何运作的。如果在使用的前两个月内挫折不断增加，您的成功机会可能会下降。至关重要的是从最简单的概念开始：导入、提取和填空。所有其他工具都应该等到您开始享受这个过程后再使用。出于同样的原因，您应该从学习您喜欢的事物开始（而不是代数或经济学）。 你的爱好、你的宠物、你喜欢的运动、健康、你喜欢的音乐乐队、你喜欢的演员等。使用[维基百科](https://en.wikipedia.org/) ，因为它的文本非常适合[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。只有在 2-3 个月后，当你开始感受到新知识在你脑海中逐渐形成时，你才能在这个过程中情感上找到依托，并找到足够的动力来克服接踵而来的障碍。

对你其余文本的简短评论：

- **隧道视野** ：经验表明，增量学习更有利于广泛学习，而不是形成隧道视野。毕竟，你知道的越多，就越知道自己不知道的东西也很多。当你进行传统阅读或浏览时，更有可能被单一主题所占据。在增量学习中，你面对的是知识的整个范围（自然偏向于你的兴趣）。增量学习序列的不可预测性，以及在不同情绪或不同背景下（例如兴趣变化），提高了创造性过程的质量。这就是好奇心诞生的地方。当你有一个典型于增量学习的宁静时间分配时，你更有可能对一个看似无关的细节产生兴趣。这就是你如何不断拓展到新领域的方式。当你在压力、时间限制和信息过载的条件下工作时，这种拓展的可能性就会降低，而这些情况在自由浏览网络时是很常见的。 在自由浏览中，你可以打开 20 个浏览器标签，并为该采取何种行动而苦恼：现在阅读、收藏、保存到磁盘、浏览、放弃等。在增量学习中，你只需导入所有标签，然后回到你的主要思路。自然，如果你对标签进行优先排序，这将大大有助于你。这是一种巩固新兴趣的方式，而不是仅仅给予它们暂时的关注。SuperMemo 防止隧道视野的能力被提及为其优势之一。见： **[增量学习的优势](https://help.supermemo.org/wiki/Incremental_reading#Advantages_of_incremental_reading "Incremental reading") : 均匀进展**
- **无果的追逐** ：在 SuperMemo 中，优先级的变化方式正是现实生活中优先级的表现：你昨天的兴趣被今天的兴趣无情地取代，依此类推。这确实是一场无果的追逐。但问题不在于 SuperMemo，而在于人性。请回想一下， [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")是从[阅读列表](https://help.supermemo.org/wiki/Glossary:Reading_list "Glossary:Reading list")开始的。 [优先级偏差](https://help.supermemo.org/wiki/Glossary:Priority_bias "Glossary:Priority bias")可能导致有一千或一万个最高优先级的文章。这种情况是不可管理且不理性的。通过相对[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，你可以观察这个过程，并努力改善你的策略，以及你对优先级的个人诚实。这不会停止无果的追逐，但你有一系列工具来纠正你的错误（例如，当发现被忽视的材料时）。无论你思考多久，你都不太可能找到比简单的[优先级队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")更好的解决办法！你已经指出了问题，但你忽视了现实生活中问题的不可比拟的严重性。在 SuperMemo 中，如果你发现被忽视的材料，你可以提高它的优先级。 在传统学习中，你会忘记材料和问题本身。追逐问题总比把它掩盖在地毯下要好。
- **压力** : 如果优先级排序过程让你感到压力，你可以最初忽略[优先级队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") 。只有当你的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")增长到无法管理的规模时，你才会需要它。然后你可以逐渐引入各种优先级水平。例如，你可以从两个级别开始，稍微保守一些： _**重要: 22%**_ 和_**不重要: 88%**_。你很快会发现你需要更多的精确度，尤其是你会永远无法摆脱“ _这篇文章必须排在前三篇文章中_ ”的感觉，这在某些时候可能意味着你需要小数位或按位置引用[优先级队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") 。
- **用户友好性** ：在**[扩展优先级](https://help.supermemo.org/wiki/Subset_operations#spread_priorities "Subset operations")**中**步骤**的问题是 SuperMemo 的典型特征，它声称对新手不友好，以更好地满足专业用户。此选项可能会显示一条消息：“ _您试图将更多的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")挤入范围中，而范围的大小不足_ ”。然而，这会让专业用户感到愤怒，因为输入错误数据非常容易。您不想浪费时间去点击关闭消息。专业用户只想纠正输入。这个问题无法通过**[文件](https://help.supermemo.org/wiki/File_menu "File menu")  : [级别](https://help.supermemo.org/wiki/File_menu#Level "File menu")**来解决，因为**[扩展优先级](https://help.supermemo.org/wiki/Subset_operations#spread_priorities "Subset operations")**仅在高级别可用。这意味着用户应该已经习惯于在 SuperMemo 中首次使用任何功能可能会很困难。一个更复杂的解决方案，例如向导或在对话框中嵌入的消息，可能无法通过不断膨胀的 SuperMemo 任务列表的`价值/时间`标准。你说得对，SuperMemo 对新手并不友好。如果您有更简单的解决方案想法，请发送邮件给我们。我们会认真阅读它们。
- **编程** ：并不是说 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 不适合程序员（例如参见：[SuperMemo 作为程序员的新工具](http://super-memory.com/articles/programming.htm) ）。这种误解可能源于诸如“ _计算机代码不适合作为增量阅读处理的文本_ ”这样的说法，尽管可以想象 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 在代码分析中可能是有用的（例如，当需要审查大量优先级不同的良好封装的短程序时）。

# 优先队列

## 优先队列：介绍

人类的知识资源是巨大的。我们获取知识的欲望通常超过我们的学习能力。增量学习使得导入大量知识变得容易。然而，如果你无法有效处理所有导入的知识，你可能会因为被那些可能被推迟学习的主题所淹没而忽视高优先级的材料。这种情况是引入[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")的主要原因。

在增量学习中，所有[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")被组织成一个由其[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")决定的序列。这个序列被称为**优先队列** 。 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")是由特定学生对[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的重要性决定的。当学生在某一天的学习时间用尽时，优先级较低的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")将首先被牺牲。因此，只有高[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")会获得所需的回忆/ [保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")水平。在任何时刻，优先级较低的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")更有可能被发现为遗忘。

在学习过程中，在某一天，优先级最高的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")会被优先处理。

如果你一天的学习没有完成，不要绝望。通过[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") ，你知道自己已经尽力而为，只有低优先级的材料被遗留。记得使用[自动排序](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort")和[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone")来充分利用[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") 。

## 我们能学习整个《大英百科全书》吗？

在学习初期，许多学生并不在意优先安排他们的学习材料。这种态度是由两个因素造成的：

- 在早期阶段记忆材料的体积较小（复习成本较低）
- 错误的信念认为人类记忆足够庞大，可以容纳所有的梦境知识

你认为你能逐行逐事实地记住整部[大英百科全书](https://en.wikipedia.org/wiki/Encyclop%C3%A6dia_Britannica)吗？

你可能会这样回答：_"我可能太懒了，我可能太忙了，但如果我有整天的时间来做这份工作，我会的"_。或者也许是 _"我可能不会，但我听说过有天才能够做到！比如[金·皮克](https://en.wikipedia.org/wiki/Kim_Peek) ？"_。如果你相信百科全书在可能的范围内，你很快会意识到你迫切需要[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")来帮助你克服一个大惊喜：我们的记忆远比你想象的要有限得多！

假设我们不处理那些受到记忆系统突变影响的人，记忆[大英百科全书](https://britannica.com/)将会否定 [SuperMemo 理论](http://super-memory.com/articles/theory.htm) ，该理论应适用于所有健康成年人。在 SuperMemo 的视角下，记忆[大英百科全书](https://britannica.com/)几乎是不可能的。大英百科全书的 32 卷中有 4400 万字。这相当于 600 万个 SuperMemo [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") （“人类记忆位”），假设信息密集文本的平均关键词提取比例为 1:7。假设学习跨度为 50 年，我们得到 18250 天和每天 330 个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 。假设知识的最佳表现（比如说[大英百科全书](https://britannica.com/)已经是“ [完美表述](https://supermemo.guru/wiki/20_rules_of_knowledge_formulation) ”），在给定的[知识保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")水平下，你无法比使用 SuperMemo 更快地学习（它只是找到了数学上的最佳解）。实践表明，长期维持每天超过 100 个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")是非常困难的，保留率约为 95%。换句话说，对于一个聪明的人来说，对于完美表述的大英百科全书知识，使用 SuperMemo，你几乎无法在一生中完成这个目标！

## 学习中的数量与保留之战

[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")使得从互联网导入大量学习材料变得简单。默认情况下，所有导入的材料都会进入学习过程。因此，大量未处理的信息开始与你决定记住的最重要知识争夺你的注意力。这是一场优先级的冲突。一方面，你希望确保对关键知识的高[保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") （如同经典的 SuperMemo），另一方面，你又想不断吸收更多的新知识。

在使用 SuperMemo 之前，你的学习主要依赖于阅读和复习书籍或自己的笔记。在早期的 SuperMemo 中，你会在纸上阅读和在电脑上重复之间分配时间。通过[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ，这些相互竞争的过程被融合为一个。你可以在 SuperMemo 中同时进行阅读和复习。然而，对于最热衷于增量阅读的人来说，优先级的平衡总是会危险地倾向于新的阅读，而牺牲之前获得的知识。这源于人性。新的阅读带来即时的满足感：_“今天，我学到了新东西。我变得更聪明了”_。复习你已经知道的材料总会让人感到负担。我们总是对自己健忘的记忆感到不满。我们总觉得自然应该给我们一个自然的选择，让我们决定忘记什么和记住什么，而不必痛苦地复习我们已经知道的内容。

要解决量与保留之间的斗争，并化解优先级的持续冲突，您需要比旧版 SuperMemo 提供的更好的工具。在[优先级队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") （2006 年）出现之前，您需要使用一套复杂的工具来进行大量学习，同时保护您最重要知识的[保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") 。您会使用复杂的概念，如 [A-Factors](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor")、 [遗忘指数](https://help.supermemo.org/wiki/Glossary:Forgetting_index "Glossary:Forgetting index") 、 [子集学习](https://help.supermemo.org/wiki/Subset_learning "Subset learning") 、 [选择性推迟](https://help.supermemo.org/wiki/Postpone "Postpone") 、 [重复排序](https://help.supermemo.org/wiki/Browser_menu "Browser menu")等。这些工具的自动化程度较低，需要您付出相当大的努力和知识。在实践中，大多数增量学习者不得不选择最简单的优先级工具： _适度_ 。您可以通过限制对知识的渴望来最好地保护您之前在学习上的投资。

较新的 SuperMemo 使用一种简单且完全自动化的机制，帮助您将大量阅读与对最重要材料的高[记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")相结合。该机制基于**[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")**的概念。

## 增量阅读中的优先偏差

在 SuperMemo 中，每个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")从 `0%` 到 `100%` 不等。按其[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")排序的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")形成_[优先级队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")_ 。一个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")也可以表示为其在[优先级队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")中的位置。您收藏中最重要的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")将位于[优先级队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")的`位置=1`。该队列是一个相对队列。这意味着，如果您例如在`位置=3` 插入一篇重要文章，所有在更高位置的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")和文章将向上移动一个位置（即朝向更低的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ）。因此， `位置=999` 的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")将被推到`位置=1000`，而之前位于`位置=3` 的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")现在将占据`位置=4`。队列中的前两个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，即`位置=1` 和`位置=2`，将不会移动。 相对性质的[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")将帮助您即时检查您[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中每个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的当前[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。在早期版本的 SuperMemo 中，您可以观察到高优先级等级中[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的拥挤。例如，您可以积累大量具有 `[A-Factor](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor")=1.01` 的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ，并几乎无法在该组内进行优先排序。（`[A-Factor](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor")=1.01` 是可能的最低值，对应于最高的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ）。

使用相对[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")的基本理由是存在一种认知偏差，我们称之为_优先偏差_ 。这种偏差使我们总是认为新发现的文章极其重要，值得阅读。新文章之所以显得如此重要，是因为我们低估了所有之前导入文章的价值。我们的记忆无法有效估计当前记忆知识的整体重要性。更不用说，它也无法对存储在你的[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")过程中的知识量（通常只有一小部分是你长期记忆的一部分）产生一个相对准确的估计。最终的结果是，我们总是低估自己所知道的知识量、我们在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中保留的知识量，以及这些知识量的重要性分布。这种心理机制也是阻碍 SuperMemo 普遍采用的主要力量。人类在生物设计上，对于估计自己知识的规模、学习的成本和遗忘的能力非常薄弱。 因此，如果对 SuperMemo 没有深入了解，个人很少会停下来意识到需要使用[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition") 。 这种低估效应在[增量学习](https://help.supermemo.org/wiki/Glossary:Incremental_learning "Glossary:Incremental learning")的情况下无疑更具破坏性，这远比这复杂得多，至今仍未用足够简单和引人注目的术语进行解释。

通过使用[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") ，SuperMemo 将帮助您可视化_优先级偏差_以及大量新材料迅速取代您学习重点中的旧材料的过程。此外，SuperMemo 高度自动化了处理材料溢出和调和高[保留率](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")与大量学习的过程。 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")一直以其将学习量提升到前所未有的水平而自豪。借助[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") ，您几乎可以消除_适度_因素，进一步增加学习量，而无需过多担心您辛苦获得的知识。

## SuperMemo 中的优先队列

您可以通过以下方式定义[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ：

- 按下 _Alt+P_，
- 通过点击**优先级**按钮（  [![SuperMemo: Modify priority lets you set the priority of the current element](https://help.supermemo.org/images/8/86/Modify_priority_button.png)](https://help.supermemo.org/wiki/File:Modify_priority_button.png "SuperMemo: Modify priority lets you set the priority of the current element")）在[学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar")上，或者
- 通过在[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")中选择**[优先级](https://help.supermemo.org/wiki/Element_menu#Priority "Element menu")  : 修改** 。

[![SuperMemo: "Element priority" dialog box which you can use to modify the priority of an element](https://help.supermemo.org/images/thumb/0/0d/Element_priority.jpg/800px-Element_priority.jpg)](https://help.supermemo.org/wiki/File:Element_priority.jpg "SuperMemo: \"Element priority\" dialog box which you can use to modify the priority of an element")

要设置[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，您可以选择[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")在[优先级队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")中的位置（从 `1` 到**[总数](https://help.supermemo.org/wiki/Statistics#Total "Statistics")** ），或者您可以选择百分比值（从 `0%` 到 `100%`）。 `**位置** =1` 对应于`**百分比** =0%`。同样， `**位置** = **[总数](https://help.supermemo.org/wiki/Statistics#Total "Statistics")**`对应于`**百分比** =100%`。

**低位置和低百分比意味着高优先级！** 这个违反直觉的选择是因为你更可能选择高 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 的 `0%` 或 `1%`，而不是低 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 的 `99%` 或 `100%`。输入数字 _2_ 所需的时间远少于输入数字 _98_（大约少 3-4 倍）。由于你在一次学习会话中可能会多次手动设置 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，这个违反直觉的选择将在多年的学习中为你节省大量的输入时间。从长远来看，你可能会感激在 SuperMemo 中颠倒设置的事物！

您可以在[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")中使用**[学习](https://help.supermemo.org/wiki/Element_menu#Learning "Element menu")  : 优先级 : 增加** （_Shift+Ctrl+上箭头_ ）来提高[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，或者使用**[学习](https://help.supermemo.org/wiki/Element_menu#Learning "Element menu")  : 优先级 : 减少** （_Shift+Ctrl+下箭头_ ）来降低它。这些操作也会影响[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")的 [A 因子](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor") 。

您可以在[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")中通过**[查看](https://help.supermemo.org/wiki/View_menu "View menu")  : [优先队列](https://help.supermemo.org/wiki/View_menu#Priority_queue "View menu")**查看您的整个[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") 。

## 优先排序在变得简单之前是困难的

每个人都在与[优先事项](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")作斗争，因为承认事情并不像看起来那么重要是非常困难的。在美好的事物中，知识渴望与创造力之间存在相关性。如果你在[优先事项](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")和溢出方面感到挣扎，那么这可能是一个好的指标，只要你赢得这场战斗并学会诚实地进行优先排序。

要有效地进行优先级排序，您只需知道最重要的材料的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") `0%`，而您最不重要的材料是 `100%`。您需要培养一种感觉，了解一条信息在队列中的位置。如果您认为所有内容都是“最高优先级”，那么您显然还处于起步阶段。选择两个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")并问自己一个问题：_“如果我必须忘记/删除一个，那会是哪个？”_ 这个练习将帮助您看到不同[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的不同应用及其背后的不同价值。另一个练习是：尽量给[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")设定尽可能低的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。您能把它设定为 _10%_ 吗？如果是 _20%_，您会感到受伤吗？如果是 _66%_，世界会崩溃吗？通过一些有意识的努力，您会意识到自己可以没有某些知识（毕竟，大多数人根本不使用 SuperMemo，照样活得很好）。经过几个月的训练，您会在这方面变得更好。

如果你不断查看[**保护**统计](https://help.supermemo.org/wiki/Statistics#Protection "Statistics") ，你可能还会意识到，发送超出你平均优先级保护的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")将有助于让它们暂时不再显示。这样，如果你创建了太多拥挤你学习过程的[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，你可能会享受将大部分它们发送出保护区的过程，专注于一两个能够捕捉你想要学习的知识精髓的项目。

SuperMemo 在优先级工作方面不会给你太大帮助，除非你手动调整[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") （例如，通过说“ _这个不能等 30 天，我必须在 11 天内看到它_ ”）。这告诉 SuperMemo [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")必须稍微提高。

## 排序重复项

在高容量的[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")过程中，您在一天内接收到的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")数量可能超过您一周内能够处理的数量（甚至更糟）。因此，从[优先级最高的元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")开始您的复习过程至关重要。低优先级的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")可能会在队列中滞留数月或数年。高优先级的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")应在 SuperMemo 找到最佳时机时进行复习。只有这样，您才能满足高优先级材料的_[请求遗忘指数](https://supermemo.guru/wiki/Forgetting_index_in_SuperMemo#requested_forgetting_index)_标准，同时仍然不必限制您对知识的渴望。简单来说，在一个过载的学习过程中，SuperMemo 所承诺的“优秀记忆”只会适用于您的高优先级材料。优先级越低，保留率越低（请参见： **[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Toolkit_menu#Statistics "Toolkit menu")  : [分析](https://help.supermemo.org/wiki/Analysis "Analysis")  : [图表](https://help.supermemo.org/wiki/Analysis#Graphs "Analysis")  : 遗忘指数与优先级**以获取实证证据）。

默认情况下，您的重复将会在每个学习日的开始时**自动排序** （除非您取消勾选**[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [排序](https://help.supermemo.org/wiki/Learn_menu#Sorting "Learn menu")  : 自动排序重复** ）。这意味着在某一天复习的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")将按[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")排序。除了[自动排序](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort") ，您还可以随时通过**[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [排序](https://help.supermemo.org/wiki/Learn_menu#Sorting "Learn menu")  : 立即排序**手动排序学习队列。

你会很快发现，严格按照[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")标准执行的精确排序存在严重缺陷。一方面，由于[优先级偏见](https://help.supermemo.org/wiki/Glossary:Priority_bias "Glossary:Priority bias") ，你会迅速用当前兴趣主导的内容取代较旧的高质量材料。这将使你回到使用 SuperMemo 之前的状态，那时你不断阅读新材料，却忘记了之前在学习上投入的时间。新材料总是显得非常重要，并且总是倾向于将你之前的学习转向较低的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。此外，你可能会因新文章的涌入而淹没你经典的 SuperMemo 重复（即问答复习）。再一次，你没有确保之前的投资变得持久，而是不断急于阅读新材料，忘记了旧的内容。

SuperMemo 通过让您定义以下内容，解决了[优先级偏差](https://help.supermemo.org/wiki/Glossary:Priority_bias "Glossary:Priority bias")和大量[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")涌入的问题：

1. 学习中[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")的比例，以及
2. 学习队列随机化的程度。

[![SuperMemo: Sorting items and topics taking part in the learning process using various criteria (priority, randomization, proportion of topics, etc.)](https://help.supermemo.org/images/thumb/d/d3/Repetition_sorting_criteria.jpg/544px-Repetition_sorting_criteria.jpg)](https://help.supermemo.org/wiki/File:Repetition_sorting_criteria.jpg "SuperMemo: Sorting items and topics taking part in the learning process using various criteria (priority, randomization, proportion of topics, etc.)")

> _**图** : SuperMemo 中的排序标准。学习队列中仅允许少量耗时的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 。这个比例的选择旨在最大化学习的乐趣和效率：新材料的充分流入与对您之前投资的必要复习相结合。学习顺序中允许一定程度的随机化。这样，您可以重新发现因大量新材料流入而被置于[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")之下的珍贵文章。在所示的例子中， [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")的随机化程度高于[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 。_

您可以通过使用 **[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [排序](https://help.supermemo.org/wiki/Learn_menu#Sorting "Learn menu")  : 排序标准** 来确定排序标准。您需要通过反复试验来调整 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 的比例和随机化程度。这一切都取决于您的目标和偏好。如果您在过程中承认的 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 太少，您将不会获得太多新知识。如果您允许的 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 太多，您将开始忘记之前学过的材料。如果您过度随机化学习队列，整个优先级机制将会崩溃，您对高优先级材料的 [记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") 将会下降。如果您严格按 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 对重复内容进行排序，新材料将不断取代旧材料，导致 [优先级偏差](https://help.supermemo.org/wiki/Glossary:Priority_bias "Glossary:Priority bias") 。 即使对于[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")重复，其中[优先级偏差](https://help.supermemo.org/wiki/Glossary:Priority_bias "Glossary:Priority bias")不那么明显，适度的随机化将有助于提高不太受欢迎的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，分散从同一[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")生成的[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") ，并通过提高整体学习速度（通过[间隔效应](https://help.supermemo.org/wiki/Glossary:Spacing_effect "Glossary:Spacing effect") ）来弥补一些[记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")的损失。

[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")的比例告诉你在重复学习中你将接收到多少[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ，与[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")相比。如果你想确保保持对之前添加材料的高[记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") （根据 SuperMemo 的定义），你不能用新材料（新的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ）来过载学习过程，因为你将没有足够的时间进行每日的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")复习。在一个健康的学习过程中，你应该将[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")的流入限制在 1:4 或更少（即每个提供的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")至少允许重复 4 个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ）。

## 随机重复

为了确保您对您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中的学习材料的内容和分布有良好的理解，您应该不时进行随机重复。这是为了防止视野狭窄和[优先偏见](https://help.supermemo.org/wiki/Glossary:Priority_bias "Glossary:Priority bias") 。您可以通过**[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [随机](https://help.supermemo.org/wiki/Learn_menu#Random "Learn menu")  : 随机重复** ，或通过**[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [怜悯](https://help.supermemo.org/wiki/Mercy "Mercy")** ，并将**[标准](https://help.supermemo.org/wiki/Mercy_criteria "Mercy criteria")  : 排序选项**设置为**随机化**来实现随机重复。

偶尔的随机重复可能会非常有启发性，因为它们不会偏向于你材料的任何部分。你的学习不会因为短间隔元素、长间隔元素、特定元素类型（例如文章、摘录、填空题等）、元素内容（例如知识树的特定分支）、元素处理程度，或者（最重要的）元素的优先级而产生偏见。随机重复将帮助你理解可能的负面趋势，例如新材料的过度涌入、由于频繁重新安排导致的低保留率、新创建的填空题的表述不佳、所获得知识的低质量或适用性、对某些主题的过度强调以牺牲其他主题等。然而，最重要的是，随机重复应该帮助你感受到优先级偏见的力量。 你会发现，当专注于新的导入时，你会立刻被诱惑去提高那些在你注意力之外的大部分材料的优先级。

## 优先级规则手册

- 学习如何处理新[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。尝试可视化整个[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") ，并学习如何**在你整个知识的光谱中定位[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")** 。尽量忽略紧迫性，专注于知识的长期优先级（除非面临截止日期或考试的压力）。如果你所有的新[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的优先级都在 1-10%之间，你就知道你没有诚实对待自己。一些新材料的优先级必须降到 80-90%。有些事情你想知道，但实际上并不需要知道。将它们添加到你的[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中，但给它们一个诚实的低[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。你学习电影明星吗？没关系。然而，除非你想成为演员（或类似职业），否则你应该给这些明星应得的 95-99%的优先级。
- 在这个过程中，您可能会发现很难感知 30%和 60% [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")之间的区别。或者您可能总是将[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")设置为 1%。SuperMemo 以四位小数显示[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")的事实可能会让您觉得自己的优先级设置不够充分。忽略这些感觉。您可以从一个 3 点量表开始：1%、33%和 88%。您越是进行优先级设置，越会觉得这变得自然和自动。请耐心等待。
- **降低优先级是非常困难且痛苦的** ，然而，这可能是你在一个负担过重的 [集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 中取得成功的关键。几乎任何事情都很容易希望提高优先级。你需要训练你的大脑允许低 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ！你需要放弃一些知识（至少是降低到 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 较低的领域）！ **你无法知道你想知道的所有事情！**（除非你只想知道很少的东西）
- 定期检查 **[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Toolkit_menu#Statistics "Toolkit menu")  : [分析](https://help.supermemo.org/wiki/Analysis "Analysis")  : [使用](https://help.supermemo.org/wiki/Analysis#Use "Analysis")  : 优先级保护 : 项目** (_Shift+Alt+A_ 会打开您上次离开时的标签)。 **优先级保护** 是您 [收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 中实际能够满足您 [请求的遗忘指数](https://supermemo.guru/wiki/Forgetting_index_in_SuperMemo#requested_forgetting_index) 标准的比例的最诚实指标。例如，如果您的 **优先级保护** 为 3%，您就知道在 3%-100% [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 范围内没有任何知识是安全的！如果您持续高估 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ， [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 将会挤满高优先级的位置，而 **优先级保护** 参数将会非常低。如果您诚实，您将提高该值，并更容易保护最高优先级的 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ，避免它们被延迟和可能被遗忘。您会惊讶于只需几天的集中努力和降低优先级，您就能多快提高 **优先级保护** （更不用说在更长的时间内）！请参见下面的图片中的示例。这种努力将对您知识的质量产生奇迹。重要性应始终优先于紧迫性和情感。
    
    [![Toolkit : Statistics : Analysis : Use : Priority protection : Items shows your actual processing capacity for high-priority items on individual days](https://help.supermemo.org/images/thumb/f/fa/Item_priority_protection.jpg/800px-Item_priority_protection.jpg)](https://help.supermemo.org/wiki/File:Item_priority_protection.jpg "Toolkit : Statistics : Analysis : Use : Priority protection : Items shows your actual processing capacity for high-priority items on individual days")
    
- 定期检查 **[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Toolkit_menu#Statistics "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Statistics "Statistics")  : [保护](https://help.supermemo.org/wiki/Statistics#Protection "Statistics")** 。这些参数告诉你在给定的会话中，你成功处理了多少优先级最高的材料（这相当于单日的 **优先级保护** ）。如果这些数字变得非常低，你需要开始降低你的 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") （或 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ）的优先级。只要你保持 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 合理，就不需要削减你的重要需求。
- 优先考虑[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")或元素集的最重要时刻：
    - 在项目失败时，您需要重新考虑[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。经常失败的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")是进展缓慢的最大原因。降低它们的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")是解决此问题的一种方法（并可能通过引发[间隔效应](https://help.supermemo.org/wiki/Glossary:Spacing_effect "Glossary:Spacing effect")或减少干扰来帮助您的记忆）。
    - 在文章导入时，高[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")将确保早期阅读，然而，一旦开始阅读，您可能希望降低优先级，仅对重要的[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")给予高[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ！您可以为整篇文章设置[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")并一次性拆分所有内容（在阅读时或通过自动拆分）。然而，随着阅读的进展，逐步拆分文章要容易得多，然后再通过**[优先级](https://help.supermemo.org/wiki/Subset_operations#Priority "Subset operations")  : 分配**在[浏览器处理菜单](https://help.supermemo.org/wiki/Subset_operations "Subset operations")上扩展所有[子元素](https://help.supermemo.org/wiki/Glossary:Child "Glossary:Child")的优先级。一旦您完成阅读文章，生成的一些[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")和[填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")将根据您的决定被赋予更高的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，而大多数[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")将根据文章的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")自动设置。这通常会是一个高于应得的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。因此，每次完成阅读一篇文章时，建议使用**[优先级](https://help.supermemo.org/wiki/Subset_operations#Priority "Subset operations")  : 分配** 。
    - 给新的 [clozes](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 设定一个很高的 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 是有道理的，以确保它们至少被复习一次，以便在你的记忆中“孵化”。然而，一旦第一次重复成功结束，并且你在更长的 [间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") 中的未来回忆变得更有可能，你可以提供一个更诚实的 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，通常低于最初为了生成 [cloze deletions](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 而优先考虑 [extracts](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 时的优先级。如果你仍然担心可能的遗忘，你可以等到第 3 次或第 4 次复习再确定诚实的 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。你等待的时间越长，你在此期间忘记一些真正重要的事情的可能性就越大。
- 如果你在较低的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")和较高的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")之间犹豫不决， **较低的优先级几乎总是更好！**（因为可能会影响你学习过程的[优先级偏见](https://help.supermemo.org/wiki/Glossary:Priority_bias "Glossary:Priority bias") ）
- 如果您跳过了一些每日重复学习的课程，项目保护将会下降（如**优先级保护**在**[分析](https://help.supermemo.org/wiki/Analysis "Analysis")  : 使用**中所示）。如果您没有很好地进行优先级排序，项目保护也会下降。保持项目保护高的最佳方法是定期学习，学习大量内容，并提供诚实的优先级评估。
- 如果您在一个超负荷的[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中对[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")保持诚实，您的[测量遗忘指数](https://supermemo.guru/wiki/Forgetting_index_in_SuperMemo#measured_forgetting_index)将会增加。然而，它将更诚实地反映您对该[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中材料的实际知识。要查看[遗忘指数](https://help.supermemo.org/wiki/Glossary:Forgetting_index "Glossary:Forgetting index")如何随[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")变化，请参见**[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Toolkit_menu#Statistics "Toolkit menu")  : [分析](https://help.supermemo.org/wiki/Analysis "Analysis")  : [图表](https://help.supermemo.org/wiki/Analysis#Graphs "Analysis")  : 遗忘指数与优先级** 。
- 如果您手动更改[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") ，元素[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")将会改变。如果您缩短[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") ， [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")将自动提高。如果您推迟下次重复， [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")将会下降。
- **优先级保护**有时会在一天内大幅下降。这并不需要担心，只要这不是一种趋势。例如，如果你发现一组[填空题](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")过低，并且你在整个集合中提高了该[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，所有已经[待处理项](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")但不在[待处理队列](https://help.supermemo.org/wiki/Glossary:Outstanding_element "Glossary:Outstanding element")前面的项目，将会影响第二天的项目保护测量。这是一个一天的现象。然而，你也会注意到大规模提升优先级的破坏性影响。说“那个[分支](https://help.supermemo.org/wiki/Glossary:Outstanding_queue "Glossary:Outstanding queue")非常重要”很容易，而通过不加选择地更改[优先级](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch")来弥补损失则非常困难。
- 如果你想知道哪个被推迟的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")减少了你的项目保护（ **优先级保护** ），请选择**[查看](https://help.supermemo.org/wiki/View_menu "View menu")  : [最近](https://help.supermemo.org/wiki/View_menu#Recent "View menu")  : 推迟** ，在[浏览器菜单](https://help.supermemo.org/wiki/Browser_menu "Browser menu")中选择**[子项](https://help.supermemo.org/wiki/Browser_menu#Child "Browser menu")  : 项目** ，并按[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")排序（例如，点击**优先**列标题）。有问题的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")应该会排在最上面。它将告诉你你的项目保护是如何下降的。这是前一天学习中错过的最高优先级[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 。
- 获取文章相对重要性的简单方法是查看**元素优先级**对话框中的**之后**和**之前**字段（_Alt+P_）。
    
    [![SuperMemo: A simple way to get the feel of the relative importance of a given element is to look at the After and Before fields in the Element priority dialog (Alt+P)](https://help.supermemo.org/images/thumb/8/8d/Element_relative_priority.jpg/800px-Element_relative_priority.jpg)](https://help.supermemo.org/wiki/File:Element_relative_priority.jpg "SuperMemo: A simple way to get the feel of the relative importance of a given element is to look at the After and Before fields in the Element priority dialog (Alt+P)")
    
    > _**图：** 了解给定 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 相对重要性的简单方法是查看 **之后** 和 **之前** 字段在 [**元素优先级** 对话框](https://help.supermemo.org/wiki/Priority_queue#Priority_queue_in_SuperMemo "Priority queue") (Alt+P) 中。在图片中，来自维基百科的关于 [胶淋巴系统](https://en.wikipedia.org/wiki/Glymphatic_system) 的 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 获得了 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")_ 42%_。这个优先级与关于 morpheeins 和 autapse 术语的 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 相当。_
    
- 终身学习和学校学习之间的主要区别在于，学校人为地扭曲了学习材料的优先级。在考试之前，某一部分材料必须获得高优先级和高处理，而在考试之后，同样的材料必须进行现实的重新评估（这通常意味着优先级的多重下降和负担的严重稀释）。

## 优先队列：总结

- SuperMemo 使用一个[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") ，其中所有[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")根据它们在学习过程中的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")进行排列
- 最高的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")是 `0%`。最低的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")是 `100%`。
- SuperMemo 可以[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone")多余的[未完成材料](https://help.supermemo.org/wiki/Glossary:Outstanding_material "Glossary:Outstanding material")
- SuperMemo 使用[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")来[自动排序](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort")学习队列。这意味着每天您将首先接收到高优先级的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 。
- [优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") 减轻了学习中对 _适度_ 的需求；然而，它并没有完全解决 [优先偏差](https://help.supermemo.org/wiki/Glossary:Priority_bias "Glossary:Priority bias")
- SuperMemo 通过严格限制学习过程中[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")的流入来自动化_调节_
- SuperMemo 通过用户定义的随机化程度来帮助您对抗[优先级偏差](https://help.supermemo.org/wiki/Glossary:Priority_bias "Glossary:Priority bias") ，以[排序学习队列](https://help.supermemo.org/wiki/Incremental_learning#Sorting_repetitions)
- 在一个负荷过重的学习过程中，低优先级材料的[保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")将大幅下降
- 降低[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的优先级是痛苦的，但这是你长期成功的关键。由于[优先级偏差](https://help.supermemo.org/wiki/Glossary:Priority_bias "Glossary:Priority bias") ，较低的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")几乎总是比较高的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")更好！
- **[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Toolkit_menu#Statistics "Toolkit menu")  : [分析](https://help.supermemo.org/wiki/Analysis "Analysis")  : [使用](https://help.supermemo.org/wiki/Analysis#Use "Analysis")  : 优先级保护 : 项目** 可用于检查在过载学习过程中项目保护的程度
- **[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Toolkit_menu#Statistics "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Statistics "Statistics")  : [保护](https://help.supermemo.org/wiki/Statistics#Protection "Statistics")** 可用于检查在特定日期处理最高优先级材料的进展情况
- [优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")将帮助你 **增加学习量** ，并且仍然 **提高 [高优先级材料](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention") 的保留率**

# 视觉学习

## 增量图像处理与学习

一图胜千言。这句古老的格言表达了一个众所周知的事实，源自神经科学：我们拥有一个极其有效的视觉记忆系统，应该经常使用它来补充用于更抽象知识的记忆系统，而这些知识正是增量学习的主要目标。图片具有很强的记忆助力，应该广泛用于说明学习材料。SuperMemo 实现了图片操作，只要你掌握了视觉学习的基本技能，这将使你与图片的工作比以往任何时候都更轻松。

**视觉学习**相当于[增量阅读](https://help.supermemo.org/wiki/Incremental_reading "Incremental reading") ，但用于掌握以图片呈现的材料。在视觉学习中，您会获得一系列图片作为输入，并产生对最重要的图片、图片片段或与图片相关的注释的持久记忆。图片可以是您标准学习过程的一部分，也可以来自特定的图片或照片[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") ，例如您的[家庭相册](http://supermemopedia.com/wiki/Why_SuperMemo,_not_Photo_Gallery%3F) 。

视觉学习的工具和技术也可以用于学习仅以图片形式存在的文本（例如书籍快照、只读 PDF 屏幕截图、纸质笔记等）。可以使用扫描仪或数码相机拍摄笔记的图片。然而，除非使用高质量的 OCR 软件或手动注释图片文本，否则无法执行文本搜索。

## 将图片添加到 SuperMemo

### 从剪贴板粘贴图片

要将图片粘贴到 SuperMemo 中，首先将其复制到剪贴板。在 SuperMemo 中，转到要显示图片的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 。确保您处于[演示模式](https://help.supermemo.org/wiki/Glossary:Presentation_mode "Glossary:Presentation mode") （例如，如果不确定，可以按 _Esc_ 几次）。按 _Shift+Insert_ 或 _Ctrl+V_ 粘贴图片，或点击[学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar")上的**粘贴**按钮（  [![SuperMemo: Insert the contents of the clipboard](https://help.supermemo.org/images/9/9e/Paste.png)](https://help.supermemo.org/wiki/File:Paste.png "SuperMemo: Insert the contents of the clipboard")）。

如果该[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")没有图像[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") ，SuperMemo 将把现有的[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")向左移动，以为图片腾出空间。否则，它将重用第一个空的图像[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") ，或者将现有图像拼贴在一起，以在专用于图片的空间中添加新图像。根据您的[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")设置，以及与您的默认[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")相关联的图像[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")的存在，SuperMemo 可能还会提示您_您想使用图像模板吗？_

如果您的[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")有一个图片托管等效项，系统会询问是否应该使用图片[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") 。图片[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")的名称应与当前应用的[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")相同，并带有后缀 _Picture_ 或 _P_。例如，如果应用的[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")名为 _Physics_，并且您希望为带有 _Physics_ [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")自动建议图片[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") ，则应在[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中将图片[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")命名为 _Physics Picture_ 或 _PhysicsP_（例如，可以通过**[搜索](https://help.supermemo.org/wiki/Search_menu "Search menu")  : [模板](https://help.supermemo.org/wiki/Search_menu#Templates "Search menu")**在[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")中找到）。

新粘贴的图片总是被添加到图像[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中，并与承载它的图像[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")链接。

[![SuperMemo: Pasting four pictures of a naked mole rat into a single element](https://help.supermemo.org/images/thumb/4/4a/Paste_picture_from_the_clipboard.jpg/800px-Paste_picture_from_the_clipboard.jpg)](https://help.supermemo.org/wiki/File:Paste_picture_from_the_clipboard.jpg "SuperMemo: Pasting four pictures of a naked mole rat into a single element")

> _**图** : 几张裸鼹鼠的图片已粘贴到所呈现的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 上。在为第一张图片节省空间后，SuperMemo 将在 [元素窗口](https://help.supermemo.org/wiki/Glossary:Element_window "Glossary:Element window") 右侧的可用区域中平铺剩余的图片（或者如果在粘贴时应用了自定义图片 [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") ，则在相关的图片区域中）。请注意，如果选择 **图像页面** ，您可以通过 **[网页导入](https://help.supermemo.org/wiki/Web_import "Web import")** 实现相同的效果。_

### 从本地驱动器导入图片

#### 一张图片

如果您的图片存储在硬盘上：

1. 右键点击您想要导入图片的 [组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") ，
2. 选择 **[文件](https://help.supermemo.org/wiki/Component_menu#File "Component menu")  : [导入文件](https://help.supermemo.org/wiki/Component_menu#Import_file "Component menu")** ，
3. 从磁盘中选择图片。

#### 一文件夹的图片

如果您想导入存储在硬盘特定文件夹中的整个相册，请使用 **[文件](https://help.supermemo.org/wiki/File_menu "File menu")  : [导入](https://help.supermemo.org/wiki/File_menu#Import "File menu")  : 文件和文件夹** ，并选择要导入的文件夹。所有文件（包括非图片文件）将被导入到单独的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 中，这些元素将在 [**内容**窗口](https://help.supermemo.org/wiki/Contents "Contents") 中形成类似于导入文件夹结构的 [树结构](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree") （即所选文件夹及其子文件夹（如果有的话））。请注意，您可以自动删除导入文件夹中的导入图片。使用此选项时请谨慎。为了加快导入速度，导入删除操作不可撤销。此外，如果您选择了错误的文件夹，过程可能会耗费很长时间，最终您将得到一个夹杂着例如 EXE 应用程序的 [集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 。

### 从网络导入图片

您可以从网络导入图片。您可以搜索图片（例如，通过 [Google 图片](https://www.google.pl/imghp) ），或者您可以导入在您使用 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 处理的文章中包含的图片。

#### 从网络导入

如果您在网上找到一些图片，请在 Microsoft Edge 中打开它们，并使用 _Shift+F8_ 将它们导入到 SuperMemo。有关详细信息，请参见 [网页导入](https://help.supermemo.org/wiki/Web_import "Web import") 。大型图片的下载进度显示在 [状态栏](https://help.supermemo.org/wiki/Status_bar "Status bar") 上。

导入[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")的确定方式如下：

1. 如果当前[概念组](https://help.supermemo.org/wiki/Glossary:Concept_group "Glossary:Concept group")包含至少一个文本[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") （用于图片描述）和一个图像[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") （用于图片），则使用默认[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")
2. 如果预定义的 _文章图片_[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") 仍然存在，则使用该模板（您可以重新定义此 [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") 或将您自己的 [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") 以此名称保存，只要它包含所需的文本和图像 [组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") ）
3. 在所有其他情况下，创建的无[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")将根据导入程序的要求包含文本和图像[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")

#### 从包含在 SuperMemo 中的文章导入

一旦您从网上导入一篇文章，所有的图片仍然会保留在网上。如果您希望确保不会丢失这些图片（例如，当文章被删除时），或者如果您希望这些图片在所有的 [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 和 [填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 中显示出来，使用 _Ctrl+F8_ （在 HTML [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu")上的 **[下载图片](https://help.supermemo.org/wiki/Component_menu#Download_images "Component menu")** ）。

[![SuperMemo: Download images dialog box makes it possible for you to get images embedded in local pages imported from the net and put them to the image registry](https://help.supermemo.org/images/thumb/5/58/Download_images.jpg/771px-Download_images.jpg)](https://help.supermemo.org/wiki/File:Download_images.jpg "SuperMemo: Download images dialog box makes it possible for you to get images embedded in local pages imported from the net and put them to the image registry")

> _**图：** **[下载图像](https://help.supermemo.org/wiki/Component_menu#Download_images "Component menu")** (Ctrl+F8) 使得可以下载在 [HTML 组件](https://help.supermemo.org/wiki/HTML_component "HTML component") 的 HTML 代码中提到的远程图像，并将其导入到图像 [注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry") 中。在图片中，正在下载来自 [维基百科](https://en.wikipedia.org/wiki/Donald_Trump) 的 [唐纳德·特朗普](https://en.wikipedia.org/) 文章的插图。最初，图像作为缩略图从浏览器渲染器中捕获。全尺寸图像则并行下载。34 张列出的图像中已有 5 张被下载（如标题所示），而另外 2 张仍在下载中（标记为 →，后面跟着当前下载进度，即 27.9% 和 38.2% 完成）。您可以用缩略图来说明 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，或者等待全图下载完成。在平均速度的连接下，图像通常下载速度快于您查看的速度。换句话说，与 SuperMemo 16 不同，您通常不需要等待图像下载。 **插入** 将插入图片以说明文章及其所有 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 和 [填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") （那些准备好插入的标记为 ✔）。 未插入的缩略图/图片将在所有包含相应图像的文本部分中提供下载。_

### 图片作为答案

如果您希望图片成为答案的一部分（即在提问时不可见），请在图像的 **[答案](https://help.supermemo.org/wiki/Component_menu#Answer "Component menu")** 中检查 [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") 。

## 拼贴图片

如果您对图片的拼贴方式不满意，可以重新排列[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")并重新拼贴您的图片。要重新排列[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") ，首先将它们设置为[拖动模式](https://help.supermemo.org/wiki/Glossary:Dragging_mode "Glossary:Dragging mode") 。您可以通过 _Alt+点击_将[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")切换到[拖动模式](https://help.supermemo.org/wiki/Glossary:Dragging_mode "Glossary:Dragging mode") （点击两次，直到[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")变为灰色并可拖动）。您可以通过[学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar")上的**切换模式**按钮（  [![SuperMemo: Switch element from presentation to editing to drag&size mode](https://help.supermemo.org/images/2/2c/Switch_mode.png)](https://help.supermemo.org/wiki/File:Switch_mode.png "SuperMemo: Switch element from presentation to editing to drag&size mode")）将所有[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")切换到[拖动模式](https://help.supermemo.org/wiki/Glossary:Dragging_mode "Glossary:Dragging mode") ，也可以通过在空的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")区域上双击 _Alt+点击_ 、在[导航栏](https://help.supermemo.org/wiki/Navigation_bar "Navigation bar")上或在[元素窗口](https://help.supermemo.org/wiki/Glossary:Element_window "Glossary:Element window")的底部栏上进行操作。一旦进入[拖动模式](https://help.supermemo.org/wiki/Glossary:Dragging_mode "Glossary:Dragging mode") ， [组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")就可以用鼠标移动。

要进行[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")的平铺，将要平铺的[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")设置为[拖动模式](https://help.supermemo.org/wiki/Glossary:Dragging_mode "Glossary:Dragging mode") ，然后在**[指挥官](https://help.supermemo.org/wiki/SuperMemo_Commander "SuperMemo Commander")**中选择**平铺组件** （_Ctrl+Enter_），或者在[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")中选择**[组件](https://help.supermemo.org/wiki/Element_menu#Components "Element menu")  : 平铺组件** （_Shift+Alt+T_）。组件平铺助手将帮助您将[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")排列成最佳的行和列组合。 [组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")将被平铺到由所有选定平铺的[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")的最上、最下、最右和最左边缘确定的矩形中。所有其他[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")的位置不予考虑。请注意，一旦您更改了**行**或**列**中的任意一个，您需要按 _Enter_ 以重新计算另一个参数并更新预览网格。

要选择[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")进行平铺，您还可以按 _Ctrl+E_ 将所有[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")设置为[编辑模式](https://help.supermemo.org/wiki/Glossary:Editing_mode "Glossary:Editing mode") ，并通过双击或三击 _Alt+click_ 将非平铺的[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")返回到[演示模式](https://help.supermemo.org/wiki/Glossary:Presentation_mode "Glossary:Presentation mode") 。最后，您只需在要平铺之前检查或取消检查显示在列表上的[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") 。

[![SuperMemo: Tiling Rafael Nadal pictures with component tiling assistance](https://help.supermemo.org/images/thumb/6/63/Tile_arrangement.jpg/800px-Tile_arrangement.jpg)](https://help.supermemo.org/wiki/File:Tile_arrangement.jpg "SuperMemo: Tiling Rafael Nadal pictures with component tiling assistance")

> _**图：** 14 [拉斐尔·纳达尔](https://en.wikipedia.org/wiki/Rafael_Nadal)的图片正在使用 **[图块排列](https://help.supermemo.org/wiki/Element_menu#Components "Element menu")** 工具进行拼贴。您可以使用此工具轻松确定要将当前 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 中可用的图片排列成多少行和多少列。在图片中，该元素包含了这位西班牙网球选手庆祝他所有 14 个 [法国公开赛](https://en.wikipedia.org/wiki/French_Open) 比赛积分的照片。_

## 大图景

### 缩放、切片、修剪和裁剪图片

有些图片太大，无法有效用于学习。它们包含的信息过多。在某些情况下，您可能想要关注图片的重要部分，而在其他情况下，您可能只想丢弃不必要的信息。

例如，在学习政治地理时，您可能会将一幅巨大的非洲地图导入 SuperMemo。然而，对于单个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ，您可能希望将显示的图片部分限制为一个国家及其直接邻国。

[![SuperMemo: The unzoomed picture of the African political map used to illustrate elements related to Africa](https://help.supermemo.org/images/thumb/d/d7/Unzoomed_picture.jpg/800px-Unzoomed_picture.jpg)](https://help.supermemo.org/wiki/File:Unzoomed_picture.jpg "SuperMemo: The unzoomed picture of the African political map used to illustrate elements related to Africa")

> _**图** : 用于说明与非洲相关的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的非洲政治地图的未缩放图片。您可以看到与哈比亚里马纳总统被刺杀相关的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，该元素摘自关于[卢旺达历史](https://en.wikipedia.org/wiki/History_of_Rwanda)的文章，最初从[维基百科](https://en.wikipedia.org/)导入。该[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")在右侧的非洲政治地图上进行了说明（地图既没有缩放也没有裁剪；只是按比例在图像[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")内拉伸）。_

[![SuperMemo: The picture of the African political map zoomed in on Rwanda to illustrate to an item about the assassination of the President Habyarimana in 1994](https://help.supermemo.org/images/thumb/8/84/Zoomed_picture.jpg/800px-Zoomed_picture.jpg)](https://help.supermemo.org/wiki/File:Zoomed_picture.jpg "SuperMemo: The picture of the African political map zoomed in on Rwanda to illustrate to an item about the assassination of the President Habyarimana in 1994")

> _**图** : 非洲政治地图的图片，放大了卢旺达，以说明关于 1994 年哈比亚利马纳总统被刺杀的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 。在图片中，您可以看到从[卢旺达历史](https://en.wikipedia.org/wiki/History_of_Rwanda)文章中生成的[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 。然而，在这个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")中，非洲政治地图放大了卢旺达（以及邻国）。原始图片在不裁剪原始图片文件的情况下进行了放大。放大的图片用边框标记，边框在[放大和裁剪模式](https://help.supermemo.org/wiki/Glossary:Zoom%26trim_mode "Glossary:Zoom&trim mode")中为亮青柠色 ，在[显示模式](https://help.supermemo.org/wiki/Glossary:Presentation_mode "Glossary:Presentation mode")中为红色 。如果您不裁剪图片，它将在所有使用它的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")中保持不变（无论是放大还是未放大）（包括来自[卢旺达历史](https://en.wikipedia.org/wiki/History_of_Rwanda)文章的其他[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") ）。_

要在给定的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 中仅显示图片的一小部分，请通过 _Alt+点击_ 图片进入 [缩放和裁剪模式](https://help.supermemo.org/wiki/Glossary:Zoom%26trim_mode "Glossary:Zoom&trim mode") 。现在您可以使用几种操作来放大图片中有趣的部分：

- **缩放** : 点击中间鼠标按钮以放大图片中有趣的部分
- **取消缩放** : _按住 Shift 并点击_中间按钮以取消缩放
- **移动** : _按住 Shift 并拖动_放大的图片以调整显示区域
- **裁剪** : _Ctrl+滑动_ 不需要的图片边缘：
    1. 按 _Ctrl_，
    2. 指向要切割的边缘，
    3. 按下鼠标，然后
    4. move it in the direction of the area that is to be cut.
- **选择** : 拖动并选择以标记要在图片中显示的区域：
    1. 指向所需区域的一个角落，
    2. 按下左键鼠标，
    3. 拖动选择框以选择图片的一部分，并
    4. 释放鼠标按钮以切割图片。

一旦你放大到感兴趣的区域，按 _Esc_ 退出 [缩放和裁剪模式](https://help.supermemo.org/wiki/Glossary:Zoom%26trim_mode "Glossary:Zoom&trim mode") 。你将获得以下选项：

[![SuperMemo: The list of options presented upon quitting the zoom&trim mode](https://help.supermemo.org/images/thumb/d/d4/Zoom_and_trim_options.jpg/800px-Zoom_and_trim_options.jpg)](https://help.supermemo.org/wiki/File:Zoom_and_trim_options.jpg "SuperMemo: The list of options presented upon quitting the zoom&trim mode")

- **保持图片缩放/裁剪而不更改文件** 。这将在当前[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")中显示所选部分的图片，而不更改可能在其他地方完整使用或与其他部分缩放的原始图片文件。这是默认选项。当您重新访问[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")时，它仍将被标记为缩放边框。然而， [缩放&裁剪模式](https://help.supermemo.org/wiki/Glossary:Zoom%26trim_mode "Glossary:Zoom&trim mode")的青色边框将被红色边框替代，这表示在[显示模式](https://help.supermemo.org/wiki/Glossary:Presentation_mode "Glossary:Presentation mode")中显示的是缩放后的图片。
- **永久裁剪/剪切缩放/修剪后的图像文件** 。这将用一个更小的图像替换原始图片文件，该图像表示放大区域。
- **取消缩放/撤销** 。这将取消在[缩放和裁剪模式](https://help.supermemo.org/wiki/Glossary:Zoom%26trim_mode "Glossary:Zoom&trim mode")中引入的更改。
- **取消** 。这没有任何作用（即您将保持在[缩放和裁剪模式](https://help.supermemo.org/wiki/Glossary:Zoom%26trim_mode "Glossary:Zoom&trim mode") ）

如果您在未终止[缩放和裁剪模式](https://help.supermemo.org/wiki/Glossary:Zoom%26trim_mode "Glossary:Zoom&trim mode")的情况下离开[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，图片将保持缩放状态，原始图片文件将保持不变（即就像您在使用 _Esc_ 终止[缩放和裁剪模式](https://help.supermemo.org/wiki/Glossary:Zoom%26trim_mode "Glossary:Zoom&trim mode")时选择了默认选项一样）。

### 图片处理选项

您可以通过 _Shift+Ctrl+F8_ 快速访问图片处理选项。如果您在 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 中有多张图片，请从点击您想要处理的那一张开始。

[![SuperMemo: Picture processing options available by pressing Shift+Ctrl+F8 (Image : Process from the image component menu)](https://help.supermemo.org/images/thumb/0/0f/Picture_processing_options.jpg/571px-Picture_processing_options.jpg)](https://help.supermemo.org/wiki/File:Picture_processing_options.jpg "SuperMemo: Picture processing options available by pressing Shift+Ctrl+F8 (Image : Process from the image component menu)")

> _**图：** 通过按 Shift+Ctrl+F8 可用的图片处理选项 ( **[图像](https://help.supermemo.org/wiki/Component_menu#Image "Component menu")  : 处理** 来自图像 [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") )_

以下图片处理选项可用：

- **缩放** - 进入[缩放和裁剪模式](https://help.supermemo.org/wiki/Glossary:Zoom%26trim_mode "Glossary:Zoom&trim mode") （您可以通过在图像上_按住 Alt 并点击_更快地进入此模式）
- **缩小** - 将放大的图片缩小，即显示整个原始图片
- **提取** (_Alt+X_) - 将图片的一部分提取到一个新的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 中。SuperMemo (1) 复制 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，(2) 克隆图像，(3) 进入裁剪和缩放模式。这本质上将产生一个 [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") ，就像在 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 中生成 [文本提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 一样。一旦你完成选择或裁剪 [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") ，按 _Esc_，并选择 **永久剪切/裁剪缩放/裁剪后的图像文件** 。如果你不希望原始图片被标记为提取边界，请对 _用 JPG 图像替换图片吗？_ 的提示回答 _**不**_ 。执行 **提取** 后，你将拥有两个 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ：一个是带有提取边界标记的原始图片（如果你不想修改图片，则保持不变），另一个是新的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，包含原始图片的一部分的新图片（见： [示例](https://help.supermemo.org/wiki/Incremental_learning#Example_of_a_picture_extract) ）。
- **裁剪** - 从原始文件中删除图片的不可见部分（即将其大小缩小到放大图片的可见部分）。这将影响所有使用此图片的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 。
- **克隆** - 在图像[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中创建一张图片的副本（这样，裁剪图片或用提取的部分标记它将不会影响在[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中使用相同图片的其他[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ）
- **压缩** - 通过选择新尺寸来减小图片的大小；压缩将生成一个不大于您选择的尺寸的文件。在大多数情况下，您可以将一个 2-5 MB 的图片压缩到 200-500 kB，而不会注意到质量的差异。
- **缩放** - 通过降低图片质量、增加压缩、减少尺寸、修剪边缘等方式来减小图片的大小

## 从大图中提取图片

从较大图片中提取图片片段类似于在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中提取文本片段。它们也可以通过相同的快捷键 _Alt+X_ 来执行。如果满足以下条件，_Alt+X_ 将适用于图片[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") ： (1) 没有选中文本，且 (2) 在[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")中有可用的图片。

当你在一张图片上按下 _Alt+X_ 时， [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 将被复制（与文本 [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 的情况相同），图片将被克隆（即将创建其原始图片的副本），你将进入 [缩放和裁剪模式](https://help.supermemo.org/wiki/Glossary:Zoom%26trim_mode "Glossary:Zoom&trim mode") 。一旦你缩放到图片的某个部分，按 _Esc_ 来裁剪 [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 并返回到原始 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") （从中提取了 [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") ）。SuperMemo 会问你： _用 JPG 图像替换图片吗？_ 请注意，上述步骤与提取文本时的步骤略有不同：你在选择图片片段之前按 _Alt+X_ 并生成一个新的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") **。**

[![SuperMemo: The choice given to the user whether to mark the extracted portion with a bright yellow-red rectangle in the original picture](https://help.supermemo.org/images/thumb/6/67/Replace_picture_with_a_JPG_image.jpg/800px-Replace_picture_with_a_JPG_image.jpg)](https://help.supermemo.org/wiki/File:Replace_picture_with_a_JPG_image.jpg "SuperMemo: The choice given to the user whether to mark the extracted portion with a bright yellow-red rectangle in the original picture")

如果您选择_**是**_ ，原始大图将用明亮的黄红色提取矩形标记（标记已提取的区域）。如果提取矩形重叠，您可能希望回答 _**不**_以确保[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")本身不会被之前的提取边界遮挡；然而，在这种情况下，您需要记住哪些部分的图片已经被提取。这意味着在这些情况下，您需要一个接一个地进行所有的[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") （即在您保持进度新鲜在记忆中时）。

### 图片提取示例

这幅令人惊叹的弗赖堡全景的大图在 SuperMemo 中太大，无法查看细节。因此，您可以提取所有有趣的部分以便独立审阅。在生成一个[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")后，黄色红色边框可以指示图像中哪些部分已经处理过：

[![SuperMemo: The original picture of the Freiburg panorama (too large to view its details) from which 4 picture extracts (marked with bright yellow-red rectangles) have been produced](https://help.supermemo.org/images/thumb/9/94/Freiburg_panorama_%28original%29.jpg/800px-Freiburg_panorama_%28original%29.jpg)](https://help.supermemo.org/wiki/File:Freiburg_panorama_\(original\).jpg "SuperMemo: The original picture of the Freiburg panorama (too large to view its details) from which 4 picture extracts (marked with bright yellow-red rectangles) have been produced")

个别[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")足够小，可以在不缩放的情况下查看细节：

[![SuperMemo: The 2nd extract produced from the original picture of the Freiburg panorama (now small enough to view its details)](https://help.supermemo.org/images/thumb/f/f6/Freiburg_panorama_%28extract%29.jpg/800px-Freiburg_panorama_%28extract%29.jpg)](https://help.supermemo.org/wiki/File:Freiburg_panorama_\(extract\).jpg "SuperMemo: The 2nd extract produced from the original picture of the Freiburg panorama (now small enough to view its details)")

与其提取全景的部分，不如直接放大。然而，如果你只从一幅非常大的图像中提取一小部分图片， [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")将占用更少的磁盘空间，因为你不感兴趣的图像部分将被丢弃。

## 图片填空

要创建图形删除测试（ [遮挡测试](https://help.supermemo.org/wiki/Glossary:Occlusion_test "Glossary:Occlusion test") ），请使用以下方法：

### 多个项目

要一次创建多个[遮挡测试](https://help.supermemo.org/wiki/Glossary:Occlusion_test "Glossary:Occlusion test") ，请执行以下操作：

1. 创建一个包含至少一张图片的模板元素
2. 在[指挥官](https://help.supermemo.org/wiki/Commander "Commander")中输入“Occlusion”（_Ctrl+Enter_）
3. 使用点击和拖动标记遮挡矩形
4. 在底部选择一个遮挡选项（默认是最左侧）

在下图中，底部的四个按钮具有以下功能：

1. 隐藏一个，显示其他（在每个项目中，一个矩形遮挡了图片的一个区域）
2. 显示一个，隐藏其他（在每个项目中，许多矩形遮挡许多区域并显示一个或多个）
3. 清除所有矩形以重新开始
4. 将所有矩形添加到当前元素中，而不创建项目（例如，调整矩形、颜色等）。

查看： [通过遮挡测试学习解剖学](https://www.youtube.com/watch?v=70JFgD4bEk8) （视频）

[![](https://help.supermemo.org/images/thumb/5/5d/Learning_anatomy_with_occlusion_tests_in_SuperMemo_19.jpg/800px-Learning_anatomy_with_occlusion_tests_in_SuperMemo_19.jpg)](https://help.supermemo.org/wiki/File:Learning_anatomy_with_occlusion_tests_in_SuperMemo_19.jpg)

> _**图：** SuperMemo 19 简化了从同一张图片生成多个遮挡测试的过程。在图片中，海马体的结构通过在 **遮挡测试** 对话框中生成的遮挡矩形得以掌握。在背景中，模板项目将在所有生成的测试中重复使用。请参见： [视频](https://www.youtube.com/watch?v=70JFgD4bEk8) 或阅读 [图片的填空](https://help.supermemo.org/wiki/Incremental_learning#Cloze_for_pictures)_

### 增量方法

1. 选择 **添加新项** (_Alt+A_) 来添加一个新的 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")
2. 应用_遮挡_[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") （例如，按 _Ctrl+Shift+M_ 并选择" _遮挡_ "）
3. 粘贴为图形测试准备的图像（例如 _Ctrl+V_）
4. 多次使用 _Ctrl+T_ 选择遮挡矩形
5. 调整矩形的大小，以遮挡出题部分
6. 输入问题（例如：“ _图像的哪个部分被红色矩形覆盖？_”）
7. 输入答案
8. 使用 _Shift+Alt+L_ 来测试您的新 [遮挡测试](https://help.supermemo.org/wiki/Glossary:Occlusion_test "Glossary:Occlusion test")
9. 使用 **[编辑](https://help.supermemo.org/wiki/Element_menu#Edit "Element menu")  : 复制** (_Alt+D_) 在 [元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu") 上生成更多相同图片的测试
10. 请记住，为了获得最佳的缩放效果，您需要保持您的 [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") / [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")**[缩放](https://help.supermemo.org/wiki/Element_menu#Scaled "Element menu")** 和您的图片 **[图像](https://help.supermemo.org/wiki/Component_menu#Image "Component menu")  : 拉伸 : 填充** （没有这两项，调整 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 的大小将会使矩形相对于图像移动并显示答案）

# 增量视频

## 什么是增量视频？

增量视频是一种学习或观看视频录制的技术，旨在形成对所观看材料的持久记忆。增量视频使得可以从多个视频源中学习，而不忽视任何一个源。对各个源的处理是并行进行的，个别源的时间分配取决于学生的优先级。增量视频之于视频，就如同[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")之于从电子文本中学习。在增量视频中，用户决定视频的哪些部分是重要的记忆内容。这些部分是来自 SuperMemo 其他应用程序的标准学习过程的一部分。视频的每个部分形成一个单独的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ，并在逐渐增加的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")中进行复习。尽管处理成千上万的视频，您永远不需要感到迷失、感到无聊或错过宝贵的场景。您还可以将 SuperMemo 用作您的视频或音乐点播机。您可以仅用几秒钟的时间处理单个视频。只需足够的时间来设置新的观看点，确定[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")并确定下次观看的日期。 通过这种方式，您可以每天处理数十个视频，并与成千上万的视频并行工作。您将不再感到被 [YouTube](https://youtube.com/) 的丰富性所压倒！

乍一看，增量视频看起来像是强化版的频道切换。然而，它也是一种强大的学习技巧，使得在不迷失的情况下轻松处理成千上万的视频。它还使得学习单个视频场景以实现长期[记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")变得简单。可以用来学习体育、掌握乐器、理解生物学，或学习你最喜欢电影中的有趣对话。单个视频以小部分进行处理。观看可以在任何时候从上次观看的位置恢复。最佳片段被保留以供重复观看。单个视频按优先级进行排序，并以可管理的部分每天提供。

尽管增量视频可以大致通过一对协同工作的数字视频录制设备来实现，但只有 SuperMemo 提供了完整的增量学习工具集的真正实现。SuperMemo 使得从标准视频文件（例如 MP4）中学习成为可能。它还使得从 [YouTube](https://youtube.com/) 视频中学习变得简单。在撰写这些文字时，世界上没有其他软件提供增量视频学习工具集。

[![SuperMemo: Incremental video in action - Incremental learning about how synapses work based on a video imported from YouTube](https://help.supermemo.org/images/thumb/a/ad/Incremental_video.jpg/800px-Incremental_video.jpg)](https://help.supermemo.org/wiki/File:Incremental_video.jpg "SuperMemo: Incremental video in action - Incremental learning about how synapses work based on a video imported from YouTube")

> _**图** : SuperMemo 中增量视频过程的示例截图。_

### 增量视频与 YouTube

SuperMemo 中的增量视频可以使用 [YouTube](https://youtube.com/) 视频。您可以利用 [YouTube](https://youtube.com/) 的视频流媒体功能，加快 SuperMemo 的速度。您还将显著节省硬盘空间。视频通常占用大量空间，您的 [YouTube](https://youtube.com/) [收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")将只占用基于本地文件的视频所需空间的**极小一部分** 。[YouTube](https://youtube.com/) [收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")实际上占用的空间比[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")还要少，同时具有强大的学习能力。SuperMemo 中的视频**自动去除了广告** 。即使您不打算使用提取内容，它也提供了更流畅的观看体验。最后但同样重要的是，SuperMemo 可能会鼓励您将自己的教育视频上传到 [YouTube](https://youtube.com/)，从而与他人分享。

### 增量视频与视频文件

SuperMemo 中的增量视频可以使用您本地驱动器上的视频文件。您不需要将学习限制在来自 [YouTube](https://youtube.com/) 的那些可能不稳定的视频（例如，因版权违规而关闭的账户、被账户持有者阻止嵌入的视频、设为私密的视频等）。您不受访问互联网的限制。您还可以处理私人视频。

使用增量视频与本地文件需要具有强大处理能力的计算机。在强大的 PC 上，处理视频文件快速且无痛苦。在较弱的 PC 上可能会较慢。您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")可能会增长到数 TB 大，这是保留本地文件的主要缺点。确保您有一个大的专用外部硬盘来备份您的材料。本地视频的时间尺度分辨率高于基于 [YouTube](https://youtube.com/) 的视频，后者仅限于以 1 秒为增量设置**开始**和**停止**点。使用本地文件，您可以回顾持续毫秒的片段。您可以反复回顾您最好的足球动作。此外，使用本地文件，您可以在断网时工作。

增量视频可以使用多种视频格式的本地文件（包括 MP4、WMV、AVI、MOV、Mpeg 等）。并非所有视频格式都受支持。在您决定使用 SuperMemo 之前，请先尝试一下，看看您的文件是否可以被处理或使用第三方工具转换为可接受的格式。

## SuperMemo 中的增量视频

SuperMemo 是**增量视频**的先驱。对于那些熟悉[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的人来说，增量视频是一种类似的技术。与文本[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")不同，您生成的是[视频摘录](https://help.supermemo.org/wiki/Extract "Extract") ，即较大视频的部分。视频[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")会在逐渐增加的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")中反复观看（就像在 SuperMemo 中处理其他信息一样）。

单个视频及其[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")与所有其他[主题元素](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")的处理方式相同，并根据[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中已知的规则进入学习过程。目前，仅支持对[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")的[被动复习](https://help.supermemo.org/wiki/Glossary:Passive_review "Glossary:Passive review") 。在增量视频中没有等同于[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")的功能。然而，如果您选择这样做，可以将视频用作答案。

### 增量视频与 YouTube：大纲

这是您在 SuperMemo 中使用增量视频的方式：

1. 在 Internet Explorer 中打开你最喜欢的 YouTube 视频
2. 选择 YouTube 导入选项将视频导入到 SuperMemo（例如 _Shift+Ctrl+Y_）
3. 使用 **[学习](https://help.supermemo.org/wiki/Learn "Learn")** 来处理单个视频
4. 使用 **开始** 和 **停止** 按钮标记有趣的场景
5. 使用 **提取** 生成新的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，场景从 **开始** 扩展到 **停止**
6. 在 SuperMemo 中使用学习工具来优先排序、安排和组织视频及视频[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")

有关演示，请参见此 YouTube 视频： [与 SuperMemo 17 的增量视频](https://youtu.be/qhkM_ZqfmnI) 。

[![SuperMemo: An extract created from the "Giulio Tonini's 2011 Allen Institute for Brain Science Symposium" YouTube video in the process of incremental video watching](https://help.supermemo.org/images/thumb/7/7b/Incremental_video_with_YouTube_Extract.jpg/800px-Incremental_video_with_YouTube_Extract.jpg)](https://help.supermemo.org/wiki/File:Incremental_video_with_YouTube_Extract.jpg "SuperMemo: An extract created from the \"Giulio Tonini's 2011 Allen Institute for Brain Science Symposium\" YouTube video in the process of incremental video watching")

> _**图：** 摘自“Giulio Tononi 的 2011 年艾伦脑科学研究所研讨会”（ 黄色在[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")中用于区分[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")和母视频）。SuperMemo 将播放原始 [YouTube](https://youtube.com/) 视频中从 10 分钟 59 秒到 11 分钟 18 秒的片段。 **测试**按钮旁边的勾号表示该片段应循环播放。右侧可以看到从 [YouTube](https://youtube.com/) 数据库导入的视频描述。视频描述和[参考文献](https://help.supermemo.org/wiki/References "References") （在图片中不可见，但在使用**[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [网络导入](https://help.supermemo.org/wiki/Web_import "Web import")  : YouTube**（Shift+Ctrl+Y）导入视频时自动生成）从原始视频[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")传播到所有视频[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 。_

#### 从 YouTube 导入视频

要导入用于增量学习的视频，请执行以下操作：

1. 在支持的[网络浏览器](https://help.supermemo.org/wiki/Web_browser "Web browser") （例如 MS Edge）中打开 [YouTube](https://youtube.com/) 视频
2. 选择以下选项之一：
    - 按 _Shift+F8_
    - **导入文章** 在 [学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar") （右键点击 **添加新文章** 按钮）
    - **[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [网页导入](https://help.supermemo.org/wiki/Web_import "Web import")**来自[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")
3. 可选地设置导入选项（例如，导入哪些视频、视频[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 、导入的[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")名称等）。
4. 点击 **导入**

如果您在网页中看到嵌入的视频，请在 [YouTube](https://youtube.com/) 视频上下文菜单中选择**复制视频网址** （右键点击），然后使用 _Ctrl+N_ 将视频粘贴到 SuperMemo 中（就像粘贴任何网页一样）。

如果您收到来自 SuperMemo 的视频转发，您可以从邮件正文中复制其代码，并使用 _Ctrl+N_ 将其粘贴到您的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中（就像粘贴任何文本或文章一样）。

2024年10月或之后的版本支持导入实时视频（在广播期间也可以）。

[![SuperMemo: Importing videos from YouTube for incremental learning](https://help.supermemo.org/images/thumb/f/f9/YouTube_import.jpg/800px-YouTube_import.jpg)](https://help.supermemo.org/wiki/File:YouTube_import.jpg "SuperMemo: Importing videos from YouTube for incremental learning")

> _**图：** 在上面的图片中，有 10 个 [YouTube](https://youtube.com/) 视频，展示了美国生物学家和 1972 年诺贝尔奖获得者[杰拉尔德·艾德尔曼](https://en.wikipedia.org/wiki/Gerald_Edelman) ，这些视频已被选中以便从 MS Edge 自动导入到 SuperMemo 中（以便与[增量视频](https://help.supermemo.org/wiki/Glossary:Incremental_video "Glossary:Incremental video")轻松使用）。7 个视频已被检测为在[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中已导入，并标记为重复（红色 D 图标）。所选视频将作为新添加的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") “网络导入”的[子项](https://help.supermemo.org/wiki/Glossary:Child "Glossary:Child")进行导入。导入视频的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")将在 0.1759-1.2147%的范围内。_

#### 观看 YouTube 视频

使用 **[学习](https://help.supermemo.org/wiki/Learn "Learn")** 的方式与使用 SuperMemo 学习时相同。视频会自动开始播放。当你感到无聊或需要观看其他视频时，按 **开始** 来标记下次观看视频时将从哪个点继续。如果你发现一个重要的片段想要学习或再次观看，请在片段开始时按 **开始** ，在片段结束时按 **停止** 。

##### 提取复习片段

使用 **测试** 再次查看该片段。如果您想创建一个新的片段，并希望它作为一个单独的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 参与学习过程，请按 **提取** 。

您可以在不打断观看过程的情况下生成[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 。只有在您进入下一个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")或按下 _Alt+X_ 时，才会生成提取的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 。

##### 书签

您可以使用 **标记** 和 **恢复** 设置一个书签，这不会影响视频开始的点（例如，在准备一个 [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 时）。

##### 排序视频

如果你一次又一次地看到相同的视频，并且希望获得一些与视频[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")无关的多样性，请使用**[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [排序](https://help.supermemo.org/wiki/Learn_menu#Sorting "Learn menu")  : 排序标准**并增加**随机化** （将滑块从**优先主题**移动到**随机主题** ，即向右移动）。

##### 跳过

您可以按 Left 和 Right arrow 键将视频快退或快进 5 秒。您可以相应地使用其他 [YouTube 快捷键](https://support.google.com/youtube/answer/7631406) 。为此，焦点必须在视频上（如果焦点在控制面板上，请点击视频以重新启用快捷键）。

##### 交叉启发

如果您不确定如何处理增量学习过程， [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")是理解增量视频的一个很好的入门。

#### 将视频片段转发给朋友

如果您通过电子邮件将 SuperMemo 中的 [YouTube](https://youtube.com/) [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")转发给其他人，它将包含视频的链接和开始：停止边界。转发的视频可以在网页浏览器中查看，也可以直接在 SuperMemo 中查看，使用**开始**和**停止**按钮确保仅播放推荐的片段。

您的电子邮件将类似于以下内容：

Please have a look at this YouTube video:
https://www.youtube.com/embed/yVq4ARIlNVg?start=471&end=3150

See the fragment from 7:51 to 52:30.

If you are using SuperMemo, you can also:

(1) select this code (e.g. triple click): 

        {SuperMemoYouTube:yVq4ARIlNVg,7:51,52:30,0:00,3}

(2) copy the code to clipboard (e.g. Ctrl+C)
(3) use Ctrl+N to paste the code to SuperMemo

Sender ID: SuperMemo Research

==================================================
#Subject: #EIE23: Jonathan Haidt: Smartphones vs. Smart Kids - YouTube:
#Author: Jonathan Haidt
#Date: Imported on Dec 28, 2023, 17:29:21
#Source: Edge import from YouTube
#Link: https://youtube.com/watch?v=yVq4ARIlNVg
#Comment: recommended at Ja Nauczyciel
#Collection: YOUTUBE [Element=26660]
#Generated: Dec 28, 2023, Thu, 23:40:20
#Software: SuperMemo 19 (Build 19.03, Dec 20, 2023)

#### 示范性的 YouTube 视频

增量视频是[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的一个视频等价物。然而，有许多你可能希望学习的内容，最好通过视频来掌握，而无法用阅读来替代。这个列表真的是无穷无尽的。不过，这里有一些来自 [YouTube](https://youtube.com/) 的例子，可以让你初步了解为什么增量视频是增量学习的重要组成部分：

- 通过电影、演讲、讲座等帮助学习外语。
- 通过档案录像学习最近的历史
- 探索学生的视频天堂：[Khan Academy](https://www.youtube.com/user/khanacademy)
- 通过专家或最佳艺术家制作的视频教程学习演奏乐器
- 学习伴奏或跟唱你最喜欢的歌曲
- 使用 [Mike Phelps](https://en.wikipedia.org/wiki/Michael_Phelps) 的视频学习如何游蝶泳
- 通过学习物理治疗练习来恢复伤害
- 逐步观看电影
- 听你最喜欢的音乐
- 观看历史体育赛事
- 观看知名大学的视频讲座
- 享受或学习 Leno、Connan、Jon Stewart 等人的最佳笑话或喜剧作品
- 通过观看马丁·路德·金、约翰·F·肯尼迪、罗纳德·里根或巴拉克·奥巴马的视频来掌握演讲技巧
- 从托尼·罗宾斯或其他自助大师那里寻找动力
- 学习烹饪
- 重温你家人和朋友生活中难忘的时刻
- 学习生理学、地质学、物理学或历史，无论何时需要视频解释
- 学习手语、排球、足球等。

### 增量视频与视频文件：大纲

这是您在 SuperMemo 中使用增量视频处理视频文件的方法：

1. 将您的视频文件放入一个空文件夹中
2. 使用 **[文件](https://help.supermemo.org/wiki/File_menu "File menu")  : [导入](https://help.supermemo.org/wiki/File_menu#Import "File menu")  : 文件和文件夹** 将该文件夹的内容导入到 SuperMemo 中
3. 使用 **[学习](https://help.supermemo.org/wiki/Learn "Learn")** 来处理单个视频
4. 使用 **开始** 和 **结束** 按钮标记有趣的场景
5. 使用 **提取** 生成带有标记为 **开始** 和 **结束** 的场景的新 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")
6. 使用 SuperMemo 的学习工具来优先排序、安排和组织视频及视频[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")

[![SuperMemo: An incremental video extract from the 2013 men's singles US Open final between Novak Djokovic and Rafael Nadal](https://help.supermemo.org/images/thumb/0/03/Incremental_video_with_video_file_Extract.jpg/800px-Incremental_video_with_video_file_Extract.jpg)](https://help.supermemo.org/wiki/File:Incremental_video_with_video_file_Extract.jpg "SuperMemo: An incremental video extract from the 2013 men's singles US Open final between Novak Djokovic and Rafael Nadal")

> _**图：** 来自 [2013 年男子单打美国公开赛决赛](https://en.wikipedia.org/wiki/2013_US_Open_%E2%80%93_Men%27s_Singles)的[增量视频](https://help.supermemo.org/wiki/Glossary:Incremental_video "Glossary:Incremental video")[片段](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") ，对阵双方为[诺瓦克·德约科维奇](https://en.wikipedia.org/wiki/Novak_Djokovic)和[拉斐尔·纳达尔](https://en.wikipedia.org/wiki/Rafael_Nadal) （ 黄色背景在[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")中用于区分[片段](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")和母视频）。右侧可以看到视频的导入参数，这些参数理想情况下应转换为注释，以帮助您定位视频并辅助训练（或学习）。在图片中，第三盘第九局，西班牙挑战者在 0-40 落后的情况下，用一个上旋发球防守住了三个连续破发点中的第一个，并在塞尔维亚选手的优秀进攻回球下，用他标志性的直线正手赢得了这一分。_

#### 视频删除

增量视频目前最适合被动处理视频或音频材料，提取出最有趣的部分作为[被动复习](https://help.supermemo.org/wiki/Glossary:Passive_review "Glossary:Passive review")的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 。目前，您无法通过按键“闭合删除”视频或音频文件的部分内容，但您可以轻松地将视频[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")用作文本问题或视频问题的答案。为此，请使用**[答案](https://help.supermemo.org/wiki/Component_menu#Answer "Component menu")**属性标记您的音频或视频[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") 。您还可以定义[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") ，以简化该过程。

#### 观看视频文件和学习

使用**[学习](https://help.supermemo.org/wiki/Learn "Learn")**的方式与使用 SuperMemo 时相同。如果您在[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")中勾选了**[自动播放](https://help.supermemo.org/wiki/Element_menu#AutoPlay "Element menu")** ，视频将自动开始播放。当您感到无聊或需要观看其他视频时，请按**开始** （在**提取器**面板上）。 **开始**标记了您下次观看视频时将从何处恢复。如果您发现一个重要的片段想要学习或再次观看，请在片段开始时按**开始** ，在片段结束时按**结束** 。使用**测试**再次查看该片段。如果您想创建一个新的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，并将提取的片段纳入学习过程中，请按**提取** 。

如果你一次又一次地看到相同的视频，并且希望获得一些变化（即使这些视频可能是最高[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ），请使用**[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [排序](https://help.supermemo.org/wiki/Learn_menu#Sorting "Learn menu")  : 排序标准**并增加**随机化** （将滑块从**优先主题**移动到**随机主题** ）。

如果您不确定如何处理增量学习过程， [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")是理解增量视频的一个很好的入门。

#### 示范视频文件

有关可用于增量学习的示例视频列表，请参见： [示例 YouTube 视频](https://help.supermemo.org/wiki/Incremental_learning#Exemplary_YouTube_videos) 。

请注意，并非所有视频材料都可以通过 [YouTube](https://youtube.com/) 进行学习。可能存在版权或隐私问题。此外，[YouTube](https://youtube.com/) 还有一个令人头疼的问题，可能会破坏任何长期学习过程：视频可能随时被删除（除非您自己上传并完全尊重版权进行公开观看）。最后但同样重要的是，本地文件增量视频的时间分辨率高于 [YouTube](https://youtube.com/) 基础视频。您可以以毫秒精度设置起始点（而 [YouTube](https://youtube.com/) 视频的分辨率为 1 秒）。

可能更适合与您本地硬盘上的文件一起使用的材料包括：

- 可供下载但未在 [YouTube](https://youtube.com/) 上发布的讲座或访谈
- 可供下载的讲座或访谈，您希望保留在本地（例如，为了确保速度、精确性、持久性或离线观看）
- 来自 [iTunes](http://itunes.com/) 的受版权保护的材料
- 电影
- 家庭录像
- 语言课程
- 所有其他您想学习但无法上传到 [YouTube](https://youtube.com/) 的文件（或者您只是想避免麻烦）

## 提示：增量视频

### 提示：与 YouTube 的增量视频

- 定义"_YouTube Extract_" [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")以便用于来自 [YouTube](https://youtube.com/) 视频的[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") （只要您使用"_YouTube_" [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") ）。否则，将使用"_YouTube_" [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") ，背景颜色更改为黄色 。最简单的方法是将您的"_YouTube_" [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")保存为新名称（"_YouTube Extract_"），然后重新定义它（例如，通过更改元素颜色）。区分视频和它们的[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") （例如，通过颜色）对于优化学习过程的策略非常重要。
- 增量视频的增量性不如[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。增量视频的设计假设是，与[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")不同，您是线性地观看视频的主体。这是因为将视频拆分成更小部分并以不可预测的顺序观看时，会出现多重上下文问题。因此，一旦您进行一次[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") ，假设是您不会回到之前观看过的视频部分，因为它已经是[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")的一部分。当您返回处理视频时，您从最后提取或标记为**开始**的位置开始。换句话说，由于您在观看之前不会进行提取，因此对子提取的需求应该很少。
- 检查是否有额外的音轨可用。您可以选择自己喜欢的语言并继续逐步观看。音轨设置在会话之间保持不变。默认设置由您过去的选择决定（它不是在 SuperMemo 中设置的）。

### 提示：使用本地文件的增量视频

- 定义“ _视频提取_ ” [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")以便使用您的[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")进行[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 。否则，将使用“ _视频_ ” [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") ，背景颜色将更改为黄色 。最简单的方法是将您的“ _视频_ ” [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")保存为新名称（“ _视频提取_ ”），然后重新定义它（例如，通过将元素颜色更改为所需的提取颜色）。颜色区分对于优化视频处理策略非常重要。
- 如果您希望您的[提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")在无限循环中运行，请确保在您的视频提取[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")中的[组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu")上勾选**连续**
- 处理大型视频文件的性能损失并不大。您也可以导入整个 DVD 并进行增量处理。
- 并非所有文件格式都受支持，但大多数格式可以轻松转换为 MP4（例如使用 [XMedia Recode](http://www.freewarefiles.com/XMedia-Recode_program_47942.html)）。
- 请注意，某些 MP4 文件在 SuperMemo 中可能无法正常工作。在您做出重大承诺之前，请先测试一下试用版 SuperMemo。

### 基于 YouTube 的增量视频问题

在使用基于 [YouTube](https://youtube.com/) 的增量视频学习时，您可能会遇到的一些问题：

- [YouTube](https://youtube.com/) 视频可以随时被删除。它们也可以禁用嵌入。这对当前在 SuperMemo 中基于 YouTube 的增量视频实现来说是一个主要问题。目前没有 API 工具可以合法地本地化 YouTube 内容（在撰写时）。然而，这个问题主要影响那些在 [YouTube](https://youtube.com/) 上非法出现的受版权保护的材料（例如电影、音乐等）。偶尔，视频作者自己会删除内容。不过，如果您使用自己的视频，这永远不应该是一个问题。希望将来会有越来越多的持久内容被上传用于教育目的。
- _Alt+左箭头_ 快捷键在 Internet Explorer 中用于返回到之前访问的页面。因此，它也像是您 **开始:停止** 设置的撤销功能。要在 SuperMemo 中返回到上一页，请使用 **后退** 按钮 (  [![Back enables you to go back to the most recently visited element](https://help.supermemo.org/images/f/f8/Back.gif)](https://help.supermemo.org/wiki/File:Back.gif "Back enables you to go back to the most recently visited element")) 在 [导航栏](https://help.supermemo.org/wiki/Navigation_bar "Navigation bar") 上。
- 在处理 [YouTube](https://youtube.com/) 视频时，可能会出现网络故障或互联网速度缓慢的情况。因此，您可能更愿意将视频保存在专用的增量视频[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中，以学习如何处理视频，并在网络出现问题时防止学习中断。您可以随时停止使用增量视频[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") ，返回常规学习，并在网络恢复正常功能时继续视频学习。
- 如果您想将 SuperMemo 用作您的 [YouTube](https://youtube.com/) 点唱机，您还应该将音乐视频保存在一个单一的 [收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 中（或为它们全部标记一个特定的关键词以便于快速 [子集学习](https://help.supermemo.org/wiki/Subset_learning "Subset learning") ）。您可以稍后在系统托盘中隐藏您的点唱机 [收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 。您的点唱机将按照您在 [排序标准](https://help.supermemo.org/wiki/Priority_queue#Sorting_repetitions "Priority queue") 中指定的 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 播放单个视频的选定片段。与 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 一样，使用 [间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") 和 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 是防止对某首歌或视频感到厌倦的好方法。
- 如果视频的嵌入被阻止，则无法在 SuperMemo 中播放这些视频（您将看到一条消息_嵌入已根据请求禁用_ ）。这些视频只能在 [YouTube](https://youtube.com/) 上观看。这意味着这些视频在您的增量视频学习中几乎没有用处；然而，您仍然可以使用优先级和调度工具来选择哪些视频应该按什么顺序和在什么时间播放。还要注意，许多视频被不同用户多次上传，您只需搜索可以嵌入的替代视频即可。

### 您自己的增量视频脚本

视频通过使用小型 JavaScript 程序在 [YouTube Player API](https://developers.google.com/youtube/iframe_api_reference) 和 [HTML 组件](https://help.supermemo.org/wiki/HTML_component "HTML component")的帮助下进行处理。当您第一次运行 SuperMemo 时，它会将此脚本写入存储在您安装 SuperMemo 的文件夹的 _[BIN]_ 子文件夹中的文件。该文件的名称为 _YouTube.htm_。如果您了解 JavaScript，您可以在该文件中替换为您自己的增量视频脚本（例如，更改布局、按钮大小，甚至添加处理视频的新功能）。以下是您需要保留的脚本的唯一组件：

- `INPUT` 字段的顺序（这些字段用于 SuperMemo 收集提取边界）
- `SELECT` 和 `OPTION` 字段用于生成 [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")
- `INPUT` 字段，YouTube 视频 ID 被 SuperMemo 替换 (`id="videoid"`)
- `INPUT` 字段用于确定视频的开始和结束位置 (`id="startvideoat"` 和 `id="stopvideoat"`)（必须为 "_0:00:00_"）

您可能希望引入的最重要的变化是决定使用 `version=2` 还是 `version=3` 的播放器。两者都有其缺陷和不足。有关更多信息，请参见 [播放器版本问题](https://supermemopedia.com/wiki/Incremental_video_does_not_work) 。您选择的播放器版本将在您所有的 YouTube [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 中默认使用。

如果您想与他人分享自己的脚本，可以将其上传到 [SuperMemoPedia](https://supermemopedia.com/)。

## 示例

见：

- [使用 SuperMemo 19 的学习历史](https://www.youtube.com/watch?v=4ojhSl2m3bM) (YouTube)
- [如何升级？](https://supermemopedia.com/wiki/Incremental_video._Learning_history_with_YouTube)

# 增量音频

## 增量音频：介绍

增量音频类似于[增量视频](https://help.supermemo.org/wiki/Glossary:Incremental_video "Glossary:Incremental video") 。您可以使用增量视频处理来自 [YouTube](https://youtube.com/) 的音频信息，或者您可以在声音[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")中使用专用提取条导入和处理音频文件（例如 MP3、WMA、WAV 等）。

## 增量音频与音频文件

处理音频文件与处理视频文件是一样的。唯一的区别是您将使用音频[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")而不是视频组件。这些组件将在导入时自动为您创建，使用**[文件](https://help.supermemo.org/wiki/File_menu "File menu")  : [导入](https://help.supermemo.org/wiki/File_menu#Import "File menu")  : 文件和文件夹** （可从[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")中获取）。有关详细信息，请参见： [增量视频与视频文件：大纲](https://help.supermemo.org/wiki/Incremental_learning#Incremental_video_with_video_files:_Outline) 。

## 增量音频与 YouTube

请参阅： [增量视频与 YouTube：大纲](https://help.supermemo.org/wiki/Incremental_learning#Incremental_video_with_YouTube:_Outline) ，了解如何在增量音频过程中使用 [YouTube](https://youtube.com/) 材料。

# 增量邮件处理

## SuperMemo 中的电子邮件：介绍

SuperMemo 使得解决邮件过载变得简单，同时不忽视最重要的沟通渠道。

除了优先考虑和管理沟通，SuperMemo 还帮助您：

1. 将电子邮件沟通纳入您的学习过程（例如，转发和讨论重要的知识点）
2. 将学习融入您的电子邮件沟通中（例如，记住与您的邮件沟通相关的重要事实）

要充分利用 SuperMemo 中的电子邮件功能，您需要 Windows (Live) Mail（或任何其他支持 EML 的电子邮件客户端）或 MS Outlook 2000 或更高版本。至少需要 MAPI 兼容的邮件才能通过邮件发送 SuperMemo [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")或对象。

以下是您在邮件处理过程中使用 SuperMemo 的最重要方式，以及在沟通您的 SuperMemo 工作时使用电子邮件的方法：

1. **邮件优先级** ：为了确保您始终从最重要的邮件开始，您应该使用[优先级队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")来对邮件进行优先级排序。可能您无法回复所有邮件，但您将始终尽力处理最高优先级的消息。
2. **使用增量学习工具处理邮件** ： [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")是一个强大的工具，帮助您优先处理、安排和处理邮件。因此，您可能会决定，与其使用邮件软件，不如使用 SuperMemo 来阅读和回复电子邮件更方便和合理。Windows (Live) Mail 或 MS Outlook 的用户现在可以通过一个按键将所有邮件导入 SuperMemo。如果您收到的邮件超过了您能够有效处理的数量，您可以使用超负荷工具。您将立即处理最重要的邮件，并根据可用时间的比例继续处理其他邮件，按照它们的[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。与学习过程一样，重新安排和排序在后台进行，因此您永远不必为延迟回复或处理过多邮件而失眠。您可以逐步回复较长的邮件。
3. **将学习数据发送给他人** : 如果您在增量学习中（或处理邮件时）遇到有价值的信息，您可以通过单击一下将其发送给同事、朋友、合作伙伴或家人，以便激发灵感或进一步讨论。例如，在阅读一篇关于解码人类基因组的文章时，您可能会发现 [Celera 的克雷格·文特尔](https://en.wikipedia.org/wiki/Craig_Venter)来自一个摩门教家庭，他的父亲最终被逐出教会。您可以通过点击一个按钮将这样的笔记（或整篇文章）从 SuperMemo 发送给您的摩门教朋友。
4. **在增量学习中使用邮件材料** ：您还可以在学习过程中融入邮件片段。您可以将最有价值的电子邮件视为要阅读的文章。如果您收到高度鼓舞人心的信息，您可能希望将其引入增量学习，并记住其部分内容，以确保长期受益。换句话说，您的邮件不仅可以促进行动，还可以用于学习，以保持您的记忆与您关心的事物保持最新。通过这种方式，您还可以从他人发送的材料中学习，特别是当这些材料来自其他人进行的增量学习过程中的小部分提取时。您还可以对处理过的邮件的各个部分进行评论或回复。您可以在阅读时进行，也可以在回顾时当新想法浮现在脑海中时进行。您可以将此过程用于创造力（例如，在不同的背景下回顾一个鼓舞人心的想法或信息）或用于回忆（例如，试图记住您表兄的大学专业）。

## 将学习数据发送给他人

注意：在 Windows 10 中，默认情况下发送电子邮件是无法工作的，即使使用符合 MAPI 的客户端。请[观看此视频](https://www.youtube.com/watch?v=VLe9MjhbmdU)以获取有关如何使 SuperMemo 发送电子邮件的说明（使用注册表字符串：Computer\HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows Messaging Subsystem）。

要通过电子邮件发送一个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，请点击**电子邮件**按钮（  [![SuperMemo: Send a copy of the element (or its part) in an e-mail message](https://help.supermemo.org/images/e/e9/Send_e-mail.png)](https://help.supermemo.org/wiki/File:Send_e-mail.png "SuperMemo: Send a copy of the element (or its part) in an e-mail message")）在[导航栏](https://help.supermemo.org/wiki/Navigation_bar "Navigation bar")上，或按 _Shift+Ctrl+E_。元素文本将作为电子邮件正文发送（如果您希望这样），而格式化文本、图片和其他文件将作为附件发送。您还可以通过在[元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu")上使用**[电子邮件](https://help.supermemo.org/wiki/Element_menu#E-mail "Element menu")  : 文本**或**[电子邮件](https://help.supermemo.org/wiki/Element_menu#E-mail "Element menu")  : 问答**来发送没有附件的文本。

要通过电子邮件发送文章的选定片段，请右键单击选定内容（以打开[组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") ），然后选择**[阅读](https://help.supermemo.org/wiki/Component_menu#Reading "Component menu")  : 电子邮件** （_Shift+Ctrl+E_）。另外，您也可以点击[**阅读**工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar")上的**电子邮件**按钮（  [![SuperMemo: Send a copy of the element (or its part) in an e-mail message](https://help.supermemo.org/images/e/e9/Send_e-mail.png)](https://help.supermemo.org/wiki/File:Send_e-mail.png "SuperMemo: Send a copy of the element (or its part) in an e-mail message")）。 **注意：**SuperMemo 仅发送纯文本邮件，格式化文本只能作为附件发送。

要发送一段 [YouTube](https://youtube.com/) 视频，请用**开始**和**停止**按钮标记该片段，然后点击[导航栏](https://help.supermemo.org/wiki/Navigation_bar "Navigation bar")上的**电子邮件**按钮 (  [![SuperMemo: Send a copy of the element (or its part) in an e-mail message](https://help.supermemo.org/images/e/e9/Send_e-mail.png)](https://help.supermemo.org/wiki/File:Send_e-mail.png "SuperMemo: Send a copy of the element (or its part) in an e-mail message"))。

## 将邮件导入 SuperMemo

### 从 Windows (Live) Mail 导入邮件

要从 Windows (Live) Mail 导入邮件，请按照以下步骤操作：

1. （可选）在您的 Windows（Live）邮件收件箱中预览邮件：
    - 删除垃圾邮件，
    - 处理简短邮件（只需简短回复且不值得归档的邮件），
    - 通过将邮件移动到不同的文件夹（例如 _商务_ 、 _家庭_ 、 _图片_ 、 _学习_ 等）来对邮件进行分类，转发可能需要他人处理的邮件等。
2. （可选）将要在给定的[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中增量处理的邮件移动到专用的导入文件夹。使用顶级导入文件夹，因为 SuperMemo 仅在选择列表中列出顶级文件夹（例如_收件箱_ 、 _已发送项目_ 、 _商务_ ，而不是_收件箱/商务_ ）。嵌套文件夹需要手动选择（使用**更改导入文件夹** ）。
3. 您可以通过以下步骤从任何文件夹导入邮件：
    1. 选择 **[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [导入邮件](https://help.supermemo.org/wiki/Edit_menu#Import_mail "Edit menu")** (_Shift+F4_) 在 [主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu") 上，或从 [学习栏](https://help.supermemo.org/wiki/Learnbar "Learnbar") 的导入上下文菜单中选择 **导入邮件**
    2. （首次导入时）选择 **Windows (Live) Mail** 作为您的邮件应用程序
    3. （首次导入时）选择您想要导入邮件的账户
    4. （首次导入时）SuperMemo 会要求您指定要导入的电子邮件文件夹
        
        [![SuperMemo: A dialog with the list of top level folders to import mail from (displayed when importing mail for the first time)](https://help.supermemo.org/images/b/b3/Folder_selection_at_mail_import.jpg)](https://help.supermemo.org/wiki/File:Folder_selection_at_mail_import.jpg "SuperMemo: A dialog with the list of top level folders to import mail from (displayed when importing mail for the first time)")
        
        > _**图** : 一个对话框，显示用于导入邮件的顶级文件夹列表（在第一次导入邮件时显示）_
        
    5. 按下 **确定** 将会把所有邮件导入到 SuperMemo。电子邮件附件将作为相应类型的单独 [组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") 导入。二进制 [组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component") 将用于导入 SuperMemo 不支持的格式的附件（例如 _PDF_、_URL_、_ZIP_、_MSG_、_MMP_、_XLS_、_DOC_、_MPA_、_WMA_ 等）。之前已导入的邮件将被跳过（只要它位于与之前导入相同的导入文件夹中）。
        
        [![SuperMemo: Progress bar displayed while importing mail](https://help.supermemo.org/images/9/9d/Progress_bar_at_mail_import.jpg)](https://help.supermemo.org/wiki/File:Progress_bar_at_mail_import.jpg "SuperMemo: Progress bar displayed while importing mail")
        
        > _**图** : 导入邮件到 SuperMemo 时显示的进度条_
        

请注意，只有在更改电子邮件客户端或导入文件夹时，您才会重复步骤2-4。

### 从 MS Outlook 导入邮件

要从 MS Outlook 导入邮件，请执行以下操作：

1. （可选）在 Outlook 收件箱中预览邮件
2. （可选）将要在给定的[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中增量处理的邮件移动到专用的导入文件夹。从 Outlook 收件箱直接导入的一个缺点是，在导入过程中可能会有新邮件到达。
3. 您可以通过在[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")上选择**[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [导入邮件](https://help.supermemo.org/wiki/Edit_menu#Import_mail "Edit menu")** （_Shift+F4_）来导入您的收件箱（或任何其他 Outlook 邮件文件夹）的内容。选择**全部导入**将所有邮件导入 SuperMemo，并将其移动到 MS Outlook 中的归档文件夹（见下图）。电子邮件附件将作为相应类型的单独[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")导入。二进制[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")将用于导入 SuperMemo 不支持的格式的附件（例如 _PDF_、_URL_、_ZIP_、_MSG_、_MMP_、_XLS_、_DOC_、_MPA_ 等）。

[![SuperMemo: Import Mail dialog box which you can import your mail from MS Outlook to SuperMemo through](https://help.supermemo.org/images/thumb/7/71/Import_mail.jpg/800px-Import_mail.jpg)](https://help.supermemo.org/wiki/File:Import_mail.jpg "SuperMemo: Import Mail dialog box which you can import your mail from MS Outlook to SuperMemo through")

### 从其他应用程序导入邮件

#### 从文件夹导入邮件

如果您的邮件应用程序将邮件保存在本地磁盘的 EML 格式中，您可以通过指向要导入邮件的文件夹来导入它：

1. 选择 **[编辑](https://help.supermemo.org/wiki/Edit_menu "Edit menu")  : [导入邮件](https://help.supermemo.org/wiki/Edit_menu#Import_mail "Edit menu")** (_Shift+F4_) 从 [主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")
2. 选择 **更改邮件程序** （如果您之前使用了其他方法，请对 SuperMemo 要求的任何确认回答 _**否**_ ）
3. 选择 **其他应用程序**
4. 当 SuperMemo 询问“ _请指向您保存要导入的邮件的文件夹_ ”时，请指向 EML 文件所在的文件夹

#### 通过复制和粘贴导入邮件

如果您不使用 Windows (Live) Mail、MS Outlook 或其他可以导入邮件的合适应用程序，您可以手动导入单个邮件。

要粘贴一段电子邮件以进行[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ，请在电子邮件正文中选择文本，将该文本复制到剪贴板，然后在**[指挥官](https://help.supermemo.org/wiki/SuperMemo_Commander "SuperMemo Commander")**中选择**电子邮件：粘贴** 。

如果您想在逐步阅读原发件人的电子邮件时进行回复，请粘贴电子邮件及其头部信息（日期、回信地址、主题等）。

例如，在 Thunderbird：

1. 点击 **转发** ，
2. 选择消息的整个内容（例如，使用 _Ctrl+A_），
3. 将选定的文本复制到剪贴板（例如，使用 _Ctrl+C_ 或 _Ctrl+Ins_）
4. 切换到 SuperMemo，并在 **[Commander](https://help.supermemo.org/wiki/SuperMemo_Commander "SuperMemo Commander")** 中选择 **电子邮件：粘贴** 。这将自动将您的电子邮件转换为纯文本（以节省空间，移除只读属性等）。它还会为您格式化标题。如果您想保留一些格式，请选择文本并重新粘贴格式化的片段。

#### 从其他应用程序导入

查看： [从其他应用程序导入邮件](https://supermemopedia.com/wiki/Import_e-mail_into_SuperMemo_from_any_application)

## 逐步阅读邮件

您可以在 SuperMemo 中以类似于[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的方式逐步处理电子邮件。

以下是优缺点：

### 优势

1. **重要事实的回忆** ：如果您从他人发送的电子邮件中学习新知识，您可以轻松地将最有价值的内容引入学习过程（通过标准的 **提取** 或 _Alt+X_）。这些内容将像 SuperMemo 中的其他知识一样被复习。如果您决定对某个启发性片段作出回应，当您点击 **电子邮件** 按钮 (  [![SuperMemo: Send a copy of the element (or its part) in an e-mail message](https://help.supermemo.org/images/e/e9/Send_e-mail.png)](https://help.supermemo.org/wiki/File:Send_e-mail.png "SuperMemo: Send a copy of the element (or its part) in an e-mail message")) 在 [导航栏](https://help.supermemo.org/wiki/Navigation_bar "Navigation bar") 上时，发件人地址将自动使用。增量处理将帮助您比使用其他方法更好地记住姓名、上下文、事件和事实。您将不会经历因收件箱过于拥挤而导致的精神混乱。
2. **优先级排序** : 如果您收到的电子邮件材料超过您能够处理的数量，您可以使用增量学习工具来对邮件及其片段进行优先级排序。增量学习的一个最大优势是其独特的系统，能够通过[优先级队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue")有效地确定阅读材料的优先级。请记得礼貌地通知每个人您的电子邮件处理系统。否则，您可能会被轻易指责为_电子邮件黑洞_ 。
3. **处理溢出** ：您可以使用 **[推迟](https://help.supermemo.org/wiki/Postpone "Postpone")** 和其他重新调度工具来解决信息过载的问题，而不损害您选择的优先标准。如果您在团队中工作，委派一些工作是个好主意；然而，并不是所有的工作都可以委派。此外，如果您委派工作，您将无法从您委派的电子邮件中学习。为了解决后一个问题，您可以选择一个折中的解决方案：委派电子邮件工作，并使用增量学习工具处理流入的信息。

### 缺点

1. **碎片化电子邮件** ：有些人不喜欢[碎片化](http://www.dictionary.com/search?q=splinter)的回复。他们更喜欢将电子邮件整体分析并整体回复（最好在一个小时内 :）。作为一种善意的行为，尽量记住人们的偏好，对于那些不喜欢碎片化处理的人，尽量不要过多使用增量电子邮件处理。
2. **增量方法不是传递性的** ：增量电子邮件处理在处理较长的邮件、文章转发等方面显示出最大的优势。对于非常短的电子邮件，增量电子邮件处理在单位时间内提供的价值较低。因为增量邮件处理会导致短暂的沟通爆发，当在沟通渠道的两端使用时，它会削弱自身的力量。然而，即使你用短句进行沟通（即不使用 SuperMemo），也要在你的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中保留邮件记录，以便于[搜索和回顾](https://help.supermemo.org/wiki/Subset_review#Search_and_review "Subset review") 。

## 邮件处理的增量策略

增量学习可以应用于邮件处理。

处理来自家人或朋友的邮件时，策略会有所不同。处理商务邮件时也会有所不同。在通过电子邮件进行[头脑风暴](https://help.supermemo.org/wiki/Incremental_learning#Incremental_brainstorming)时，策略同样会不同，可能效果最佳。

这是一个可以在几乎所有可想象的应用中使用的典范策略：

**复习阶段**

1. （可选）在收件箱中预览邮件：删除垃圾邮件，处理简短邮件（只需简短回复且不值得归档的邮件），通过将邮件移动到不同的文件夹来对邮件进行分类（例如 _商务_ 、 _家庭_ 、 _图片_ 、 _学习_ 、 _音乐_ 等），转发可能由其他人处理的邮件等。
2. 从选定的导入文件夹中导入邮件（例如，使用 _Shift+F4_）。您可以将不同类别的邮件导入到不同的 [集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 中（例如，将商务邮件导入 Mail.kno，而将家庭照片导入 Photos.kno）。
3. 优先处理邮件。使用 **[分配优先级](https://help.supermemo.org/wiki/Subset_operations#spread_priorities "Subset operations")** 为导入的邮件子集分配一系列 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。对最重要的邮件使用 _Alt+P_ 来分配单独的 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。例如，将大部分邮件导入到 3%..6% 的范围内，并选择 5-10 封最重要的邮件以获得更高的优先级。

**处理阶段**

1. 点击 **[学习](https://help.supermemo.org/wiki/Learn "Learn")** ，并使用标准的增量阅读工具（提取、重新优先排序、延迟等）结合电子邮件选项（提取、发送/回复、常见问题解答、文章或图片转发等）处理邮件。只要您使用 [自动排序](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort") 和 [自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone") ，您的工作量应该是合理的，并且您应该始终从最高优先级的邮件开始。如果您勾选了 **[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [排序](https://help.supermemo.org/wiki/Learn_menu#Sorting "Learn menu")  : 自动排序重复** ，您的邮件将在一天开始时按 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 进行排序。如果您勾选了 **[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [推迟](https://help.supermemo.org/wiki/Learn_menu#Postpone "Learn menu")  : 自动推迟** ，今天未处理的所有邮件将被重新分配到未来。
2. （可选）一旦你没有时间，处理一些邮件而不回复，手动重新优先排序和重新安排最重要的内容（而不是让它们自动重新安排）

当然，与[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")一样，您选择在各个阶段推进的时间对于效率至关重要。 **处理阶段**应安排在最佳警觉性和心理表现的时间段内。 **复习阶段**可以在其他时间进行，包括在多任务处理时。这种方法消除了邮件的即时性，但使整个过程更加合理，特别是当邮件量远超可管理范围时。尽管许多邮件会被大幅延迟（甚至可能被忽视），但优先级最高的邮件将会优先处理，紧急性带来的损害将会减少。上述策略可能会导致回复的不可避免延迟，最长可达 4 天（第 1 天到达，第 2 天复习，第 3 天优先排序，第 4 天处理）；然而，在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，优先级和质量始终应优先于速度和紧急性。那些确实无法等待的邮件可以在**复习阶段**处理（如果绝对必要）。

## 邮件处理技巧

1. 为电子邮件处理创建一个单独的[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") （除非您打算将电子邮件工作与标准重复结合起来）
2. 使用 _Shift+F4_ 将邮件导入到您的电子邮件 [收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 中
3. 使用[优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") （_Alt+P_）来优先处理邮件
4. 使用 **[自动排序](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort")** 和 **[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone")** 来自动解决 [过载](https://help.supermemo.org/wiki/Glossary:Overload "Glossary:Overload") 并优先处理邮件
5. 您可以使用 _Ctrl+Shift+R_ 或 _Ctrl+J_ 延迟单个邮件，并使用 _Alt+P_ 更改它们的 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 。在第一次阅读时使用 _Ctrl+Shift+R_ 来确定您想何时回复电子邮件。
6. SuperMemo 从您的电子邮件文本中选择最早的 _[mailto:_ 标签作为默认的回复收件人。如果您想将文章的部分内容发送给某个特定的人，请在文本中的任何位置放置此标签及地址。例如：_[mailto:johndoe@hotmail.com]_（注意标签周围的方括号以及 _mailto:_ 和地址之间没有空格）。您可以通过用分号分隔姓名来指定多个收件人。例如：_[mailto:miko;alex]_，其中 _miko_ 和 _alex_ 必须在您的邮件程序的地址簿中定义（例如 Windows Live Mail 地址簿）。添加 _[mailto:_ 标签在您想要询问多个问题或将单封邮件的多个部分转发给一个地址复杂且未在您的地址簿中定义的单一收件人时非常有用。
7. 可选地，在您的[排序标准](https://help.supermemo.org/wiki/Priority_queue#Sorting_repetitions "Priority queue")中添加一定程度的随机化，以防止在处理时出现“隧道视野”。例如，我们都受到_近期偏见_的影响，最近到达的邮件在优先级上被排得比早到的邮件更高。随机化有助于抵消这种偏见和类似的偏见。
8. 在电子邮件审核过程中（通过**[学习](https://help.supermemo.org/wiki/Learn "Learn")**启动），请执行以下操作：
    - 用**电子邮件**按钮回复最重要的片段 (  [![SuperMemo: Send a copy of the element (or its part) in an e-mail message](https://help.supermemo.org/images/e/e9/Send_e-mail.png)](https://help.supermemo.org/wiki/File:Send_e-mail.png "SuperMemo: Send a copy of the element (or its part) in an e-mail message"))(在[导航栏](https://help.supermemo.org/wiki/Navigation_bar "Navigation bar")上)
    - 使用 **调度提取** （在 [**阅读** 工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar") 上）调度不太重要的片段
    - 通过或删除不重要的片段，或用 **忽略** 标记它们（在 [**阅读** 工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar") 上）
    - 如果在完成阅读之前跳到下一个电子邮件[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，请使用 _Ctrl+F7_（ **设置阅读点** ）选择当前[阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point")
    - 如果在完成阅读之前跳到下一个电子邮件，可以选择使用 _Shift+Ctrl+R_ 设置新的 [间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")
    - 如果邮件可以稍后回复，请使用 _Alt+P_ 来降低其 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")
    - 使用 **下一个重复** 或 **[学习](https://help.supermemo.org/wiki/Learn "Learn")** 继续查看下一封邮件
    - 如果您完成了阅读/处理一封电子邮件，请使用 _Ctrl+D_ [关闭](https://help.supermemo.org/wiki/Glossary:Dismiss "Glossary:Dismiss") 它。如果您不打算归档某封邮件，也可以在 [元素菜单](https://help.supermemo.org/wiki/Element_menu "Element menu") 中使用 **完成** （_Shift+Ctrl+Enter_）。
9. 要更改收件人，请在 _[mailto: ]_ 字段中将新地址粘贴到旧地址的位置。如果您在 **地址簿** 中有该名称，可以使用简短名称（例如 _[mailto:john]_）。不幸的是，您必须将地址粘贴到在 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 中生成的所有分片中。您可以使用 **查找和替换** （_Ctrl+R_）来实现这一目的。
10. 您可以按[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") 、日期等对邮件进行排序。请参见： [您可以按间隔、优先级或其他标准对邮件进行排序](https://help.supermemo.org/wiki/Incremental_learning#You_can_sort_mail_by_interval,_priority_or_other_criteria)
11. 您可以安全地删除 SuperMemo 在发送邮件时添加的文本

### 您可以按间隔、优先级或其他标准对邮件进行排序

您可以使用以下方法按 [间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") 的长度对邮件进行排序：

1. 选择 **[查看](https://help.supermemo.org/wiki/View_menu "View menu")  : [未完成](https://help.supermemo.org/wiki/View_menu#Outstanding "View menu")**
2. 在[浏览器窗口](https://help.supermemo.org/wiki/Browser "Browser")顶部双击 _Intrv_（以从最低到最高[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval")进行排序）
3. 选择 **[工具](https://help.supermemo.org/wiki/Browser_menu#Tools "Browser menu")  : 保存重复** （在 [浏览器菜单](https://help.supermemo.org/wiki/Browser_menu "Browser menu") 上）

您可以在电子邮件处理过程中以与学习过程相同的方式使用此方法。您还可以使用此方法按[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 、最后审查日期等对邮件进行排序。在处理邮件时，使用**[自动排序](https://help.supermemo.org/wiki/Glossary:Auto-sort "Glossary:Auto-sort")**和**[自动推迟](https://help.supermemo.org/wiki/Glossary:Auto-postpone "Glossary:Auto-postpone")**是最方便的。这样，您可以确保最高[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")的邮件被安排在[待处理队列](https://help.supermemo.org/wiki/Glossary:Outstanding_queue "Glossary:Outstanding queue")的最前面。

## 回复常见问题解答

在处理电子邮件时，您可以选择用常见问题解答（即问答对）来回复问题，这样可以将其存储在您的常见问题数据库中。通过常见问题解答进行回复是保留问题上下文的最佳方式，即使您回复的时间延迟较长。

使用 **[阅读](https://help.supermemo.org/wiki/Component_menu#Reading "Component menu")  : 电子邮件常见问题解答** 在 [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") 上，或点击 [**阅读** 工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar") 上的常见问题解答图标。在提供答案后，点击 **确定** 。您可以选择重新措辞问题、改变收件人或问题的标题。您还可以将常见问题解答保存为 HTML 或 Wiki 格式，以便在网上发布。请注意，SuperMemo 常见问题解答是由 SuperMemo 本身生成的。通过这种方式，许多用户可以从单个个体提出的问题的回复中受益。

如果您想发布您的常见问题解答并更改其格式，请修改以下文件：

- **HTML**: _[SuperMemo 文件夹]\bin\FAQ_template.htm_
- **维基** : _[SuperMemo 文件夹]\bin\FAQ_wiki.txt_

如果您希望在常见问题解答中使用丰富的格式，并将其保存到选定的 HTML 文件中，请在**问题**文本区域右上角切换**丰富格式**按钮。您可以通过**问题**和**答案**字段的蓝色边框来识别格式是否已启用。然后，您将能够使用标准键盘快捷键进行基本格式设置（例如，_Ctrl+B_ 使当前选定的文本**加粗** ，_Ctrl+I_ 使选定的文本_斜体_ ，等等）。

|   |   |
|---|---|
|[![](https://help.supermemo.org/images/thumb/1/19/Email_response.jpg/600px-Email_response.jpg)](https://help.supermemo.org/wiki/File:Email_response.jpg)<br><br>**电子邮件回复**对话框现在支持丰富格式的常见问题解答，可以格式化为 HTML...|[![](https://help.supermemo.org/images/thumb/3/32/Email_response2.jpg/600px-Email_response2.jpg)](https://help.supermemo.org/wiki/File:Email_response2.jpg)<br><br>或所见即所得|
|_**图示** : **[阅读](https://help.supermemo.org/wiki/Component_menu#Reading "Component menu")  : 电子邮件常见问题解答** 在 [组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu") 上使得可以将选定的文本用作常见问题解答中的问题。常见问题解答将作为回复发送，并存储在常见问题解答文件中（以 HTML 和/或 Wiki 格式）。_|   |

您可以在 [HTML 组件](https://help.supermemo.org/wiki/HTML_component "HTML component")中编辑您的常见问题解答。使用**水平线**在**[指挥官](https://help.supermemo.org/wiki/SuperMemo_Commander "SuperMemo Commander")**中用[分割线](https://help.supermemo.org/wiki/Glossary:Splitmark "Glossary:Splitmark")将问题与答案分开（您可以在[组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu")中使用**[阅读](https://help.supermemo.org/wiki/Component_menu#Reading "Component menu")  : 分割 : 插入分割线** ，或使用 _Shift+Alt+H_）。一旦常见问题解答基本完成，选择问题和答案，然后从[组件菜单](https://help.supermemo.org/wiki/Component_menu "Component menu")中选择**[阅读](https://help.supermemo.org/wiki/Component_menu#Reading "Component menu")  : 电子邮件常见问题解答**来润色其 HTML，在所见即所得模式中预览，并发送。常见问题解答将作为回复发送，并存储在常见问题解答文件中（作为 HTML 和/或 Wiki）。

# 创造力中的渐进学习

增量学习通过在学习过程中将远程想法以接近的顺序关联起来，促进创造力。这种增量学习的特性可以用于各种需要额外知识或更好回忆来提升的创造性过程。增量学习增强创造力的最有用案例包括：

1. [增量问题解决](https://help.supermemo.org/wiki/Incremental_learning#Incremental_problem_solving) ，
2. [增量写作](https://help.supermemo.org/wiki/Incremental_learning#Incremental_writing) ，和
3. [增量头脑风暴](https://help.supermemo.org/wiki/Incremental_learning#Incremental_brainstorming) .

## 增量问题解决

增量学习可以帮助您解决问题。它对于具有以下特性的各种问题特别有用：

- 需要处理大量信息的问题
- 复杂且涉及丰富思维过程分支的问题
- 工作记忆成为瓶颈的问题

### 示范性问题解决

- 如何解决电脑上的一个恼人的问题？
- 如何摆脱健康问题？
- 如何移居到另一个国家？
- 如何获得博士学位？
- 如何在犯罪中找到罪犯？
- 如何回答科学中的难题？

许多 SuperMemo 中的技术问题和错误已经通过增量问题解决方法得以解决。增量方法最适合处理复杂问题，这些问题具有多条推理路径或需要丰富的新信息输入。SuperMemo 中的一些错误由于其复杂的技术背景或重现问题的困难，特别难以处理。在最严重的情况下，建立一个单独的[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")来处理单个问题是有意义的。该[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")可以随后与更大知识体系（包括问题解决知识）整合。

### 增量问题解决是如何工作的？

增量问题解决的工作原理如下：

- 从所有可用来源收集关于问题的所有信息
- 将您自己的想法和评论写成单独的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")
- 使用增量学习技术处理所有这些信息
- 记录所有需要解决的新想法和新子问题
- 导入所有相关的补充材料，以扩展核心思想

### 增量问题解决的优势

- 始终专注于一个需要进一步测试或收集更多信息的小子问题
- 在交错灵感的丛林中从未错过任何一个想法
- 永远不会淹没在过量的信息中
- 使用随机联想的方式来激发创造力
- 永远不会因为解决问题的进展缓慢而感到沮丧。在增量学习中，总是有进展，这让人感到安心。
- 不受时间限制。离开工作一段时间来思考问题并不是问题，实际上可能会提高产生原创想法或解决方案的机会。这是因为：
    1. 间隔效应，
    2. 遗忘所产生的新奇效应，和
    3. 睡眠中记忆优化的创造力

## 增量写作

### 增量写作：介绍

SuperMemo 可以用于创意写作的过程，这个过程结合了两个步骤：

1. 写作文本和
2. 创意审查和详细阐述。

这两个过程都基于[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。类比于[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ，这个过程被称为_增量写作_ 。

增量写作技术被用于编写一些材料，特别是 [《良好的睡眠，良好的学习，良好的生活 (2012)》](http://super-memory.com/articles/sleep.htm) 和目前的 《增量学习 (2013)》 文章。

传统写作和增量写作之间的主要区别在于，作者可以自由地重新组织材料，并使用[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")工具进行复习。

增量阅读和增量写作之间的主要区别在于，文章的“全局视图”主要是在[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中构建的，而在作者的脑海中则相对较少。这适用于那些信息量大且难以按顺序组织的材料。此外，自己的写作可能是大多数输入的来源，而不是外部电子来源。增量写作也适合于汇编大量先前写作的内容，尤其是那些重复性强、信息丰富且通常联系松散的材料。增量写作对于思路线性发展的文本则不太有用。

增量文章写作是一个开放式的过程，可以在任何阶段中断，以便将文章导出为单个文档进行文本流重写。

使用增量写作撰写的文章可能特别适合[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。它们可以与[维基百科](https://en.wikipedia.org/)相比较。 [众包的](https://en.wikipedia.org/wiki/Crowdsourcing)[维基百科](https://en.wikipedia.org/)由于其增量增长和扎实的本地上下文，是[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的优秀来源。出于完全相同的原因，使用增量写作编写的材料也非常适合[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 。然而，它们可能显得臃肿和重复，然而，通过[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") ，可以以合理的方式对其进行优先排序。增量写作使文本高度细化，思路流畅性较差，然而，在[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")中，这反而是一个优势，因为所有单独的文章和子文章都具有足够的本地上下文，可以独立阅读。

### 增量写作算法

增量写作算法涉及以下步骤。然而，请注意，这些步骤并不是一个接一个地执行的。所有步骤都是增量执行的，并以不可预测的顺序交错进行，以帮助创造过程。文本组件的不可预测关联在以下方面也很有用：

1. 文本逻辑结构的发展，
2. 消除矛盾，和
3. 删除/调和重复的材料。

增量写作的步骤：

1. 将所有相关来源、补充材料和支持知识导入到一个 SuperMemo [集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中
2. 在[集合](https://help.supermemo.org/wiki/Glossary:Root_node "Glossary:Root node")的[根部](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")建立一个具有所需结构的[知识树分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch") （例如，将此分支命名为 _ARTICLE_）
3. 将所有补充材料保存在一个单独的[分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch")中（例如_待办事项_ ）
4. 逐步审查 _ARTICLE_ [分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch") ，重写、改进并重建树结构，以组织一个逻辑完整的整体
5. 添加图表、引用、链接等。
6. 逐步审查_待办事项_[分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch") ，逐步复制和粘贴或移动已处理的文本，从_待办事项_[分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch")到_文章_[分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch") ，在[树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")中。将片段附加到[树](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch")中正确的[分支](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree") 。重新安排和重新优先处理不太相关的文本。删除在最终文章中没有用的文本。
7. 使用增量学习。这意味着您将看到来自 _ARTICLE_ 和 _TO DO_ [分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch")的文章，以不可预测的顺序交错出现，仅受材料[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")的调节。始终处理下一个[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 。尽量少做或尽量多做。您可以一次性完成处理过的[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ，或者您也可以只处理一句话并重新安排。
8. 使用 **[Mercy](https://help.supermemo.org/wiki/Mercy "Mercy")** 以可管理的部分重新分配材料的剩余部分
9. 使用[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template")来直观地指示文章各个部分的状态（例如：“待写”、“待扩展”、“待重写”、“待审阅”、“已完成”等）。
10. [过于庞大的分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch")可以通过与整个文章相同的方式进行处理，包括[子集审查](https://help.supermemo.org/wiki/Subset_review "Subset review") 、 [树形重组](https://help.supermemo.org/wiki/Building_the_knowledge_tree "Building the knowledge tree") 、主题提取和合并等。
11. 一旦工作基本完成，或者截止日期临近，通过 **[导出](https://help.supermemo.org/wiki/Contents_menu#Export "Contents menu")  : 文档** （在 [目录菜单](https://help.supermemo.org/wiki/Contents_menu "Contents menu") 上）导出文章分支，这也会自动添加目录

#### 增量写作示例 #1

让我们以[良好的睡眠、良好的学习、良好的生活 (2012)](http://super-memory.com/articles/sleep.htm) 为例。文章的来源材料包括其[十年前的原版](http://super-memory.com/articles/sleep2000.htm) 、几篇与睡眠相关的文章，这些文章发表在 [super-memory.com](http://super-memory.com/) 上，以及大量来自各种学术来源的基本知识，这些来源涉及睡眠研究。这些材料还补充了作者编纂的一般知识[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中关于睡眠的知识回顾。整个过程从对所有材料的全面审查开始，采用增量学习。文章结构的粗略大纲构建与此并行进行（在[**目录**窗口](https://help.supermemo.org/wiki/Contents "Contents")中）。补充材料被导入以填补或补充个别知识点。图表、注释、链接和文献引用也按照[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")逐步处理。这个过程迅速导致了文章的膨胀，然而，这种膨胀是有价值的信息的膨胀，而不是多余文字的膨胀。 在过程的最后阶段，SuperMemo 中的单个[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")被导入到一个单页维基中。在这一阶段需要进行一些手动的维基化。或者，也可以使用多页维基、博客或纯 HTML 网站作为从 SuperMemo 导出的目标。

#### 增量写作示例 #2

增量学习 (2013) 是从多篇关于 [增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading") 、 [优先队列](https://help.supermemo.org/wiki/Glossary:Priority_queue "Glossary:Priority queue") 、 [增量视频](https://help.supermemo.org/wiki/Glossary:Incremental_video "Glossary:Incremental video") 、 [视觉学习](https://help.supermemo.org/wiki/Glossary:Visual_learning "Glossary:Visual learning") 的旧文章以及一些旧文章如 [吞噬知识](http://super-memory.com/articles/devour.htm) 、[SuperMemo 中的知识流](http://super-memory.com/articles/flow.htm) 、 [常见问题页面](http://super-memory.com/help/faq/) 、[SuperMemopedia](https://supermemopedia.com/) 等编纂而成。

### 增量写作的优势

在 SuperMemo 中，增量写作最明显的优势是：

- 增量方法使人能够更好地专注于手头的任务
- 渐进式方法非常适合解决写作障碍
- 增量方法使得可以从需要解决重复内容的旧文本中编纂新文本（例如，将两个或多个版本的旧文本转换为一个更新的和解文本）。
- [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")可以用来从文本中最重要的部分开始。最终，最低优先级的材料可能永远不会被处理，而是被忽视或推迟到文本的未来版本中。
- 与线性文本相比，使用[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")有助于看到整篇文章的全貌，并组织其逻辑
- 搜索返回章节而不是文本的部分。这帮助您定位包含过于频繁的关键字的文本部分，这在普通搜索中并不实用（例如，在 MS Word 中）。
- [搜索与回顾](https://help.supermemo.org/wiki/Subset_learning#Search_and_review "Subset learning") 非常适合小幅编辑、比较、重新排序、安全搜索与替换等
- **[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [统计](https://help.supermemo.org/wiki/Toolkit_menu#Statistics "Toolkit menu")  : [分析](https://help.supermemo.org/wiki/Analysis "Analysis")  : [使用](https://help.supermemo.org/wiki/Analysis#Use "Analysis")** 图表和 **[工具包](https://help.supermemo.org/wiki/Toolkit_menu "Toolkit menu")  : [日历](https://help.supermemo.org/wiki/Calendar "Calendar")** 可用于绘制写作材料的进度
- [杰出](https://help.supermemo.org/wiki/Glossary:Outstanding_material "Glossary:Outstanding material")[主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic")可以按[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")进行排序，以匹配生物节律（在高警觉时间设置高优先级，在生产力较低的时间设置低优先级）
- **[添加到待办事项](https://help.supermemo.org/wiki/Subset_operations#add_to_outstanding "Subset operations")** （或其他工具）可以用于在一天内需要多次处理一部分文本的情况
- 开放式写作和“无尽的写作”是简单而自然的
- 在 SuperMemo 中写作是有趣的。这不仅比写作更有趣，甚至比传统写作有更高的乐趣！当然，熟练使用 SuperMemo 工具包是体验这种乐趣的必要条件。

#### 写作的乐趣提升效率

当写作的乐趣消失时，作家就可能会遇到写作障碍。与传统方法（例如在文字处理器中写作）相比，SuperMemo 让写作变得有趣。如果你今天对某个主题没有写作的心情，你可能更倾向于尝试其他事情。如果你对任何写作都没有心情，可以先处理一些小的清理工作。往往，一旦你开始写作，就会被这个过程吸引，心情也会随之恢复。一条信息可以激发新的想法。如果这种情况发生在你的写作时间段内，你可以立即写下新的想法。你可以将它们写得粗略和简短。但你需要立即写下来。如果你一直等待，灵感的记忆会逐渐减弱，最终只剩下对某个主题写作的需求！这就是遗忘如何影响你自己的想法！趁热打铁。逐步处理灵感，挑选出在任何时刻最能激发热情的部分。这些部分将产生最多的新创意价值。

#### 创造性爆发与截止日期

过度的创造力和希望包含有价值的信息或想法可能导致写作材料的无止境膨胀和永无止境的写作循环。将所有想法在_待办事项_[分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch")中进行良好的优先排序是至关重要的，而文章则在_文章_[分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch")中独立成长。

将_待办事项_与_文章_分开是最佳解决方案，这使得根据写作目标、机会成本和/或截止日期，可以在任何阶段轻松中断写作过程。留在_待办事项_[分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch")中的内容可以稍后处理或根本不处理。只要严格遵循[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ，主文章的价值损失应当最小化。

### 增量写作的缺点

增量写作在一类非虚构文本中始终优于线性写作，然而，这一工具包难以掌握，策略也并不明显。这是一套新的技术，要求作者具备高度的创新思维。这就是为什么我们目前不期望有任何显著的采用程度。增量写作应主要由已经精通[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")的作者考虑。

## 增量头脑风暴

如果将增量学习与[增量问题解决](https://help.supermemo.org/wiki/Incremental_learning#Incremental_problem_solving)和传统的头脑风暴相结合，您将得到_增量头脑风暴_ 。头脑风暴的部分可以面对面进行，也可以通过电子邮件进行。

增量头脑风暴听起来像是一个矛盾修辞。增量头脑风暴与“风暴”几乎没有关系，但它很好地利用了大脑在知识丰富的肥沃条件下建立创造性联想的能力。增量头脑风暴可能进展缓慢，但它能提供比单纯的面对面头脑风暴更多的成果。最糟糕的结果也会有所不同，而在创造性工作中，这始终是一个可取的互补效果。

在面对面的头脑风暴中，两个或更多的大脑，最好具有不同的优势、专业和偏见，进行快速的思想交流，其中来自大脑 A 的想法 X 可能会激发大脑 B 产生想法 Y 和 Z，而这又可能在其他参与的大脑中引发一系列的创造性灵感。此外，头脑风暴需要一定程度的心理纪律，而这种纪律在与自己（在脑海中，即没有增量学习）进行头脑风暴时可能缺失。将思想转化为语言会减缓思考速度，但会增加纪律性，并可能显著提升创造性成果。

在增量头脑风暴中，这个过程更进一步。增量学习是一种与自己进行头脑风暴的形式，如**[创造力](https://help.supermemo.org/wiki/Incremental_reading#Creativity_boost "Incremental reading")**部分所提到的，然而，它也可以通过电子邮件用于远程头脑风暴。远程增量头脑风暴的主要工具是：

1. 增量学习（用于知识处理），
2. [增量邮件处理](https://help.supermemo.org/wiki/Incremental_mail_processing "Incremental mail processing") （用于处理交流的想法），以及
3. 电子邮件沟通（可以通过实时视频进行补充）。

增量头脑风暴可能进展缓慢，但它增加了一种额外的纪律性，并且有书面交流的档案。最重要的是，它为创意的来源增添了更多的灵感。除了参与的思维，增量头脑风暴还从外部知识来源中获取灵感（非参与作者提供进一步的灵感）。它还借鉴了交流的历史。由于遗忘，增量头脑风暴使得与过去的自己进行头脑风暴成为可能。换句话说，增量头脑风暴的参与者包括：

1. 参与的大脑，
2. 参与大脑的过去版本，以及
3. 过去和现在的不参与作者。

### 增量头脑风暴的优势

增量头脑风暴的主要优点是：

- **更广泛的知识** : 增量学习的参与在扩展所讨论的思想方面大大丰富了创作过程中的知识。这是一种将非参与者的思维纳入其中的方法。
- **[间隔效应](https://help.supermemo.org/wiki/Glossary:Spacing_effect "Glossary:Spacing effect")** : 当头脑风暴的速度减慢时，逐渐消退的记忆痕迹唤起可能的[间隔效应](https://help.supermemo.org/wiki/Glossary:Spacing_effect "Glossary:Spacing effect") ：
    
    1. 提供更好的长期思想巩固，和
    2. 在需要通过新的路径搜索重建衰退信号的情况下，激发新的创造性推理路径。
    
    这对于那些难以解决的问题尤其有价值，因为这些问题可能需要长期记忆的参与及其所有优势（包括问题建模）。
- **昼夜节律同步** : 参与的大脑不需要同步它们的最佳表现时间（例如，在跨不同时区工作时）。
- **睡眠** : 很少有人意识到睡眠在创造力中的重要作用。 [睡眠中的记忆神经优化](http://supermemo.guru/wiki/Neural_optimization_in_sleep) 像一个自动的创造性思维者，独立于意识大脑，尽管它依赖于清醒时发生的创造性过程。 **睡眠是记忆的组织者，可以将头脑风暴的结果转化为新的质量** 。增量头脑风暴的速度较慢，可能持续数周或数月。因此，它在创造过程中利用睡眠机制作为新的自主大脑。睡眠将数据的混乱转化为抽象模型，从而产生更高质量的推理。
- **平衡注意力和创造力** ：在所有创造性追求中，找到创造力和注意力之间的理想平衡对最终成功至关重要。我们的多任务社会在激发创造力方面相当出色，然而，促进创造力的同样因素对注意力产生了破坏性影响。增量头脑风暴帮助你在专注的个人工作和团队集思广益之间找到平衡。你可以在不打断彼此的情况下进行头脑风暴。
- **摆脱对利益巧合的依赖** : 面对面的头脑风暴常常因为参与方的兴趣或动机水平不同而失败。适度地进行面对面交流并增加更多的增量头脑风暴可能是一个简单的解决方案。在这些情况下，大部分工作量可能会转移到一个人的脑海中，同时仍然利用那些参与较少的人的贡献。

### 增量头脑风暴的缺点

增量头脑风暴的主要缺点是其缓慢的速度。显然，在项目截止日期前，它的价值不大。然而，尽管媒体对技术进步的速度给予了很多关注，但最棘手的问题总是通过多代人共同努力的集体智慧来解决。增量头脑风暴在加快新 iPad 型号的开发上可能不太有用，但在慢慢发展或逐步采用像[达尔文](https://en.wikipedia.org/wiki/Charles_Darwin) 、 [孟德尔](https://en.wikipedia.org/wiki/Gregor_Mendel) 、 [维根尔](https://en.wikipedia.org/wiki/Alfred_Wegener)等理论时，它将非常有用。

### 头脑风暴的未来

增量头脑风暴并不是为了取代面对面的互动协作。然而，它应该作为一种丰富的补充。它具备增量学习的所有优点：创造力、专注力、优先级、细致入微、巩固、基于长期记忆的可持续性等等。在取得成果之前，它需要大量的训练。因此，如果解决问题或创造性工作对你的进步至关重要，你可能需要考虑掌握以下技能的逐步提升：经典的 SuperMemo（以提高记忆力）、增量阅读（以处理文本）、增量学习（以进行整体学习）、增量问题解决（以运用知识解决问题），最终达到增量头脑风暴，即将增量学习与经典头脑风暴相结合。

## 用户观点：创造性的阐述

**详细信息检索**

- 我在 SuperMemo 中将我打算写的文章的主要要点输入为一个主题，然后提取它们。
- 当 SuperMemo 向我展示这些片段时，我并不是简化它们（就像你在学习知识时会做的那样），而是对它们进行详细阐述，运用我从 SMIR 中学到的新知识。
- 随着我的知识增长，我的文章也在不断发展，一些原始摘录可以进一步提炼，以便详细阐述各个要点。
- 当我满意时，我可以收集所有详细的摘录（位于子项中）并将其带回到父文章，从而形成一篇完善的文章。
- 问题是我不想让单个片段的间隔增加到200天、300天或更长时间，因为那样我可能永远无法完成写这篇文章。因此，我必须手动调整间隔。

慢速渐进的写作文章（以及可能的其他任何创作活动）方法的优点与常规的 SMIR 相似。但由于创作过程在许多方面与学习过程相反，我认为这个相反的过程可能需要其自身的特点，尽管我不太确定具体是什么 :)

无论如何，这只是供你实验的东西，如果你还没有的话。

-- Georgios Zonnios

您的使用[增量阅读](https://help.supermemo.org/wiki/Incremental_reading "Incremental reading")的方式非常健康且富有创意。这并不完全是“与使用 IR 学习相对立”。这更像是一种创造性的方法来增强您的回忆和理解。很少有事情能像用自己的方式表述他人的想法那样对您的学习产生如此大的贡献。长而复杂的文章通常可以有效地总结为 2-3 个简短的句子，从而对您理解和长期记忆重要知识的贡献更大。有一点仍然不清楚，为什么这个功能应该与 SuperMemo 分开，以及[增量阅读](https://help.supermemo.org/wiki/Incremental_reading "Incremental reading")工具包中缺少哪些工具来增强这个过程。 -- SuperMemo 支持

在以这种风格撰写文章时，我一次又一次得到的结果是一个大型树状结构（在目录窗口中），最重要的信息位于叶子节点（类似于增量阅读的结果）。要将这些信息转化为“文章”，必须逐个访问每个叶子并复制文本，然后返回到原始父节点并按顺序粘贴。因此，我看到需要一个“重组”工具，可以将所有叶子中的信息提取并按照树状结构指定的顺序粘贴到一个单一元素中。 -- Georgios Zonnios

你可以：

1. 在[元素浏览器](https://help.supermemo.org/wiki/Browser "Browser")中打开与给定文章相关的所有[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")
2. 按[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")的顺序对[浏览器](https://help.supermemo.org/wiki/Browser "Browser")的内容进行排序
3. 将浏览器的内容导出为一个单一的 HTML 文档（这应该使最终文章的编辑更加高效）

-- SuperMemo 支持

# 神经创造力

## 使用 SuperMemo 的神经学习

在神经学习（ **学习：走向神经** ）中，SuperMemo 为学生提供与所选主题、文章、图片等相关的知识。知识以神经方式提供，即通过顺序探索在 SuperMemo 中自动或手动构建的信息网络中的语义连接。SuperMemo 受到大脑工作方式的启发。使用 SuperMemo 增强的创造力非常缓慢，但它是有针对性和系统性的。 **神经创造力就像一个缓慢的大脑，扩展了存储在 SuperMemo 中的记忆。** 神经学习在研究、问题解决、创意写作、探索性学习等方面特别有用。换句话说，您可能会发现神经学习在掌握物理课程方面并不特别有用，然而，如果您是一位物理学家，正在解决一个复杂的问题，需要将来自不同物理领域及其他领域的知识进行关联，您会注意到这种学习形式对您的创造性生产力有着极大的影响。

神经学习是引入新类型的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的主要原因： **概念** 。在 SuperMemo 中，概念相当于一个重要的想法，可以与其他元素（包括其他概念）连接。除了概念之间的连接，神经学习还通过[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")探索元素之间的连接。通过概念连接的元素形成**概念图** ，这些概念图与知识树一起，构成了神经学习探索的主要框架。

在接下来的章节中，将逐步介绍神经学习的基本术语和概念： [概念](https://help.supermemo.org/wiki/Incremental_learning#Concepts) 、 [传播激活](https://help.supermemo.org/wiki/Incremental_learning#Spreading_activation) 、 [神经复习](https://help.supermemo.org/wiki/Incremental_learning#Neural_review)等。即使这听起来一开始可能会让人感到不知所措，但请记住，您可以通过一个按键立即开始神经学习：_Ctrl+F2_ ( **进入神经模式** )。接下来的章节仅用于解释神经学习是如何工作的，以及其机制如何影响您的决策，以便使其对您最有效。

如果您对 SuperMemo 并不陌生，并且想跳过细节、术语等内容，可以直接跳转到实际应用： [神经复习](https://help.supermemo.org/wiki/Incremental_learning#Neural_review)

## 概念

在 SuperMemo 中， **概念**是与一个重要思想相关的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 。

一个概念可以作为书签，作为与特定主题相关的[根](https://help.supermemo.org/wiki/Glossary:Root_node "Glossary:Root node") ，作为连接[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")不同部分的中心，或作为创作过程的起点（例如，写文章、解决问题等）。

概念可以与其他[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")链接。基于概念的[链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link")网络将被称为**概念图** 。

[![SuperMemo: An exemplary concept map displaying outgoing links from the current element](https://help.supermemo.org/images/thumb/1/12/Concept_map.jpg/800px-Concept_map.jpg)](https://help.supermemo.org/wiki/File:Concept_map.jpg "SuperMemo: An exemplary concept map displaying outgoing links from the current element")

查看维基百科上的[概念图](https://en.wikipedia.org/wiki/Concept_map) 。

## 概念：基本操作

以下是您在处理[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")时需要的最有用的操作：

- 要将一个 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 转换为一个 [概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") ，请在 [**指挥官**](https://help.supermemo.org/wiki/SuperMemo_Commander "SuperMemo Commander") 中使用 **概念：创建** 。
- 要将内容元素转换为[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") ，请在[**内容**窗口](https://help.supermemo.org/wiki/Contents "Contents")中按 _Ctrl+K_。
- 将一个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")与[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")链接：
    1. 在[**指挥官**](https://help.supermemo.org/wiki/SuperMemo_Commander "SuperMemo Commander")中使用**概念：链接**
    2. 在[概念注册表](https://help.supermemo.org/wiki/Incremental_learning#Concept_registry)中，在左侧成员窗格中，选择概念
    3. 点击 **接受** 在 [注册窗口](https://help.supermemo.org/wiki/Registry_window "Registry window") 底部以创建链接，然后关闭注册表
- 要将一个 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 与另一个元素链接：
    1. 在 [**Commander**](https://help.supermemo.org/wiki/SuperMemo_Commander "SuperMemo Commander") 中使用**链接：目录**
    2. 在[**目录**窗口](https://help.supermemo.org/wiki/Contents "Contents")中，选择元素
    3. 点击窗口底部的 **接受** （或按 _回车_ ）

## 概念：术语

术语 **概念** 在 SuperMemo 17 中主要用于四个上下文：

概念元素

[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")用于构建[概念图](https://help.supermemo.org/wiki/Glossary:Concept_map "Glossary:Concept map")的一部分（例如，一个想法，或来自[维基百科](https://en.wikipedia.org/)的文章等）

概念成员

[成员](https://help.supermemo.org/wiki/Glossary:Registry_member "Glossary:Registry member") 在概念管理中使用的 [概念注册表](https://help.supermemo.org/wiki/Incremental_learning#Concept_registry) （特别是在构建 [概念图](https://help.supermemo.org/wiki/Glossary:Concept_map "Glossary:Concept map") 时的概念搜索使用）

概念组

[分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch")的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")根植于一个[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")中。这类似于旧版 SuperMemo 中所知的[类别](https://help.supermemo.org/wiki/Glossary:Category "Glossary:Category") 。出于性能考虑， [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")在**概念组**中并未与[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")注册。尽管**概念组**在神经创造力中的[扩散激活](https://help.supermemo.org/wiki/Incremental_learning#Spreading_activiation)中被使用，但由[父](https://help.supermemo.org/wiki/Glossary:Parent "Glossary:Parent") - [子](https://help.supermemo.org/wiki/Glossary:Child "Glossary:Child") - [兄弟](https://help.supermemo.org/wiki/Glossary:Sibling "Glossary:Sibling")关系形成的链接被视为仅[承载次要优先级](https://help.supermemo.org/wiki/Incremental_learning#Spreading_activation_algorithm) （与[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") -概念、概念- [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")和元素-元素[链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link")相比，由用户设置的链接）。

概念图

相互关联的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")图，用作[扩散激活](https://help.supermemo.org/wiki/Incremental_learning#Spreading_activation)的骨架。它也可以用于指代其图示表示。

每个[概念元素](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")都有其对应的[概念成员](https://help.supermemo.org/wiki/Glossary:Registry_member "Glossary:Registry member")在[注册表](https://help.supermemo.org/wiki/Incremental_learning#Concept_registry)中。每个[概念组](https://help.supermemo.org/wiki/Glossary:Concept_group "Glossary:Concept group")基于单一的[概念元素](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") 。一些[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") （ [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")和[成员](https://help.supermemo.org/wiki/Glossary:Registry_member "Glossary:Registry member") ）主要是为了扩展[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree") （通过[概念组](https://help.supermemo.org/wiki/Glossary:Concept_group "Glossary:Concept group") ）而创建的。其他[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") （ [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")和[成员](https://help.supermemo.org/wiki/Glossary:Registry_member "Glossary:Registry member") ）主要是为了形成神经学习的[概念图](https://help.supermemo.org/wiki/Glossary:Concept_map "Glossary:Concept map")而创建的。 [概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")可以扮演这两种角色：树工具和概念图工具。

## 概念组

当您使用一个包含不同学科材料的[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")时，您可能希望将不同的学科保存在[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")的不同部分（在[**内容**窗口](https://help.supermemo.org/wiki/Contents "Contents")中）。您可能还希望为与文学相关的项目设计不同的[外观](https://help.supermemo.org/wiki/The_look_of_elements "The look of elements") ，以及为与数学相关的问题设计不同的外观。例如，您可以使用图片来说明您的解剖学[分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch") ，使用声音来说明您的外语部分，使用拼写板来使您的拼写部分效果最佳，等等。

为了帮助您将不同的主题组织在一个[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")中，SuperMemo 使用**概念组** 。概念组可以被视为构建[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")某一部分的工具。一个概念组用于添加与一个主题相关的材料。添加到特定概念组的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")可以使用自己的[模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") ，该模板决定它们的外观（例如，图像、声音、颜色、字体、文本字段的大小、形状[组件](https://help.supermemo.org/wiki/Glossary:Component "Glossary:Component")的数量等）。请参见： [使用模板](https://help.supermemo.org/wiki/Templates "Templates") 。

在较早的 SuperMemo 中，类似于概念组的角色由[类别](https://help.supermemo.org/wiki/Glossary:Category "Glossary:Category")扮演。

## 概念注册表

概念 [注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry") 用于保持已排序的 [概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") 列表。每个概念元素都与一个概念 [注册表成员](https://help.supermemo.org/wiki/Glossary:Registry_member "Glossary:Registry member") 相关联。概念 [注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry") 使得查找 [概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") 变得容易，特别是当你想将一个 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 与特定概念链接时。

在注册表中，每个[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")还显示一组可用于管理[概念组](https://help.supermemo.org/wiki/Glossary:Concept_group "Glossary:Concept group")的属性。

每个概念 [注册成员](https://help.supermemo.org/wiki/Glossary:Registry_member "Glossary:Registry member") 使得可以更改以下属性：

- [根](https://help.supermemo.org/wiki/Glossary:Root_node "Glossary:Root node") - 是所有属于[概念组](https://help.supermemo.org/wiki/Glossary:Concept_group "Glossary:Concept group")的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的[父级](https://help.supermemo.org/wiki/Glossary:Parent "Glossary:Parent")[分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch")
- [钩子](https://help.supermemo.org/wiki/Glossary:Hook_node "Glossary:Hook node") - 新的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 在添加到 [概念组](https://help.supermemo.org/wiki/Glossary:Concept_group "Glossary:Concept group") 时所添加的 [分支](https://help.supermemo.org/wiki/Glossary:Branch "Glossary:Branch") （ **钩子** 是 [根](https://help.supermemo.org/wiki/Glossary:Descendant "Glossary:Descendant") 的 [后代](https://help.supermemo.org/wiki/Glossary:Root_node "Glossary:Root node") ）
- [模板](https://help.supermemo.org/wiki/Glossary:Template "Glossary:Template") - 在[概念组](https://help.supermemo.org/wiki/Glossary:Concept_group "Glossary:Concept group")中使用的模板
- 其他属性（例如，添加到[概念组](https://help.supermemo.org/wiki/Glossary:Concept_group "Glossary:Concept group")的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")的默认[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") ）

从主菜单中选择 **[搜索](https://help.supermemo.org/wiki/Search_menu "Search menu")  : [概念](https://help.supermemo.org/wiki/Search_menu#Concepts "Search menu")** 以打开概念 [注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry") 。

[![SuperMemo: Concept registry which you can use to execute neural review on selected members and change their properties](https://help.supermemo.org/images/thumb/7/71/Concept_registry.jpg/744px-Concept_registry.jpg)](https://help.supermemo.org/wiki/File:Concept_registry.jpg "SuperMemo: Concept registry which you can use to execute neural review on selected members and change their properties")

## 链接注册表

所有的元素链接都存储在一个专用的链接注册表中（可以通过主菜单中的**[搜索](https://help.supermemo.org/wiki/Search_menu "Search menu")  : [链接](https://help.supermemo.org/wiki/Search_menu#Links "Search menu")**访问）。链接注册表在功能上类似于概念注册表。主要区别在于概念相较于链接具有更大的重要性。在创建概念链接时，您可能会经常使用概念注册表。这就是为什么保持其不拥挤并具备良好的可搜索名称标准是重要的。要创建元素链接，您更倾向于使用[**内容**窗口](https://help.supermemo.org/wiki/Contents "Contents") 。只有概念可以用于在分支中对元素进行分组（与概念组一起）。链接无法发挥类似的作用，并且不会出现在可选择的概念组列表中。此外，概念链接在神经复习中的传播激活中具有更大的权重（见[下文](https://help.supermemo.org/wiki/Incremental_learning#Spreading_activation_rules) ）。

## 神经回顾

神经复习是一种[子集复习](https://help.supermemo.org/wiki/Subset_learning "Subset learning") ，它遵循知识片段之间的有意义联系。它受到大脑如何跟随相关想法的启发。神经复习自动化了与选定概念或想法相关的知识复习，例如在问题解决、创意写作等方面。

例如，在对_狗_的神经复习中，有很大机会学习到_小狗_或_贵宾犬_ ，但也有可能学习到_猫_ ，以及学习到_汽车_的机会相对较小。同样，如果你看到一张香蕉植物的图片，对这张图片进行神经复习将帮助你回顾相关元素（例如其他植物的图片，或关于香蕉的文章，或与同一[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")相关的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，如_园艺_ ）。

在 SuperMemo 中， **概念**是一个重要的想法或主题。概念是一种新的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")类型，可以与其他元素链接。基于概念的[链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link")网络将被称为**概念图** 。 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")之间也可以形成[链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link") 。在 SuperMemo 中，知识还通过继承和[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")的结构相互连接。

在神经网络中， [传播激活](https://help.supermemo.org/wiki/Incremental_learning#Spreading_activation)是一种利用网络连接和权重搜索网络的方法。

神经回顾遵循网络中元素间连接的_神经激活传播_ 。SuperMemo 中的所有链接和连接都可以用来模拟知识网络中激活的传播，其中各个[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")充当神经元的角色。

所有用于传播激活的[链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link")根据其重要性接收权重。在 SuperMemo 中，权重由[元素优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")和个别知识关联的优先级决定（例如，概念连接的优先级高于[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")中的兄弟关系）。

在扩散激活中，我们可以根据单个节点的激活时间来排列传播波，这些节点由 SuperMemo [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 形成。这样的序列可以作为增量学习过程中语义复习的基础。

神经复习可以通过在[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")中执行**[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [进入神经模式](https://help.supermemo.org/wiki/Learn_menu#Go_neural "Learn menu")** （_Ctrl+F2_）来启动。

神经回顾带有一定的随机性。因此，它在神经创造力中将想法联系起来时非常有帮助。连接性和随机性是神经回顾背后的主要理由： **神经创造力**和**神经问题解决** 。在这些方法中，我们将创造性过程或问题解决过程与新主题的探索相结合，同时在后台执行增量学习 。换句话说，神经回顾服务于学习，旨在在不完整的人类知识条件下以及与丰富且可能矛盾的计算机存储知识相结合的情况下，立即带来新想法和新解决的问题。神经创造力的一个典型应用是根据症状诊断罕见疾病（见[示例](https://help.supermemo.org/wiki/Incremental_learning#Examples_of_neural_creativity) ）。

我们将使用以下术语：

神经回顾

增量学习 ，遵循概念网络中的激活扩散

神经创造力

基于神经回顾的创作过程（例如，创意写作）

神经问题解决

针对解决特定问题（例如，解决法医案件）的神经创造力过程

## 神经网络评审启动器

你现在可以自己尝试神经学习了。

### 前提条件

您所需的仅是 (1) SuperMemo 17（或更高版本）和 (2) 一个丰富的[收藏](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection") 。小型收藏无法展示神经学习的强大。如果您从一篇文章开始，神经复习只有在您的文章已经被拆分成更小的部分时才有意义。如果这是新导入的文章，您也可以进行[**拆分文章**](https://help.supermemo.org/wiki/Component_menu#split_article "Component menu") ，但是在这种情况下，您的子文章需要是[杰出的](https://help.supermemo.org/wiki/Glossary:Outstanding_element "Glossary:Outstanding element") 。这是因为如果[神经队列](https://help.supermemo.org/wiki/Glossary:Neural_queue "Glossary:Neural queue")中包含在特定日期已被复习/导入/创建的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") ，神经复习就会结束。这意味着对于新拆分的文章，您需要使用[**添加到杰出**](https://help.supermemo.org/wiki/Subset_operations#add_to_outstanding "Subset operations")或等待一天（以便子文章“成熟”以进行复习）。

### 开始

选择以下任意选项：

- 当你看到一个感兴趣的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")时，按 _Ctrl+F2_ 或在**[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [进入神经网络](https://help.supermemo.org/wiki/Learn_menu#Go_neural "Learn menu")的[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")**中选择
- 在[概念注册表](https://help.supermemo.org/wiki/Incremental_learning#Concept_registry)中查看一个[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") ，然后按 _Alt+N_，或者在[注册表菜单](https://help.supermemo.org/wiki/Registry_menu "Registry menu")中选择**转到神经网络** ，或者点击[注册表窗口](https://help.supermemo.org/wiki/Registry_window "Registry window")底部的**神经网络**
- 在任何[注册表](https://help.supermemo.org/wiki/Glossary:Registry "Glossary:Registry")中查看任何[成员](https://help.supermemo.org/wiki/Glossary:Registry_member "Glossary:Registry member") ，然后按 _Alt+N_，或在[注册表菜单](https://help.supermemo.org/wiki/Registry_menu "Registry menu")中选择**转到神经网络** ，或点击[注册表窗口](https://help.supermemo.org/wiki/Registry_window "Registry window")底部的**神经网络**
- 在[浏览器](https://help.supermemo.org/wiki/Browser "Browser")中打开任何[子集](https://help.supermemo.org/wiki/Glossary:Subset "Glossary:Subset") ，然后按 _Ctrl+F2_ 或在[浏览器菜单](https://help.supermemo.org/wiki/Browser_menu "Browser menu")中选择**转到神经网络**

### 审查

在神经复习中，使用按钮 **[学习](https://help.supermemo.org/wiki/Learn "Learn")** ，与正常学习相同。在学习过程中， [**复习**参数](https://help.supermemo.org/wiki/Statistics#Review "Statistics")在 [**统计**窗口](https://help.supermemo.org/wiki/Statistics "Statistics")中显示 _Neuro=[Size]_，其中 _Size_ 是 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 在 [神经队列](https://help.supermemo.org/wiki/Glossary:Neural_queue "Glossary:Neural queue")中的数量。出于实际原因，队列的大小是有限的。在一次复习中，您不太可能超过几百个 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 。此外，在每次 [重复](https://help.supermemo.org/wiki/Glossary:Repetition "Glossary:Repetition") 中，更多的概念网络层被探索，队列在您学习的同时不断扩展。

### 添加到审阅

如果您在神经复习期间选择了另一组元素进行神经复习，您可以选择从头开始或将新的神经复习添加到旧的神经复习中（仅在 2024 年 9 月或之后的 SuperMemo 19 中）。如果您将新的复习添加到旧的复习中，队列将根据元素的优先级混合，并将以与子集总和接受复习时完全相同的方式进行神经分支。

### 停止

要结束复习，请按 _Esc_。 [**复习**字段](https://help.supermemo.org/wiki/Statistics#Review "Statistics") 在 [**统计**窗口](https://help.supermemo.org/wiki/Statistics "Statistics") 中被清除。如果您关闭集合，稍后会询问您是否要恢复中断的神经复习（仅在 2025 年 1 月或更晚的 SuperMemo 19 中）。

### 示例

查看： [这个视频](https://www.youtube.com/watch?v=Ap-AT-f9Xv4)

## 神经学习的成本

如果你担心在 SuperMemo 中构建[概念图](https://help.supermemo.org/wiki/Glossary:Concept_map "Glossary:Concept map")的成本与收益之间的关系，请记住，正确执行的增量学习会以[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")的形式构建处理知识的语义结构。 [父母](https://help.supermemo.org/wiki/Glossary:Parent "Glossary:Parent") 、 [兄弟姐妹](https://help.supermemo.org/wiki/Glossary:Sibling "Glossary:Sibling")和[孩子](https://help.supermemo.org/wiki/Glossary:Child "Glossary:Child")在意义上彼此相关。 [概念图](https://help.supermemo.org/wiki/Glossary:Concept_map "Glossary:Concept map")是神经 SuperMemo 中[扩散激活](https://help.supermemo.org/wiki/Incremental_learning#Spreading_activation)的主要框架，但[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree")也形成了一个良好的树突框架，帮助你利用所有之前在增量学习中的工作。如果你熟悉[思维导图](https://en.wikipedia.org/wiki/Mind_map) ，你会高兴地知道，构建你的[概念图](https://help.supermemo.org/wiki/Glossary:Concept_map "Glossary:Concept map")的成本要低得多。有时，你的创意目的所需的只是两个不同主题之间的概念联系，在那里你期望找到创意联想。要执行你的神经复习或参与神经创意，选择你的[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") 、 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")或[注册成员](https://help.supermemo.org/wiki/Glossary:Registry_member "Glossary:Registry member") （例如，一张图片）并**进行神经操作** 。

[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")和元素间的[链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link")构成了[传播激活](https://help.supermemo.org/wiki/Incremental_learning#Spreading_activation)的主要框架。接下来是[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree") 。如果没有成本，激活实际上可能是无限的。SuperMemo 在一次[重复](https://help.supermemo.org/wiki/Glossary:Repetition "Glossary:Repetition")中或首次构建[神经队列](https://help.supermemo.org/wiki/Glossary:Neural_queue "Glossary:Neural queue")时只进行几层激活。这在快速的个人电脑上只需几毫秒，但在较旧的电脑上可能会拖延到一秒。SuperMemo 在后续的[重复](https://help.supermemo.org/wiki/Glossary:Repetition "Glossary:Repetition")中增加更多的激活层。这些层对于远程联想可能是有用的，但在单次会话中你不太可能超过一层。队列因此成为一个工具，用于帮助你理解激活在网络中的传播方式。

例如，如果您是一名医生，需要为特定患者做出诊断，您可以建立一个诊断[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")并在[概念图](https://help.supermemo.org/wiki/Glossary:Concept_map "Glossary:Concept map")中链接主要嫌疑人。 **去神经化** ，在学习新主题的同时，看看您脑海中会浮现出什么新想法。

## 扩散激活

**扩散激活**是一种用于激活神经网络、语义网络、有向图等中的节点的算法。在 [SuperMemo](https://help.supermemo.org/wiki/Glossary:SuperMemo "Glossary:SuperMemo") 中，图是由 [知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree") 、 [概念链接和元素间链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link") 的语义连接形成的。 **扩散激活**用于为 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 排序，以进行 [神经复习](https://help.supermemo.org/wiki/Glossary:Neural_review "Glossary:Neural review") 。这是一种在 [SuperMemo](https://help.supermemo.org/wiki/Glossary:SuperMemo "Glossary:SuperMemo") 中的新型语义复习，其中新的 [元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element") 以 _神经_ 方式进行复习。这种方法有助于增强创造力和解决问题的能力。要体验一下 [神经复习](https://help.supermemo.org/wiki/Glossary:Neural_review "Glossary:Neural review") ，请从 [主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu") 中选择 **[学习](https://help.supermemo.org/wiki/Learn_menu "Learn menu")  : [进入神经模式](https://help.supermemo.org/wiki/Learn_menu#Go_neural "Learn menu")** （_Ctrl+F2_）。更多信息，请参见维基百科： [扩散激活](https://en.wikipedia.org/wiki/Spreading_activation) 。

### 传播激活规则

SuperMemo 17 中传播激活的一些规则：

- [概念链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link") 具有最高优先级
- [元素链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link") 接收高优先级
- 高[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority")[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")更好地“传导”激活（更有可能通过“信号”）
- [兄弟姐妹](https://help.supermemo.org/wiki/Glossary:Sibling "Glossary:Sibling") 会减缓激活速度（离 [节点](https://help.supermemo.org/wiki/Glossary:Node "Glossary:Node") 越远，传导越慢）
- [儿童](https://help.supermemo.org/wiki/Glossary:Child "Glossary:Child") 优先级很高
- [父节点](https://help.supermemo.org/wiki/Glossary:Parent "Glossary:Parent") 也可以向邻近节点传播激活
- [父母](https://help.supermemo.org/wiki/Glossary:Parent "Glossary:Parent") 是文章的 [根](https://help.supermemo.org/wiki/Glossary:Root_node "Glossary:Root node") ，在低概率下进行（传播激活到邻近文章的机会较小）
- 在单次[重复](https://help.supermemo.org/wiki/Glossary:Repetition "Glossary:Repetition")中仅处理少量激活层（出于性能考虑）

要了解激活是如何从给定的[元素](https://help.supermemo.org/wiki/Glossary:Element "Glossary:Element")传播的，请使用**[查看](https://help.supermemo.org/wiki/View_menu "View menu")  : [神经队列](https://help.supermemo.org/wiki/View_menu#Neural_queue "View menu")** （在[主菜单](https://help.supermemo.org/wiki/Main_menu "Main menu")中）查看与当前元素相关的示例神经序列。请注意，每次创建新队列时，这个序列都会有所不同。传播激活受到“竞争条件”的影响。这意味着神经冲动相互竞争，结果可能每次都不同。 **正如你的大脑有“情绪和模式”，SuperMemo 中的神经复习也是如此！**

### 传播激活算法

神经回顾将按照扩散激活确定的顺序进行。在这种激活中， [概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")的优先级高于[链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link")或[知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree") 。然而，知识树也会参与其中（权重较低）。激活将缓慢扩散到无关的[兄弟文章](https://help.supermemo.org/wiki/Glossary:Sibling "Glossary:Sibling") ，其相对优先级将在缺乏[子项](https://help.supermemo.org/wiki/Glossary:Child "Glossary:Child") 、 [概念链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link")等情况下增加。换句话说，只有小型[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")会使神经回顾变得毫无意义。 [概念图](https://help.supermemo.org/wiki/Glossary:Concept_map "Glossary:Concept map")并不是必需的。

优先级被结合以确定激活的传播：

1. 关联的 [概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") 被添加到队列中，时间为 `CombinePriority(Priority,0.01)`
2. [链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link") 在 `CombinePriority(Priority,0.05)` 添加
3. [后代](https://help.supermemo.org/wiki/Glossary:Descendant "Glossary:Descendant") 在 `CombinePriority(Priority,0.16)`
4. [兄弟姐妹](https://help.supermemo.org/wiki/Glossary:Sibling "Glossary:Sibling") 在 `CombinePriority(Priority,0.26)` （或对于包含完整文章的无关兄弟姐妹最多为 0.5）

该过程以递归方式重复进行，后续层从队列中随机选择，选择的概率更高的优先级

function CombinePriority(OriginalP,GroupP:real):real;
//e.g. element of P=0.2 for a group of P=0.6 should yield (1-0.2)(1-0.6)=0.32
var OP,GP:real;
begin
   OP:=1-OriginalP;
   GP:=1-GroupP;
   Result:=1-OP*GP;
end;

这是2016年2月26日的状态。顺序、优先级和其他参数将在未来发生变化。这一切都取决于用户反馈和现场测试。

## 神经创造力

**神经创造力**是通过神经复习帮助诱发的创造力。在神经复习中，SuperMemo 连续向用户提供与选定主题或选择的主题子集相关的知识。当概念[链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link")的网络连接知识领域时，它们形成可以以神经方式探索的语义空间，这有助于形成新的联想并产生想法。这个过程有利于研究、发明、解决问题等。比喻来说，神经创造力有助于模拟人脑中由 SuperMemo 存储的知识扩展的思维过程。

神经创造力利用增量学习过程以神经方式产生新想法。在神经创造力中，紧密相关的[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")在执行学习主题的神经复习时更有可能出现。如果你精通增量学习 ，你可能会想知道神经复习与[语义复习](https://help.supermemo.org/wiki/Subset_learning#Semantic_review "Subset learning")有什么不同。主要区别在于，在语义复习中，所有的语义处理负担都在你自己手中。你需要了解增量学习的工具，以便很好地执行[语义复习](https://help.supermemo.org/wiki/Subset_learning#Semantic_review "Subset learning") 。在神经复习中，整个过程将简化为在 SuperMemo 中按下一个按钮。

与 SuperMemo 中的语义复习或简单地在谷歌上搜索知识不同，整个知识关联的过程是自动化的。要尝试一下，选择一个主题并**启用神经网络** （_Ctrl+F2_）。

## 增量方法

增量学习可以用来创造性地提出新想法。这引发了一些怀疑。以下是一个典型的怀疑声音：

> _“中断如何对创造力或解决问题有好处？难道不是所有伟大的发现都来自持续、专注的努力吗？那些能够全心投入某个事业的人才能取得最佳成果。大多数人失败是因为他们专注于琐碎的事情。他们做很多事情都是表面化的。他们是万事通，却没有精通任何一项。增量学习似乎是一种试图在所有领域都精通的努力。这就像是给自己太多负担。”_

这个问题在各种情况下不断出现。以下是一个说明性的回答，基于创造力和解决问题是基于在大脑中形成新连接的事实。

**增量回忆：逐步将事物带回记忆中**

想象一下你度过了一个非常充实的一天。例如，访问一个异国城市，见到一位老朋友，或者参加一个突破性的会议。想象一下你的灵感如此丰富，以至于你想写一份详细的日记（假设你没有用 [Google Glass](https://en.wikipedia.org/wiki/Google_Glass) 记录下这一切）。第一件要做的事情是坐下来写报告，并列出所有重建这一天记忆的关键字。一旦你写下大纲，你会很快注意到，想要回忆起新的记忆并不需要太长时间。你无法回忆起更多的细节。这是正常的。坐在一张空白的纸上一个小时可能不是你时间的最佳利用。这可能相当低效。然而，如果你随时保持那张纸在手边，你可能会注意到，随着不同情境中记忆的不断涌现，它会不断填满新的记忆。一幅图像、一种气味，或一篇正在发表的文章都可能促成意想不到的回忆。如果你恰好在此期间执行增量学习 ，你会发现回忆的过程会被强化。 如果你的学习材料丰富，你很可能在一天内阅读数十个无关的主题。所有这些主题都会产生新的联想。你的空白纸张将比在普通生活中或如果你的学习不那么多样化时填满得更快。您在这里看到的是增量回忆。

从增量回忆到增量创造只有一步之遥。两者都是基于在你脑海中逐步构建心理结构。在回忆的情况下，你将恢复过去的记忆。在创造的情况下，你还将额外添加

1. 通过增量学习获得的新知识（例如神经复习），以及
2. 新的记忆和/或你之前没有经历过或想到的想法。

最后，在解决问题时，您将把这一创造性过程引导向完成特定任务：解决问题、回答问题等。

## 神经创造力的例子

SuperMemo 中的神经工具为用户提供了一种慢动作的爱因斯坦大脑。您可以构建一个您想要的知识大脑。您可以将您的思想网络构建得尽可能复杂。然后，您只需按下一个按钮，就可以以自己的节奏开始一连串的思考，同时观看所有新想法在您眼前形成。以下是 SuperMemo 中神经方法的一些示例：

### 医学诊断

医生和医学生总是需要处理大量新的健康相关知识。关心健康的所有人也是如此。解决一个特定问题，例如医学诊断，可能也是获取新知识的一个好借口。例如，如果患者出现皮肤病症，可能会创建一个专门的[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept") （例如_患者约翰·多伊的病情_ ）。然后可以与相关知识领域建立[概念链接](https://help.supermemo.org/wiki/Glossary:Link "Glossary:Link") ，例如皮肤病、过敏、细菌性皮肤感染、真菌病等。神经复习将为探索新领域提供新的灵感。一石二鸟：

1. 为未来使用而获得的新知识，和
2. 聚焦于最终诊断。

### 解决软件问题

神经回顾已经在解决困扰 SuperMemo 用户的问题上发挥了作用（例如，由于 Internet Explorer 中的错误导致的[错位填空删除](http://supermemopedia.com/wiki/Cloze_deletions_get_shifted_by_one_character) ）。当一个恼人的问题出现时，所有相关知识可以与定义该问题的[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")关联起来（例如， _填空错误_ ）。

在“填空错误”的情况下，几位用户提出了他们可能解决问题的想法。没有一个有效。最终，所有与 [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) 相关的想法都被证明是死胡同。然而，启动神经复习提供了最终的激励，带来了隧道尽头的希望。这个问题能在没有神经复习的情况下解决吗？可以。也许，神经复习帮助我们跳出框框寻找解决方案？如果没有，它至少可能产生了心理效应：_“如果没有任何方法有效，也许神经复习会有效？”_

### 创意写作

[增量写作](https://help.supermemo.org/wiki/Creativity_and_problem_solving_in_SuperMemo#Incremental_writing "Creativity and problem solving in SuperMemo")在你想将多个文本汇编成一个更大作品时非常有用。如果你想将该过程与一定程度的研究结合起来，神经方法可能会很有帮助。你可能想要研究一个主题（例如，在寻找与您的论文相关的事实或文献时），或者研究自己的文本，如果它们过于庞大且高度重复（例如，寻找更简单的措辞、更合逻辑的顺序、更清晰的思路等）。

### 法医学

法医学是神经方法可能显得有用的一个优秀例子。一个复杂的案件可能涉及大量特定于案件的知识，这些知识需要与科学和一般知识相结合。在知识的规模远远超出人类记忆的容量，并且解决方案可能需要“跳出框框”思考的情况下，神经方法可以作为人类思维的延伸。一旦案件解决，案件无关的知识可以与主要学习[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")整合，以确保对知识的长期投资。

## 另见

- [神经回顾（视频）](https://www.youtube.com/watch?v=Ap-AT-f9Xv4)
- [SuperMemo 博客：神经创造力](https://www.supermemo.com/en/blog/how-to-improve-creativity-with-SuperMemo)

# 增量学习的神话

SuperMemo 一直不得不与减缓其普及的神话作斗争。防止神话的重新出现似乎是一场没有尽头的战斗。关于 SuperMemo 的知识已经增长到相当大的规模。并不是所有用户都能负担得起阅读几十篇文章。许多用户注定会独立于他人得出相同的错误结论。这些神话中的一些根植于记忆的一般神话。其他一些似乎源于对学习的常识性思考。以下是与间隔重复、SuperMemo 和增量学习相关的一些最具破坏性的神话。

### 神话：许多人在没有使用 SuperMemo 的情况下取得成功，因此它的重要性是次要的

**神话：许多人在没有使用 SuperMemo 的情况下取得成功，因此它的重要性是次要的** 。  
**事实** : 无论是 [达尔文](https://en.wikipedia.org/wiki/Charles_Darwin) 还是 [牛顿](https://en.wikipedia.org/wiki/Issac_Newton) 都没有接触过计算机，但计算机文盲可能会使今天的科学家完全无能。同样，随着知识的重要性日益增长，忽视更广泛和稳定知识的竞争优势将越来越限制你在科学、工程、医学、政治等领域成功的机会。你可以在没有 SuperMemo 的情况下生活，但它绝对可以将你的学习提升到一个新水平。

### 神话：自然机制选择重要记忆的能力足够好。我们不需要拐杖。

**神话：自然机制选择重要记忆的能力足够好。我们不需要拐杖** 。进化产生了一种有效的遗忘机制，使我们的记忆摆脱了占用空间的、或许是无关的垃圾。这个机制被证明足够有效，以建立惊人的人类文明。因此，许多人认为几乎没有改进的空间。  
**事实** : 遗忘机制是从我们的愿望和决策中抽象出来的。它只保留那些使用频率足够高的记忆。如今，我们足够聪明，可以自己决定哪些知识是重要的，哪些不是。查阅字典有时可能花费的时间超过在 SuperMemo 中刷新同一个单词的时间成本。这只是最不引人注目的例子。人类历史上充满了由于无知而导致的重大错误。NASA 对英制和公制单位的混淆导致了一次火星探测器的失落。Fortran 中将逗号与点混淆，导致了一次金星探测器的损失。英语交流中的错误造成了许多空中和海上的灾难。外科医生脑中的一条知识可能关系到他患者的生命。遗忘太过危险，不能将关键任务知识留给大脑自行处理。SuperMemo 让你掌控主动权。你可以决定记住什么和遗忘什么。更多内容请见： [记忆并不是必需的](https://help.supermemo.org/wiki/Incremental_learning#Myth:_Memorization_is_not_needed)和[记忆具有出色的保留重要信息的能力](https://help.supermemo.org/wiki/Incremental_learning#Myth:_We_are_good_at_remembering_important_things)

### 神话：我们无法通过训练来改善记忆

**神话：我们无法通过训练来改善记忆** 。无限记忆是一个流行的乐观主义者的神话。悲观主义者的神话是我们无法通过训练来改善记忆。甚至[威廉·詹姆斯](https://en.wikipedia.org/wiki/William_James)在他那本杰出的书籍 _[《心理学原理（1890）》](http://psychclassics.yorku.ca/James/Principles/)_ 中也坚定地写道，记忆不会改变，除非变得更糟（例如，因衰老或疾病）。  
**事实** : 如果从非常低的突触水平来看，记忆确实相当难以改善。它在健康生活的过程中似乎变化不大。它在整个人类群体中也表现出非常相似的特性。在最基本的层面上，低智商个体的突触与天才的突触一样具有可训练性。它们与软体动物 _Aplysia_ 或果蝇 _Drosophila_ 的突触也没有太大区别。然而，记忆和学习不仅仅是单一的突触。差学生与天才之间的主要区别在于他们表示信息以进行学习的能力。天才能够迅速拆解信息并形成简单的模型，使思考变得容易。现实的简单模型有助于理解、处理和记忆。 [威廉·詹姆斯](https://en.wikipedia.org/wiki/William_James)未提到的是，为期一周的[记忆技巧](https://en.wikipedia.org/wiki/Mnemonic_techniques)课程显著提高了许多人的学习能力。他们的分子或突触记忆可能没有改善。改善的是他们处理知识的能力。因此，他们能够记住更多的内容，并且记忆时间更长。学习是一个自我加速和自我增强的过程。 因此，它常常会带来奇迹般的结果。

### 神话：SuperMemo 的重复练习花费太多时间，得不偿失

**神话：SuperMemo 的重复练习花费太多时间，得不偿失** 。许多用户在不断增加的重复练习负担中挣扎，可能会得出这样的结论：付出的努力不值得。  
**事实** : 每天仅记住 3 个精心挑选的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") ，可能比记住一百个塞满的事实效果更好。这意味着每天哪怕只有一分钟的时间，只要你专注于所学的内容，就会产生巨大的差异。并不是所有的知识都值得付出 99%的[保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")努力。高[保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")应仅保留给关键任务的事实和规则。最后但同样重要的是： [知识形成技能](http://super-memory.com/articles/20rules.htm)可以大幅缩短初学者的学习时间。更多内容请见： [高保留导致慢学习](https://help.supermemo.org/wiki/Incremental_learning#Myth:_High_retention_results_in_slow_learning)

### 神话：随着你在 SuperMemo 中添加更多材料，你的重复负担会增加到无法管理的程度

**神话：随着您向 SuperMemo 添加更多材料，您的重复负担会增加到无法管理的程度** 。没有任何添加到 SuperMemo 的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")被视为“永久记忆”。因此，所有[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")迟早都需要复习。因此，重复的成本必然会增加。  
**事实** : 大量的 [杰出重复](https://help.supermemo.org/wiki/Glossary:Outstanding_element "Glossary:Outstanding element") 确实是 SuperMemo 辍学的主要借口。然而，计算机模拟和现实生活中的测量显示，在保持每日学习时间不变的情况下，新的知识获取在时间上并没有明显减缓，除了最初的几个月。换句话说，从长期来看，新的知识获取是 [几乎线性的](http://super-memory.com/articles/theory.htm#Figure+1) 。较旧的 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 被重复的频率越来越低，为新材料腾出了空间。这种“衰退”的指数特性解释了为什么我们可以在几十年内持续大量引入新材料。

### 神话：人们在学习速度上存在差异，但他们遗忘的速度却是相同的

**神话：人们在学习速度上有所不同，但他们遗忘的速度却是相同的** 。  
**事实** : 尽管存在可能影响遗忘率的突变，但在突触层面上，遗忘的速度基本上是相同的（与您的聪明程度无关）。然而，使人们学习更快的因素也有助于他们更慢地遗忘。学习和缓慢遗忘的关键在于表征（即知识的表达方式）。如果您使用 [SuperMemo](https://help.supermemo.org/wiki/SuperMemo "SuperMemo") 学习，您会知道 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 可能非常困难或非常简单。困难的项目遗忘得更快，并且在重复之间需要更短的 [间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") 。使 [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 变得简单的关键在于 [良好的表述](http://super-memory.com/articles/20rules.htm) 。此外，优秀的学生在完全相同的材料上表现更好。这是因为知识表述的最终测试不在于它在学习材料中的结构，而在于它在您脑海中的存储方式。通过大量的学习努力，您将逐渐改善吸收和表征知识的方式。 最快的学生是能够本能地通过提供最少信息和最大连接性的图像在脑海中可视化和存储知识的人。

### 神话：超文本可以替代记忆

**神话：超文本可以替代记忆** 。令人惊讶的是，社会上有相当大比例的人对记忆持蔑视态度。术语“ _死记硬背_ ”、“ _背诵排练_ ”、“ _无脑重复_ ”被用来将任何形式的记忆或重复标记为不聪明。看到“ _大局_ ”、“ _推理_ ”并将记忆的工作留给外部超文本来源被认为是可行的替代方案。  
**事实** : 存储在人类记忆中的知识本质上是关联性的。换句话说，我们能够突然将两个已知的想法结合起来，产生一种新的品质：发明。超文本引用无法替代关联记忆。存储在人类记忆中的两个事实可以瞬间结合，带来一个新想法。而存储在互联网上的相同事实，直到它们在创造性思维中被拼凑在一起之前，仍然是无用的。一个知识丰富的头脑在遇到新信息时，可以产生丰富的联想。一个空洞的头脑就像一个幼儿在寻找解决方案时获得了互联网的力量一样无用。生物神经网络的工作方式是，知识只有在被刷新/复习时才能保留在记忆中。因此，学习和重复对于人类的进步仍然至关重要。这段幽默的文字解释了记忆的重要性： [这不仅仅是记忆](http://super-memory.com/articles/users/memorizing.htm)

### 神话：我们不需要 SuperMemo，我们所需要的只是建立一个知识来源的索引

**神话：我们不需要 SuperMemo，我们所需要的只是建立一个知识来源的索引** 。随着多个在线知识来源的出现，一些人倾向于相信我们所要学习的只是这些外部知识来源的一种索引。  
**事实** : 即使是“知识索引”也会受到遗忘的影响，需要通过重复或复习来维护。所有的创造性天才都需要知识来形成新概念。这种知识的程度会有所不同，但创造性的产出确实依赖于知识的量、其联想性质和抽象性（即在构建模型中的相关性）。

#### 知识索引

" [记忆并不是必需的](https://help.supermemo.org/wiki/Incremental_learning#Myth:_Memorization_is_not_needed) "神话的一个不那么极端的版本是“我们只需要记住知识的索引”。抽象知识和一般概念确实是最有用的。然而，这种类型的知识也会被遗忘。此外，并非所有知识都是推理性的。要推理关于[南极洲](https://en.wikipedia.org/wiki/Antarctica)的事情，我们通常需要知道它是寒冷的。我们可能会从[南极洲](https://en.wikipedia.org/wiki/Antarctica)在地图上的位置推导出温度的结论，但我们需要地图的知识、气候的知识以及地球相对于太阳的位置的知识。任何孩子都会承认，记住[南极洲](https://en.wikipedia.org/wiki/Antarctica)是白色和寒冷的更简单。在这种情况下，规则更有用，但事实更容易记住。

一个_普通人_通常会意识到，甜甜圈是应该被那些害怕心脏病的人尽量避免的食物。事实是“ _甜甜圈对心脏不好_ ”有助于一个普通人对健康的了解。这个事实可能不需要 SuperMemo。毕竟，我们大多数人在看到美味的甜甜圈时都会刷新关于甜甜圈和心脏的知识。 _甜甜圈事实_也有助于我们的_知识索引_ 。只需跳到 Google 并输入 _+doughnut +heart_，就可以很好地利用我们索引中的这一特定条目。搜索将帮助我们恢复更多关于甜甜圈与心脏之间的_关系_的知识。

如果我们想增强对甜甜圈和心脏的思考和推断能力，我们可以尝试记住以下几点：

1. **事实 1**: _甜甜圈含有高量的反式脂肪酸_
2. **规则 1**: _食品中的反式脂肪酸倾向于降低 [高密度脂蛋白](https://en.wikipedia.org/wiki/High-density_lipoprotein) (HDLs)_
3. **规则 2**: _低水平的 [高密度脂蛋白](https://en.wikipedia.org/wiki/High-density_lipoprotein) 是心血管疾病（例如动脉硬化）的主要风险因素_

了解上述事实和规则是有好处的：当我们发现_薯条含有高量的反式脂肪酸_时，我们将能够利用**规则 1** 和**规则 2** 推导出一个新事实： _薯条对心脏不好_ 。对上述规则的意识将增强我们的推理能力。在知识工程的术语中，我们将能够从现有的事实和规则中推导出新的事实和规则。用通俗的话来说，我们将知道的比我们实际学到的更多。我们将能够得出更多的结论。我们将变得_更聪明_ （如果智力被定义为[人类思维的推理能力](http://super-memory.com/articles/genius.htm) ）。

然而，记住_反式脂肪规则_也有一个缺点。它们不像_甜甜圈事实_那样简单，并且在看到甜甜圈时可能无法有效地被刷新。因此，我们可能会简单地忘记_甜甜圈_ 、 _反式脂肪_和_心脏_之间的联系。这就是 SuperMemo 发挥作用的地方。它将帮助你刷新_反式脂肪规则_ 。它将最小化一生中的复习次数。换句话说，它将帮助你将_反式脂肪规则_保留在你健忘的记忆中。因此，SuperMemo 确保你的" _知识索引_ "在你脑海中保持完整。

### 神话：在增量阅读中，你只需花几秒钟阅读一个主题

**神话：在增量阅读中，你只需花几秒钟阅读一个主题** 。  
**事实** : 投入到一个 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 的时间取决于你的需求。可能只需几秒钟（例如，对于一个低优先级的无聊主题），也可能需要整整一天（例如，在考试前、进行研究时，或仅仅是在追随自己的热情时）。

### 神话：记忆是不必要的

**神话：记忆是不必要的** 。  
**事实** : 如果所有学生都遵循“记忆是不必要的”这一建议，我们将生活在一个不同的世界。以下是对这个世界可能样子的幽默看法。

- 如果不需要记忆，我们可以在不学习语言的情况下环游世界。毕竟，在字典中查找单词只需几秒钟。
- 如果不需要记忆，医学学生就不需要死记人类解剖学和生理学的细节。相反，他们会学习使用内置所有答案的最先进专家系统。如果你问：“医生，怎么了？”你会听到：“我不知道，但等一下……我会在我的电脑上查一下。”
- 如果不需要记忆，所有考试如 SAT、GRE、TOEFL、FCE、GCSE、USMLE 等将是人类时间和资源的巨大浪费。学生们应该带着他们的网络链接参加考试，临时找出答案。或者他们可以直接从教科书中朗读相关段落。
- 如果不需要记忆，那么没人应该嘲笑乔治·布什 Jr. 对车臣、台湾或巴基斯坦国家元首的无知。毕竟，他可以在几秒钟内在智能手机上找到这些名字。如果允许使用外部存储，那么没人应该责怪乔治·W·布什把斯洛伐克和斯洛文尼亚搞混，或者称科索沃人为科索沃人，东帝汶人称为东帝汶人，或者把希腊人称为希腊人（注意：[_Grecians_ 这个词也被认为是正确的](http://www.dictionary.com/search?q=grecian) ）
- 如果不需要记忆，你明天就可以成为 NASA 的火箭科学家！毕竟，火箭科学家遵循的是在众所周知的手册中以非常知名的方式编写的著名规则。如果你需要为伽利略绘制轨迹，以便将欧罗巴的图像传回地球……没问题……拿起《 _高级微积分_ 》教科书，算出来，然后让你的十亿美元任务走上正轨。

将知识保存在脑海中与将其保存在外部来源相比，其优势可以比喻为从小学到中学再到大学教育的优势，而不是参加为期一周的课程来学习如何从外部来源获取信息。几乎所有的父母似乎都更倾向于为他们的孩子选择前者。

### 神话：高保留率导致学习缓慢

**神话：高保留率导致学习缓慢** 。  
**事实** ：你需要理解学习的两个极端之间的明确区别：

- **高保留低容量学习** （如早期版本的 SuperMemo） - 在这种学习中，您确保记住 95％或更多的学习材料
- **低保留高容量学习** （如传统学习形式） - 在这种学习中，你快速处理大量材料，同时不得不与大量遗忘作斗争

阅读书籍属于低保留类别，而使用 SuperMemo 每天记忆 10-20 个[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")属于高保留类别。最佳的阅读策略将在这两者之间找到平衡。你不应该放弃传统阅读，也不应该期望将所有学习材料都放入 SuperMemo。你应该选择一种中间策略。例如，如果你始终将 90%的时间用于阅读，10%的时间用于将**最重要**的发现添加到 SuperMemo，你的阅读速度实际上只会下降约 10%，而最重要内容的[保留](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")率将达到 SuperMemo 中编程的水平（即通常为 95%）。

[增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading)为您提供了一种精确的工具，以找到速度与[记忆](https://help.supermemo.org/wiki/Glossary:Retention "Glossary:Retention")之间的最佳平衡。您将确保对最重要的文本片段保持高记忆率，同时大部分时间将以与传统书籍阅读相当或更高的速度进行阅读。

值得注意的是，在高保留学习中，学习速度的限制是由你的记忆所决定的。如果“每年记住一本书”听起来像是一个重大失望，这种情况的根源在于人类记忆。我们目前对心理生理学和药理学的知识并没有提供任何手段来突破这些限制。我们只能在高速和高保留之间做出选择。增量阅读让你完全掌控找到最佳平衡。

### 神话：我们擅长记住重要的事情

**神话：我们擅长记住重要的事情** 。  
**事实** : 大脑的进化进程过于缓慢，无法帮助我们将其结构适应于抽象思维。200,000 年前对生存非常有利的能力，无法满足处理现代抽象知识的需求。简单的计算任务，如乘法或除法，在人脑中进行得极其低效。毕竟，早期人类并不需要大量进行乘法运算。同时，长时间以来，计算机在模式识别和处理方面很难与视觉皮层竞争。识别敌人或猎物对_智人_以及鸟类、爬行动物、鱼类甚至昆虫来说都是至关重要的。我们大脑突触衡量知识重要性的唯一标准是重复模式、暴露时循环激素的水平，以及在编码时对信息进行重要性标记的有限影响。遗忘是优化知识存储所必需的；因此，我们必须忘记不那么重要的事情。反复使用记忆中的知识是一个好的但远非完美的重要性衡量标准（见： [我们记住有用的东西是因为我们使用它们](https://help.supermemo.org/wiki/Incremental_learning#Myth:_We_remember_useful_things_because_we_use_them) ）

现代生活改变了知识的价值和重要性的层次。重要性与重复使用之间的联系已被切断。我们每天早上看到的华丽内衣广告牌不太可能比与我们职业生活相关的数十个易变事实更重要。遗憾的是，我们的大脑中没有电路可以让我们有意识地铭刻重要的记忆： _这很重要！我绝不能忘记它！_ 我们能做的只是利用回响或记忆技巧，但... 除非我们像在 SuperMemo 中那样应用[间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition") ，否则这些技巧通常不会持续太久。

如果记忆具有出色的保留重要信息的能力：

1. 你不会在考试前感到紧张，慌忙翻阅笔记，以确保在关键时刻不会出现记忆空白。与此同时，你可以轻松回忆起昨晚或甚至几周前观看的[施瓦辛格](https://en.wikipedia.org/wiki/Schwarzenegger)电影的细节。显然，阿诺德比[奥斯曼帝国](https://en.wikipedia.org/wiki/Ottoman)的起伏更胜一筹。如果你认为奥斯曼帝国对人类的影响远大于电影_突击队_中的岛屿枪战，你仍然可能比起苏丹的时间线，更加清晰地记得肌肉和机枪。
2. 你永远不会忘记你岳母生日的日期。这是对你婚姻和谐至关重要的一条信息！
3. 你应该立刻忘记1996年亚特兰大或1972年慕尼黑的奥运会足球冠军。毕竟这可能是一个典型的不重要知识的案例。然而，很少有非洲人会忘记1996年尼日利亚以4:3战胜阿根廷的比赛。同样，很少有波兰人会忘记波兰足球历史上最难忘的时刻：慕尼黑的奥运会冠军。

事实是，我们只会出色地记住那些既容易记住又足够频繁重复的事物。大脑并没有内部的重要性衡量标准（除了有限的意志控制或通过重复接触的控制）！你的记忆存储毫不留情地删除你职业生涯中至关重要的知识，就像轻易抹去去年高尔夫成绩的痕迹或无聊肥皂剧结尾列出的参与者名字一样。SuperMemo 将确保你记住你的关键数据。进入记忆的内容将留在记忆中，出去的内容则可以自由离开。

### 神话：我们记住有用的东西是因为我们使用它们

**神话：我们记住有用的东西是因为我们使用它们** 。  
**事实** : 我们不仅在记住我们认为重要的事情方面受到限制。我们甚至不能依赖于经常使用的记忆会被更好地记住这一事实。使用频率不足的主要原因有两个：

- **[间隔效应](https://help.supermemo.org/wiki/Glossary:Spacing_effect "Glossary:Spacing effect")** （频繁使用的记忆可能非常不稳定）：如果你经常使用某些东西，例如信用卡的密码，你可能会对突然的意外[记忆丧失](https://help.supermemo.org/wiki/Glossary:Lapse "Glossary:Lapse")感到惊讶！那些使用过于频繁或过于明显的事实，无法对记忆系统形成足够的挑战。它们只是表面上被记住。任何使用的中断、压力、情境变化或其他记忆的无意干扰都可能导致突然无法从记忆中回忆起某个事实。即使是 SuperMemo 在这些情况下也可能无能为力。这些简单的[项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item")往往会迅速增长它们的[间隔](https://help.supermemo.org/wiki/Glossary:Interval "Glossary:Interval") ，并无法防止间隔效应。
- **隧道视野** : 当我们依赖于经常使用的记忆时，我们扩展视野的速度很慢。通过 [间隔重复](https://help.supermemo.org/wiki/Glossary:Spaced_repetition "Glossary:Spaced repetition") ，你可以迅速将稳定且连贯的知识扩展到新的领域。当依赖频繁使用时，这种扩展并不容易，甚至是不可能的。需要进行有意识的干预。在极端情况下，你可能会问一只猫为什么它无法掌握数学。在猫的隧道视野中，简单的目标导致了一组狭窄的事实知识，这些知识是所需的并被记住。猫永远不会自己飞往火星。

反对 SuperMemo 的人常常说：“ _我需要的知识我会经常使用。如果我经常使用它，我就不会忘记_ 。”这是一个错误的信念。 [间隔效应](https://help.supermemo.org/wiki/Glossary:Spacing_effect "Glossary:Spacing effect")和遗忘是不可预测的。每天都有有用的东西从你的脑海中溜走。你可能会说，如果需要飞往火星，你可以只阅读你认为有用的数学工具。然而，今天无用的工具在五年后，或者明天，当你面对不同的问题时，可能会变得有用。你需要在脑海中准备好整个工具集。额外知识的联想能力使你成为更好的问题解决者和更强的思考者。

隧道视野效应可以通过广泛阅读来抵消，但没有比[增量阅读](https://help.supermemo.org/wiki/Glossary:Incremental_reading "Glossary:Incremental reading")更好的阅读方式。

# 增量学习的历史

增量学习对 SuperMemo 的重要性可能与最初的[间隔重复理念](https://supermemo.guru/wiki/General_principles_of_spaced_repetition)一样。增量学习消除了限制_[知识获取](https://help.supermemo.org/wiki/Incremental_learning#Knowledge_acquisition:_Areas_of_optimization)_各个阶段的许多瓶颈。

_[增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading)_这个名称首次出现在 SuperMemo 2000 中。然而，这个概念并不新颖。它源于将我们自然的阅读习惯与_[间隔重复（SuperMemo）](https://help.supermemo.org/wiki/SuperMemo "SuperMemo")_ 的需求相结合。我们很少会拿起一本书一口气读完。在学校，我们常常翻阅多本用于不同课程的教科书。在家里，我们会停止阅读一本书去看报纸，然后又停止看报纸去看电视。需求和兴趣的结合决定了我们在阅读单个文本时的深入程度。SuperMemo 将这一概念推向极致，让你可以只阅读一本书中一个章节的一句话，然后继续阅读来自一千本书和/或文章的[摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 。SuperMemo 在这里的贡献仅仅是管理这一多源阅读过程。至于[增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading)的创造性方面，[Niels Bohr](https://en.wikipedia.org/wiki/Niels_Bohr) 以利用间歇性阅读和间歇性思考来最大化他的创造性产出而闻名。他会保留数十个书架，上面放着想法的提纲。他会不时回到某个书架，尤其是。 如果他受到了一次对话、思考、实验或阅读的启发，他会继续阅读一个书架上的书籍，思考和沉思，添加新的笔记等。许多这样的书架最终成为了科学出版物。 从这个意义上说，[尼尔斯·玻尔](https://en.wikipedia.org/wiki/Niels_Bohr)在他的创作中运用了基本的 [增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading) 。

增量阅读中使用的方法被许多创造性个体广泛采用。即使它远没有[增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading)或甚至[玻尔](https://en.wikipedia.org/wiki/Niels_Bohr)的方法那么正式。 [迈克尔·加扎尼加博士](https://en.wikipedia.org/wiki/Michael_Gazzaniga)这样说：“ _我认为创造过程与一个人花费在思考某事上的时间直接相关。我一直在回顾和重新审视想法、数据、思考。我认为这保持了关键语义网络的活跃，然后‘哇’，一个不一致或一致性突然呈现在意识中，新的想法的开端出现了_ ”。

以下是增量阅读的简要历史：

- **在 SuperMemo 之前（1980）**：SuperMemo 的作者以及这篇逐步撰写文本的合著者，[Piotr Wozniak](https://supermemo.guru/wiki/Piotr_Wozniak)，在学生时代使用了他自己独特的“跨笔记本”学习方法。他会翻阅自己的纸质笔记，划掉那些他确信能记住的内容。他会一遍又一遍地阅读笔记，直到所有的笔记都被划掉。每次阅读的速度都在加快，因为要读的内容越来越少。这种方法几乎可以保证优秀的考试成绩。他的所有讲义笔记上都布满了划掉的形状，围绕着图片和文本部分。这种“颗粒化处理”与“处理属性”可以被视为未来[增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading)的早期灵感。
- **SuperMemo 算法（1984-1985）** - 第一次尝试测量学习中的[最佳间隔](https://help.supermemo.org/wiki/Glossary:Optimum_interval "Glossary:Optimum interval") ，最终在 1985 年形成了 SuperMemo 方法
- **SuperMemo 1.0 (1987)** - SuperMemo 的诞生也是_计算机间隔重复_的诞生，即在学习中使用计算机计算[最佳间隔](https://help.supermemo.org/wiki/Glossary:Optimum_interval "Glossary:Optimum interval") 。
- **[SuperMemo 2 - SuperMemo 98 (1987-1998)](https://super-memory.com/english/sms.htm)** - 在 1987 年至 1998 年期间，SuperMemo 的用户在收集学习材料以便使用 SuperMemo 学习方面只有两个选择：
    1. 手动输入并制定，或者
    2. 从同事、SuperMemo 库等获取现成的学习材料。

SuperMemo 支持从电子来源学习的唯一方式是通过 **复制** 和 **粘贴** 。

- **[SuperMemo 99 (1999)](https://super-memory.com/articles/soft/sm99.htm)** 迈出了高效阅读电子文章的第一步，推出了 [阅读列表](https://super-memory.com/articles/read.htm) 和首个原始阅读工具： **提取** 和 **填空** 。阅读列表是优先阅读的文章列表。提取功能使得将较大的文章拆分成较小的部分成为可能。填空功能则通过 _[填空删除](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion")_ （即填空题）将短句转换为问答格式。
- **[SuperMemo 2000](https://super-memory.com/articles/soft/sm10.htm)** 通过引入 _[增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading)_ 的概念，大大提高了阅读的效率。增量阅读使得同时阅读数十篇文章成为可能。每篇文章都以小的增量进行阅读，完全由用户和/或默认学习过程控制和优先排序。SuperMemo 2000 中引入的 [增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading) 组件包括：基于新的 [A-Factor](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor") 的 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") 重复方案（即学习算法）、 [阅读点](https://help.supermemo.org/wiki/Glossary:Read-point "Glossary:Read-point") 、在 [提取](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 和 [填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 中的格式化（SuperMemo 99 会忽略格式化）、文本高亮、源文章链接、 [阅读工具栏](https://help.supermemo.org/wiki/Read_toolbar "Read toolbar") 、 [子集学习](https://help.supermemo.org/wiki/Incremental_learning#Subset_review) 、子集 [推迟](https://help.supermemo.org/wiki/Postpone "Postpone") 和对较长文章的支持（SuperMemo 99 限制为 64K 文章）。
- **[SuperMemo 2002](https://super-memo.com/supermemo/supermemo2002.html)** 将 [增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading) 提升到了一个新水平。在 SuperMemo 2002 中， [增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading) 成为中级和高级学生的主要学习模式。SuperMemo 2002 引入了 [基于 HTML 的](https://help.supermemo.org/wiki/HTML_component "HTML component")[增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading) 。用户第一次会发现他在网页浏览器中看到的材料与在 SuperMemo 中看到的几乎没有区别。SuperMemo 2002 还引入了其他新功能：从 Internet Explorer [自动导入学习材料](https://help.supermemo.org/wiki/Web_import "Web import") 、 [中间间隔重复](https://help.supermemo.org/wiki/Glossary:Mid-interval_repetition "Glossary:Mid-interval repetition") ，使得在不损害学习过程的情况下复习部分材料成为可能，例如在考试前（ [算法 SM-11](https://super-memory.com/english/algsm11.htm)）、 [基于搜索的学习](https://help.supermemo.org/wiki/Incremental_learning#Search_and_review) （即通过高级 [搜索工具](https://help.supermemo.org/wiki/Find_elements "Find elements") 定义子集的子集学习）、动态修改的 [A-Factors](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor")，在无需用户干预的情况下微调 [优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 、 [推迟向导](https://help.supermemo.org/wiki/Postpone "Postpone") ，使得 [阅读列表](https://help.supermemo.org/wiki/Glossary:Reading_list "Glossary:Reading list") 变得过时、独立的 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") / [项目](https://help.supermemo.org/wiki/Glossary:Item "Glossary:Item") 统计和新的 [增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading) 进度统计、 [参考标签](https://help.supermemo.org/wiki/References "References") ，等等。
- **[SuperMemo 2004](https://super-memo.com/supermemo/supermemo2004.html)** 的开发完全是为了完善 [增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading) 的工具。经过数月实际 [增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading) 收集的数据对改进算法和工具起到了重要作用。对 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") [A-Factors](https://help.supermemo.org/wiki/Glossary:A-Factor "Glossary:A-Factor") 修改的微调增强了在高度超负荷的过程中对新材料复习的优化。新工具包括：用于监控和优化学习过程的丰富统计数据、处理复习中过度延迟的工具、浏览 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 和 [填空](https://help.supermemo.org/wiki/Glossary:Cloze_deletion "Glossary:Cloze deletion") 来源的工具、一键 [参考标记](https://help.supermemo.org/wiki/References "References") 、传播远程图像、轻松集成远程图像等。
- **[SuperMemo 2006](https://super-memo.com/supermemo/supermemo2006.html)** 在合理化 [信息过载](https://help.supermemo.org/wiki/Glossary:Overload "Glossary:Overload") 方面迈出了重要一步，通过引入 _[优先队列](https://help.supermemo.org/wiki/Incremental_learning#Priority_queue)_ 来改善 [增量学习](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading) 。SuperMemo 2006 使从互联网（尤其是 [维基百科](https://en.wikipedia.org/) ）导入文章变得更加容易。信息 [过载](https://help.supermemo.org/wiki/Glossary:Overload "Glossary:Overload") 可以通过 [自动推迟和自动排序](https://help.supermemo.org/wiki/Incremental_learning#Auto-sort_and_auto-postpone) 工具来处理。SuperMemo 2006 简化了导入、整理、压缩、转换、缩放和裁剪图片的过程。SuperMemo 2006 可以选择用户磁盘上的任何文件夹，并将所有文件档案转换为可以增量处理的材料（例如，文章档案、图片档案、家庭相册、电影片段、文档文件或各种档案）。SuperMemo 2006 还简化了一键搜索和导入网络辅助学习材料的过程，配备可定制的工具（例如，谷歌、百科全书、词典、图片档案等）。
- **[SuperMemo 2008](https://super-memo.com/supermemo/supermemo2008.html)** 将增量学习扩展到图片、声音和视频领域，结合了[视觉学习](https://help.supermemo.org/wiki/Incremental_learning#Visual_learning)和基于 YouTube 的[增量视频](https://help.supermemo.org/wiki/Incremental_learning#Incremental_video) 。从网络导入内容，特别是[维基百科](https://en.wikipedia.org/)和 YouTube，变得更加简单，设定了[优先级](https://help.supermemo.org/wiki/Glossary:Priority "Glossary:Priority") 、 [参考文献](https://help.supermemo.org/wiki/References "References") 、 [类别](https://help.supermemo.org/wiki/Glossary:Category "Glossary:Category")等。SuperMemo 2008 还简化和自动化了创建[源材料参考](https://help.supermemo.org/wiki/References "References")的过程。
- **[SuperMemo 15 (2011)](http://super-memo.com/supermemo/supermemo15.html)** 改进了 [网页导入](https://help.supermemo.org/wiki/Web_import "Web import") （例如，消除文章重复），拆分文章（例如，自动将 [维基百科](https://en.wikipedia.org/) 文章拆分为单独的 [主题](https://help.supermemo.org/wiki/Glossary:Topic "Glossary:Topic") ）， [处理引用](https://help.supermemo.org/wiki/References "References") ，等等。由于 SuperMemo 15 提供了完整的 Unicode 支持，其他语言的 [增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading) 变得更加容易。
- **[SuperMemo 16 (2013)](https://super-memo.com/supermemo/supermemo16.html)** 整合了所有增量学习技术，补充了最后两个缺失的环节： [增量音频](https://help.supermemo.org/wiki/Incremental_learning#Incremental_audio) 和 [增量视频](https://help.supermemo.org/wiki/Incremental_learning#Incremental_video) ，以及视频文件。它为 [维基百科](https://en.wikipedia.org/) 导入添加了更多工具（例如，下载全分辨率图片而不是缩略图等），以及 [视觉学习](https://help.supermemo.org/wiki/Incremental_learning#Visual_learning) （例如，全局粘贴）。它还使得在子 [浏览器](https://help.supermemo.org/wiki/Browser "Browser") 中将 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract") 与源文章分开成为可能。对增量学习过程的数十项改进将数量转化为新的质量。例如，SuperMemo 16 增加了从 Windows (Live) Mail 导入的功能，或者一个微不足道但极其有用的 [增量阅读](https://help.supermemo.org/wiki/Incremental_learning#Incremental_reading) 功能： **[光标前删除](https://help.supermemo.org/wiki/Component_menu#delete_before_cursor "Component menu")** 。有关详细列表，请参见：[SuperMemo 16 有什么新功能？](https://super-memory.com/archive/help16/new16.htm)
- **[SuperMemo 17 (2016)](https://super-memo.com/supermemo/supermemo17.html)** 在 增量学习 中增加了神经处理。 [神经复习](https://help.supermemo.org/wiki/Glossary:Neural_review "Glossary:Neural review") 是一种 [子集复习](https://help.supermemo.org/wiki/Subset_review "Subset review") 形式，其中由 [知识树](https://help.supermemo.org/wiki/Glossary:Knowledge_tree "Glossary:Knowledge tree") 和用户定义的 [概念图](https://help.supermemo.org/wiki/Glossary:Concept_map "Glossary:Concept map") 建立的语义连接可以以不可预测的方式进行跟踪（使用 [扩散激活算法](https://help.supermemo.org/wiki/Glossary:Spreading_activation "Glossary:Spreading activation") ）。 [神经创造力](https://help.supermemo.org/wiki/Neural_creativity "Neural creativity") 是在创造力和问题解决中运用增量学习过程的一种特别强大的方式。SuperMemo 17 采用了一种 [新的间隔重复算法](https://supermemo.guru/wiki/SuperMemo_Algorithm) ，能够处理与最佳重复间隔的极端偏差，而不影响未来的最佳调度。有关详细列表，请参见：[SuperMemo 17 中的新内容？](https://super-memory.com/archive/help17/new.htm)
- **[SuperMemo 18 (2020)](https://help18.supermemo.org/wiki/What's_new_in_SuperMemo_18?)**: 对[算法](https://help.supermemo.org/wiki/Algorithm_SM-18 "Algorithm SM-18")的细微改进。数十项小改进（包括速度、对[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")的处理等）。
- **[SuperMemo 19 (2023)](https://help.supermemo.org/wiki/What%27s_new_in_SuperMemo_19%3F "What's new in SuperMemo 19?")**: 扩展[支持的网页浏览器](https://help.supermemo.org/wiki/Web_import "Web import")范围，使得从网络到[增量阅读](https://help.supermemo.org/wiki/Incremental_reading "Incremental reading")的大规模知识转移变得简单。 [摘录](https://help.supermemo.org/wiki/Glossary:Extract "Glossary:Extract")可以在外部网站上使用。处理[概念](https://help.supermemo.org/wiki/Glossary:Concept "Glossary:Concept")变得更加简化，得益于[集合](https://help.supermemo.org/wiki/Glossary:Collection "Glossary:Collection")结构和[神经创造力](https://help.supermemo.org/wiki/Neural_creativity "Neural creativity") 。页面更新更容易（例如，在维基百科导入时）。

# 补充材料

- [使用增量阅读（视频）](https://youtu.be/DoQoeK53bP8)
- [使用增量阅读（来自愉悦学习的评论）](https://youtu.be/e3BHwRVQlCs)
- [增量阅读的优势](https://supermemo.guru/wiki/Advantages_of_incremental_reading)
- [如何在一个小时内读完一本书？](https://supermemo.guru/wiki/How_to_read_a_book_in_an_hour)
- [我怎样才能更快地阅读？](https://supermemo.guru/wiki/How_can_I_read_faster%3F)
- [增量阅读有替代方案吗？](https://www.youtube.com/watch?v=aDu_UDBCPy8) (视频)

## 导航菜单

- [创建账户](https://help.supermemo.org/index.php?title=Special:CreateAccount&returnto=Incremental+learning "You are encouraged to create an account and log in; however, it is not mandatory")
- [登录](https://help.supermemo.org/index.php?title=Special:UserLogin&returnto=Incremental+learning "You are encouraged to log in; however, it is not mandatory [alt-shift-o]")

- [页面](https://help.supermemo.org/wiki/Incremental_learning "View the content page [alt-shift-c]")
- [讨论](https://help.supermemo.org/index.php?title=Talk:Incremental_learning&action=edit&redlink=1 "Discussion about the content page (page does not exist) [alt-shift-t]")

- [阅读](https://help.supermemo.org/wiki/Incremental_learning)
- [查看源代码](https://help.supermemo.org/index.php?title=Incremental_learning&action=edit "This page is protected.
    You can view its source [alt-shift-e]")
- [查看历史](https://help.supermemo.org/index.php?title=Incremental_learning&action=history "Past revisions of this page [alt-shift-h]")

### Search

[](https://help.supermemo.org/wiki/Main_Page "Visit the main page")

- [SuperMemoPedia](https://supermemopedia.com/wiki/Main_Page)
- [SuperMemo 大师](https://supermemo.guru/wiki/SuperMemo_Guru)
- [最近的变化](https://help.supermemo.org/wiki/Special:RecentChanges "A list of recent changes in the wiki [alt-shift-r]")
- [随机页面](https://help.supermemo.org/wiki/Special:Random "Load a random page [alt-shift-x]")
- [特殊页面](https://help.supermemo.org/wiki/Special:SpecialPages)

### 工具

- [这里有什么链接](https://help.supermemo.org/wiki/Special:WhatLinksHere/Incremental_learning "A list of all wiki pages that link here [alt-shift-j]")
- [相关更改](https://help.supermemo.org/wiki/Special:RecentChangesLinked/Incremental_learning "Recent changes in pages linked from this page [alt-shift-k]")
- 可打印版本
- [永久链接](https://help.supermemo.org/index.php?title=Incremental_learning&oldid=11910 "Permanent link to this revision of this page")
- [页面信息](https://help.supermemo.org/index.php?title=Incremental_learning&action=info "More information about this page")

- This page was last edited on 24 June 2025, at 12:48.

- [Privacy policy](https://help.supermemo.org/wiki/SuperMemo_Help:Privacy_policy)
- [About SuperMemo Help](https://help.supermemo.org/wiki/SuperMemo_Help:About)
- [Disclaimers](https://help.supermemo.org/wiki/SuperMemo_Help:General_disclaimer)

- [![Powered by MediaWiki](https://help.supermemo.org/resources/assets/mediawiki_compact.svg)](https://www.mediawiki.org/)